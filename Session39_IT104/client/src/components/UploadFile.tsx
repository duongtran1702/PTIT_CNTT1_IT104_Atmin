import React, { useState } from "react";
import axios from "axios";
import { Upload, Button, Card, Row, Col, Spin, message } from "antd";
import { PlusOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

interface PreviewFile {
  file: File;
  preview: string;
  uploadedUrl?: string;
  uploading?: boolean;
}

const UploadMultipleFiles: React.FC = () => {
  const [files, setFiles] = useState<PreviewFile[]>([]);

  // chọn file -> tạo preview -> thêm vào list
  const handleChange: UploadProps["beforeUpload"] = (file) => {
    const preview = URL.createObjectURL(file);
    setFiles((prev) => [...prev, { file, preview }]);
    return false; // chặn upload mặc định
  };

  // xóa file
  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // upload tất cả file lên Cloudinary
  const handleUploadAll = async () => {
    if (files.length === 0) {
      message.warning("Chọn ít nhất 1 ảnh!");
      return;
    }

    const updated = [...files];
    for (let i = 0; i < updated.length; i++) {
      if (updated[i].uploadedUrl) continue;
      updated[i].uploading = true;
      setFiles([...updated]);

      const formData = new FormData();
      formData.append("file", updated[i].file);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await axios.post(UPLOAD_URL, formData);
        updated[i].uploadedUrl = res.data.secure_url;
        message.success(`Tải lên thành công: ${updated[i].file.name}`);
      } catch {
        message.error(`Lỗi tải lên: ${updated[i].file.name}`);
      } finally {
        updated[i].uploading = false;
        setFiles([...updated]);
      }
    }
  };

  return (
    <div className="upload-container">
      <Upload multiple beforeUpload={handleChange} showUploadList={false} accept="image/*">
        <Button icon={<PlusOutlined />}>Chọn ảnh</Button>
      </Upload>

      <Row gutter={[16, 16]} className="grid">
        {files.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="image-card"
              cover={
                <div className="card-image-wrapper">
                  <img src={item.uploadedUrl || item.preview} alt={item.file.name} className="image" />

                  {item.uploading && (
                    <div className="spinner-overlay">
                      <Spin />
                    </div>
                  )}

                  <Button
                    type="primary"
                    danger
                    shape="circle"
                    icon={<DeleteOutlined />}
                    size="small"
                    className="remove-button"
                    onClick={() => handleRemove(index)}
                  />
                </div>
              }
            />
          </Col>
        ))}
      </Row>

      {files.length > 0 && (
        <Button type="primary" icon={<UploadOutlined />} onClick={handleUploadAll} className="upload-all-button">
          Upload tất cả
        </Button>
      )}
    </div>
  );
};

export default UploadMultipleFiles;
