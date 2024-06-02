"use client";

import React from "react";
import { getData } from "./service";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

import {
  RealEstate,
  RealEstates,
  Data,
  SearchRealEstates,
} from "./constants/interfaces";

const App = () => {
  const [data, setData] = React.useState<
    RealEstates | SearchRealEstates | undefined
  >();

  const [purchaseType, setPurchaseType] = React.useState<string>("rent");
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);
  const [bedCount, setBedCount] = React.useState<number>(0);
  const [area, setArea] = React.useState<string>("");

  if (data == undefined) getData().then((res: Data) => setData(res.data));

  const isRealEstates = (data: any): data is RealEstates => {
    return data && Array.isArray(data.real_estates);
  };

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
      <div className="mx-auto inline-block content-center">
        {isRealEstates(data) ? (
          data?.real_estates?.map((el: RealEstate, index: number) => (
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
          ))
        ) : (
          data?.search_real_estates?.map((el: RealEstate, index: number) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default App;
