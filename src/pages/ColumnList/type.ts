export type ColumnList = {
  id: number;
  title: string;
  subtitle: string;
  imgurl: string;
};
export type ColumnListResponse = {
  content: ColumnList[];
  totalElements: number;
};
