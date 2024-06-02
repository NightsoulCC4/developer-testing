/* ------------------------------------------------------------------------------------------------------------------ */
// Data layer.
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
