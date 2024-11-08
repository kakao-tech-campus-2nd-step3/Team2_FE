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
  id: number;
  user: {
    name: string;
    avatarUrl: string;
  };
  rate: number;
  content: string;
  date: string;
  productid: number;
};
