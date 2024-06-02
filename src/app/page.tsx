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
} from "./datatype/interfaces";
import NavbarMobile from "./components/NavbarMobile";

const App: React.FC = () => {
  const [data, setData] = React.useState<
    RealEstates | SearchRealEstates | undefined
  >();

  const [purchaseType, setPurchaseType] = React.useState<string>("rent");
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);
  const [bedCount, setBedCount] = React.useState<number>(0);
  const [area, setArea] = React.useState<string>("");
  const [currentWidth, setCurrentWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (data == undefined)
      getData().then((res: Data) => setData(res.data));
  });

  React.useEffect(() => {

    const updateSize = ():void => setCurrentWidth(window.innerWidth);

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);

  });

  const isRealEstates = (data: any): data is RealEstates => {
    return data && Array.isArray(data.real_estates);
  };

  return (
    <>
      {currentWidth >= 855 ? (
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
      ) : (
        <NavbarMobile
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
      )}
      {
        <div className="mx-8 my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 justify-center content-center max-w-full">
          {isRealEstates(data)
            ? data?.real_estates?.map((el: RealEstate, index: number) => (
                <span key={index}>
                  <Cards
                    project_name={el.project_name}
                    short_description={el.short_description}
                    area={el.area}
                    bed_count={el.bed_count}
                    images={el.images}
                    price={el.price}
                    type={el.type}
                  />
                </span>
              ))
            : data?.search_real_estates?.map(
                (el: RealEstate, index: number) => (
                  <span key={index} className="max-w-full">
                    <Cards
                      project_name={el.project_name}
                      short_description={el.short_description}
                      area={el.area}
                      bed_count={el.bed_count}
                      images={el.images}
                      price={el.price}
                      type={el.type}
                    />
                  </span>
                )
              )}
        </div>
      }
    </>
  );
};

export default App;
