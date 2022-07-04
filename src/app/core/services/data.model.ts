export interface Data {
  categories: Categories[];
  plants: Plants[];
}

export interface Categories {
  _id: string;
  label: string;
  picture: string;
}

export interface Plants {
  _id: string;
  label: string;
  about: string;
  how_to_care: string;
  price: number;
  pictures: string[];
  reviews: any[];
  category_id: string;
}
