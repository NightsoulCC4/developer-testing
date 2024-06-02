import { Card } from "antd";
import React from "react";

const PriceAlertCard: React.FC = () => {
  return (
    <Card
      style={{
        width: 300,
        margin: 3,
        position: "fixed",
        top: 5,
        right: 5,
        color: "red",
        fontSize: 20,
        textAlign: "center",
      }}
    >
      min price can not higher than max price
    </Card>
  );
}

export default PriceAlertCard;