import React, { useEffect, useState } from "react";
import { Card, List } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./productDetail.scss";
import mockjs from "mockjs";
import { reqCategoryName } from "../../api/index";
/**Product详情页 */
export default function ProductDetail() {
  useEffect(() => {
    getCategoryName();
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const { desc, detail, name, price, images } =
    location?.state;
  const getCategoryName = async () => {
    const { data } = await reqCategoryName();
    console.log("res", data?.data);
    setCategoryName(data?.data?.name);
  };
  return (
    <div>
      <Card
        title={
          <span>
            <ArrowLeftOutlined
              onClick={() => navigate("/product")}
              style={{ marginRight: 8, color: "#1890ff" }}
            />
            <span>商品详情</span>
          </span>
        }
        className="product-detail"
      >
        <List bordered>
          <List.Item className="list-item">
            <span className="left">商品名称 :</span>
            <span className="right">{name}</span>
          </List.Item>
          <List.Item className="list-item">
            <span className="left">商品描述 :</span>
            <span className="right">{desc}</span>
          </List.Item>
          <List.Item className="list-item">
            <span className="left">商品价格 :</span>
            <span className="right">¥ {price}</span>
          </List.Item>
          <List.Item className="list-item">
            <span className="left">所属分类 :</span>
            <span className="right">{categoryName}</span>
          </List.Item>
          <List.Item className="list-item">
            <span className="left">商品图片 :</span>
            <span className="product-images">
              {images.map((item, index) => {
                return (
                  <img className="product-img" key={index} src={item} alt="" />
                );
              })}
            </span>
          </List.Item>
          <List.Item className="list-item">
            <span className="left">商品详情 :</span>
            <span className="right">{detail}</span>
          </List.Item>
        </List>
      </Card>
    </div>
  );
}
