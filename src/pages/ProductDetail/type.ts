// export type ProductDetail = {
//   id: number;
//   name: string;
//   price: string;
//   imgurl: string;
//   totalrate: string;
//   moreinfo: string;
//   producturl: string;
//   imageurl2: string;
//   freformcate: string[];
//   allregycate: string[];
// };
export type ProductDetail = {
  id: number;
  name: string;
  price: string;
  imgurl: string;
  totalrate: string;
  producturl: string;
  mallName: string;
  imageurl2: string;
  freeformCate: string[];
  allregyCate: string[];
  ingredients: string;
  capacity: string;
  nutritionInfo: string;
  manufacturer: string;
};

export type Review = {
  id: number;
  user: {
    id: number;
    userName: string;
    userImageUrl: string;
  };
  rate: number;
  content: string;
  date: Date;
};
