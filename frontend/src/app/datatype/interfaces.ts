/* ------------------------------------------------------------------------------------------------------------------ */
// Data layer.

import React from "react";

/* ------------------------------------------------------------------------------------------------------------------ */
export interface Data {
  data: {
    real_estates: RealEstate[];
  };
}

export interface DataSearch {
  data: {
    search_real_estates: RealEstate[];
  };
}

/* ------------------------------------------------------------------------------------------------------------------ */
// Query layer.
/* ------------------------------------------------------------------------------------------------------------------ */
export interface RealEstates {
  real_estates: RealEstate[];
}

export interface SearchRealEstates {
  search_real_estates: RealEstate[];
}

/* ------------------------------------------------------------------------------------------------------------------ */
// Type layer.
/* ------------------------------------------------------------------------------------------------------------------ */
export interface Image {
  id_image_gallery: number;
  imageUrl: string;
  id_real_estate: number;
}

export interface RealEstate {
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

/* ------------------------------------------------------------------------------------------------------------------ */
// Components layer.
/* ------------------------------------------------------------------------------------------------------------------ */
export interface CardsType {
  project_name: string;
  short_description: string;
  price: number;
  bed_count: number;
  area: string;
  images: Image[];
  type: string;
}

export interface NavbarsType {
  purchaseType: string;
  setPurchaseType: React.Dispatch<React.SetStateAction<string>>;
  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  bedCount: number;
  setBedCount: React.Dispatch<React.SetStateAction<number>>;
  area: string;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  data: RealEstates | SearchRealEstates | undefined;
  setData: React.Dispatch<
    React.SetStateAction<RealEstates | SearchRealEstates | undefined>
  >;
}

export interface ModalType {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project_name: string;
  images: Image[];
}
