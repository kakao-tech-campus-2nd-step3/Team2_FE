export type ProductDetail = {
  id: number;
  name: string;
  price: string;
  imgurl: string;
  totalrate: string;
  moreinfo: string;
  producturl: string;
  imageurl2: string;
  freformcate: string[];
  allregycate: string[];
};

export type Review = {
  rate: number;
  content: string;
  productid: number;
};
