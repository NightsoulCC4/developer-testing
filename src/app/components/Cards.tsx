import React from "react";
import { Card, Space } from "antd";
import { CardsType } from "../constants/interfaces";

const Cards: React.FC<CardsType> = ({
  project_name,
  short_description,
  price,
  bed_count,
  area,
  imageUrl,
  type,
  modalOpen,
  setModalOpen,
}) => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title={project_name}
        style={{ width: 300, margin: 3 }}
        onClick={() => setModalOpen(!modalOpen)}
        className="card"
      >
        <p>Price: {price}฿</p>
        <p>Type: {type}</p>
        <p>Bedrooms: {bed_count}</p>
        <p>Area: {area}</p>
        <p className="line-clamp-2">Description: {short_description}</p>
        <div>
          <img src={imageUrl} alt="no-img" />
        </div>
      </Card>
    </Space>
  );
};

export default Cards;
