"use client";

import React from "react";
import { getData } from "./service";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

interface data {
  data: {
    real_estates: [
      {
        area: string;
        bed_count: number;
        id_real_estate: number;
        imageUrl: string;
        price: number;
        name: string;
      }
    ];
  };
}

interface real_estates {
  real_estates: [
    {
      area: string;
      bed_count: number;
      id_real_estate: number;
      imageUrl: string;
      price: number;
      name: string;
    }
  ];
}

interface el {
  area: string;
  bed_count: number;
  id_real_estate: number;
  imageUrl: string;
  price: number;
  name: string;
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
      {data?.real_estates?.map((el: el, index: number) => (
        <Cards
          key={index}
          name={el.name}
          area={el.area}
          bed_count={el.bed_count}
          imageUrl={el.imageUrl}
          price={el.price}
        />
      ))}
    </div>
  );
};

export default App;
