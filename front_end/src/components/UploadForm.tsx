import { Button, Form, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import type { UploadProps } from "antd";
import { message } from "antd";
import { useState } from "react";

const { TextArea } = Input;

interface FormValues {
  instructions: string;
  upload: { originFileObj: File }[];
}

const normFile = (e: any) => {
  console.log(`e: ${e.fileList}`);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const dragger_props: UploadProps = {
  name: "file",
  listType: "picture",
  accept: ".pdf, .docx, .txt",
  maxCount: 1,
  onChange(info) {
    const { status } = info.file;
    if (status === "done") {
      console.log(info.file);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function UploadForm() {
  const [fileUpload, setFile] = useState<File | null>(null);

  const onFinish = async (values: FormValues) => {
    // Assuming `values.upload` contains file information like URLs or identifiers
    const form_data = new FormData();
    form_data.append("instructions", values.instructions);
    fileUpload && form_data.append("files", fileUpload);
    for (let [key, value] of form_data.entries()) {
      console.log(`${key}: ${value}`);
      if (key === "files") {
        console.log(value);
      }
    }
    try {
      const response = await fetch("http://127.0.0.1:8080/process_input", {
        method: "POST",
        body: form_data,
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      const data = await response.json();
      console.log("Submission successful", data);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <Form
      style={{
        height: "100vh",
        width: "80%",
        padding: "10px",
      }}
      onFinish={onFinish}
    >
      <Form.Item name="instructions">
        <TextArea rows={6} placeholder="Add any instructions here!" />
      </Form.Item>

      <Form.Item
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Dragger
          {...dragger_props}
          customRequest={({ file, onSuccess }: any) => {
            setFile(file);
            setTimeout(() => {
              onSuccess("ok");
            }, 0);
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
        >
          Convert To LaTeX
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UploadForm;
