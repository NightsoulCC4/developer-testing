"use client";

import React from "react";
import { getData } from "./service";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

interface Image {
  id_image_gallery: number;
  imageUrl: string;
  id_real_estate: number;
}

interface RealEstate {
  area: string;
  bed_count: number;
  id_real_estate: number;
  imageUrl: string;
  price: number;
  project_name: string;
  short_description: string;
  images: Image[];
}

interface Data {
  data: {
    real_estates: RealEstate[];
  };
}

interface RealEstates {
  real_estates: RealEstate[];
}

type El = RealEstate;

const App = () => {
  const [data, setData] = React.useState<RealEstates | undefined>();

  if (data == undefined)
    getData().then((res: Data) => {
      console.log(res.data.real_estates);

      setData(res.data);
    });

  return (
    <div>
      <Navbar />
      {data?.real_estates?.map((el: RealEstate, index: number) => (
        <Cards
          key={index}
          project_name={el.project_name}
          short_description={el.short_description}
          area={el.area}
          bed_count={el.bed_count}
          imageUrl={el.images[0]?.imageUrl}
          price={el.price}
        />
      ))}
    </div>
  );
};

export default App;
