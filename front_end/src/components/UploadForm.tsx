import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import FileUploader from "./FileUploader"; // Adjust the import path as necessary

const { TextArea } = Input;

interface FormValues {
  instructions: string;
  upload: { originFileObj: File }[];
}

const UploadForm: React.FC = () => {
  const [fileUpload, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileListChange = (files: File[]) => {
    setFile(files.length > 0 ? files[0] : null);
  };

  const onFinish = async (values: FormValues) => {
    setIsLoading(true); // Start loading
    const form_data = new FormData();
    form_data.append("instructions", values.instructions);
    if (fileUpload) form_data.append("files", fileUpload);

    try {
      const response = await fetch("http://127.0.0.1:8080/process_input", {
        method: "POST",
        body: form_data,
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      const data = await response.json();
      if (data.status === "success") {
        window.location.href = "http://127.0.0.1:8080/download/temp.tex";
      }
      console.log("Submission successful", data);
    } catch (error) {
      console.error("Submission failed", error);
      notification.error({
        message: "Conversion Failed",
        description:
          "There was an error processing your request. Please try again.",
        placement: "topRight", // This controls where on the screen the notification appears
      });
    } finally {
      setIsLoading(false); // End loading
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

      <Form.Item name="upload">
        <FileUploader
          setFile={setFile}
          onFileListChange={handleFileListChange}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={isLoading} // Pass the isLoading state to the loading prop
        >
          Convert To LaTeX
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UploadForm;
