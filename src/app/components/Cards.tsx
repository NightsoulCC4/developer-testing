import React from "react";
import { Card, Space } from "antd";

interface cards {
  project_name: string;
  short_description: string;
  price: number;
  bed_count: number;
  area: string;
  imageUrl: string;
}

const Cards: React.FC<cards> = ({
  project_name,
  short_description,
  price,
  bed_count,
  area,
  imageUrl,
}) => (
  <Space direction="vertical" size={16}>
    <Card title={project_name} style={{ width: 300, margin: 3 }}>
      <p>Price: {price}฿</p>
      <p>Bedrooms: {bed_count}</p>
      <p>Area: {area}</p>
      <p className="line-clamp-2">Description: {short_description}</p>
      <div>
        <img src={imageUrl} alt="no-img" />
      </div>
    </Card>
  </Space>
);

export default Cards;
