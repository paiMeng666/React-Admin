import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, message } from "antd";
import React, { useState } from "react";
import mockjs from "mockjs";
import { reqDeleteImg } from "../../api/index";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const App = (props) => {
  const { getImages } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = async ({ fileList: newFileList, file }) => {
    console.log(file.status);
    /**上传文件 */
    if (file.status === "done") {
      const res = file?.response;
      if (res.success) {
        message.success("上传图片成功");
        const { name, url } = res?.data;
        file.name = name;
        file.url = url;
      } else {
        message.error("上传图片失败");
      }
    } else if (file.status === "removed") {
      /**删除图片 */
      const res = await reqDeleteImg(file.name);
      if (res?.data.success) {
        message.success("删除图片成功");
      } else {
        message.error("删除失败");
      }
    }
    setFileList(newFileList);
    getImages(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
      <Upload
        action="/manage/image/upload"
        listType="picture-card"
        fileList={fileList}
        name="image"
        onPreview={handlePreview}
        onChange={handleChange}
        accept="image/*"
      >
        {fileList.length >= 3 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
};

export default App;
