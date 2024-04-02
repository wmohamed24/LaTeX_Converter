import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message } from "antd";
import Dragger from "antd/es/upload/Dragger";

const props: UploadProps = {
  name: "file",
  listType: "picture",
  accept: ".pdf, .docx",
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

function Uploader() {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
    </Dragger>
  );
}

export default Uploader;
