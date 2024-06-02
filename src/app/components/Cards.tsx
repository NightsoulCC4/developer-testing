import React from "react";
import { Card, Space } from "antd";
import { CardsType } from "../datatype/interfaces";
import Modals from "./Modals";

const Cards: React.FC<CardsType> = ({
  project_name,
  short_description,
  price,
  bed_count,
  area,
  images,
  type,
}) => {

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

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
          <img src={images[0].imageUrl} alt="no-img" />
        </div>
      </Card>
      <Modals
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        project_name={project_name}
        images={images}
      />
    </Space>
  );
};

export default Cards;
