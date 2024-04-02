import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

const { Dragger } = Upload;

interface FileUploaderProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  onFileListChange: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  setFile,
  onFileListChange,
}) => {
  const draggerProps: UploadProps = {
    name: "file",
    listType: "picture",
    accept: ".pdf, .docx, .txt",
    maxCount: 1,
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }

      if (info.fileList.length === 0) {
        onFileListChange([]); // No files, so call the handler with an empty array
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Dragger
      {...draggerProps}
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
  );
};

export default FileUploader;
