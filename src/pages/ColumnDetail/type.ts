export type Content = {
  tag: 'h2' | 'h3' | 'p' | 'img';
  content: string;
};

export type ColumnDetail = {
  id: string;
  title: string;
  imgurl: string;
  createdAt: string;
  auth: string;
  keyword: string[];
  content: Content[];
};
