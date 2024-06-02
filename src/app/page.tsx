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
  type: string;
  images: Image[];
}

interface Data {
  data: {
    real_estates: RealEstate[];
  };
}

export interface RealEstates {
  real_estates: RealEstate[];
}

const App = () => {
  const [data, setData] = React.useState<RealEstates | undefined>();

  const [purchaseType, setPurchaseType] = React.useState<string>("rent");
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);
  const [bedCount, setBedCount] = React.useState<number>(0);
  const [area, setArea] = React.useState<string>("");

  if (data == undefined) getData().then((res: Data) => setData(res.data));

  return (
    <div>
      <Navbar
        purchaseType={purchaseType}
        setPurchaseType={setPurchaseType}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        bedCount={bedCount}
        setBedCount={setBedCount}
        area={area}
        setArea={setArea}
        data={data}
        setData={setData}
      />
      {data?.real_estates?.map((el: RealEstate, index: number) => (
        <Cards
          key={index}
          project_name={el.project_name}
          short_description={el.short_description}
          area={el.area}
          bed_count={el.bed_count}
          imageUrl={el.images[0]?.imageUrl}
          price={el.price}
          type={el.type}
        />
      ))}
    </div>
  );
};

export default App;
