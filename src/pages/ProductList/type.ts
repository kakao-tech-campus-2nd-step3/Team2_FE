export type Product = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  ProductUrl: string;
  mallName: string;
  tag: string;
};

export type ProductListResponse = {
  content: Product[];
  totalElements: number;
};
