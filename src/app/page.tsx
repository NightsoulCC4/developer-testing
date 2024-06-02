"use client";

import React, { Key } from "react";
import { getData } from "./service";
import Navbar from "./components/Navbar";

interface data {
  data: {
    real_estates: [
      {
        area: String;
        bed_count: Number;
        id_real_estate: Number;
        imageUrl: String;
        price: Number;
        name: String;
      }
    ];
  };
}

interface real_estates {
  real_estates: [
    {
      area: String;
      bed_count: Number;
      id_real_estate: Number;
      imageUrl: String;
      price: Number;
      name: String;
    }
  ];
}

const App = () => {
  const [data, setData] = React.useState<real_estates | undefined>();

  if (data == undefined)
    getData().then((res: data) => {
      console.log(res.data.real_estates);

      setData(res.data);
    });

  return (
    <div>
       <Navbar />
      {data?.real_estates?.map((el: any, index: Key) => (
        <div key={index}>
          <h2>{el.projectName}</h2>
          <p>Name: {el.name}</p>
          <p>Price: {el.price}฿</p>
          <p>Bedrooms: {el.bed_count}</p>
          <p>Area: {el.area}</p>
          <div>
            <img src={el.imageUrl} alt="no-img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
