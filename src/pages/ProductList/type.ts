export type WishProductDTO = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  tag?: string;
};

export type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type ProductListResponse = {
  products: WishProductDTO[];
  nextPageToken: string;
  pageInfo: PageInfo;
};
