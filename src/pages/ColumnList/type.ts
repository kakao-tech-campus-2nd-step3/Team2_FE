export type ColumnList = {
  id: number;
  title: string;
  subtitle: string;
  imgurl: string;
};
export type ColumnListResponse = {
  columns: ColumnList[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};
