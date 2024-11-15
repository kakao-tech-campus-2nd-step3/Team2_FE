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
  imgUrl: string;
  rating: number;
  ProductUrl: string;
  mallName: string;
  description: string;
  freeFrom: string[];
  allergy: string[];
  ingredients: string;
  capacity: string;
  nutritionalInfo: string;
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
