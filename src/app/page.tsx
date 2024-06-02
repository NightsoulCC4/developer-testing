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
import Modals from "./components/Modals";

const App = () => {
  const [data, setData] = React.useState<
    RealEstates | SearchRealEstates | undefined
  >();

  const [purchaseType, setPurchaseType] = React.useState<string>("rent");
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);
  const [bedCount, setBedCount] = React.useState<number>(0);
  const [area, setArea] = React.useState<string>("");

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (data == undefined)
      getData().then((res: Data) => setData(res.data));
  })

  const isRealEstates = (data: any): data is RealEstates => {
    return data && Array.isArray(data.real_estates);
  };

  return (
    <>
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
      {
        <div className="mx-auto inline-block content-center">
          {isRealEstates(data)
            ? data?.real_estates?.map((el: RealEstate, index: number) => (
                <span key={index}>
                  <Cards
                    project_name={el.project_name}
                    short_description={el.short_description}
                    area={el.area}
                    bed_count={el.bed_count}
                    imageUrl={el.images[0]?.imageUrl}
                    price={el.price}
                    type={el.type}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                  />
                <Modals
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  />
                </span>
              ))
            : data?.search_real_estates?.map(
                (el: RealEstate, index: number) => (
                  <span key={index}>
                    <Cards
                      project_name={el.project_name}
                      short_description={el.short_description}
                      area={el.area}
                      bed_count={el.bed_count}
                      imageUrl={el.images[0]?.imageUrl}
                      price={el.price}
                      type={el.type}
                      modalOpen={modalOpen}
                      setModalOpen={setModalOpen}
                    />
                  <Modals
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen} />
                  </span>
                )
              )}
        </div>
      }
    </>
  );
};

export default App;
