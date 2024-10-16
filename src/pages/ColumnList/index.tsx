import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

import ColumnCard from "./ColumnCard";
import SortingBtns, { queryKey } from "./SortingBtns";
import { ColumnListResponse } from "./type";

const data: ColumnListResponse = {
  columns: [
    {
      id: 1,
      title: "Column Title 1",
      subtitle: "Column Subtitle 1",
      imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
    },
    {
      id: 2,
      title: "Column Title 2",
      subtitle: "Column Subtitle 2",
      imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
    },
    {
      id: 3,
      title: "Column Title 3",
      subtitle: "Column Subtitle 3",
      imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
    },
    {
      id: 4,
      title: "Column Title 4",
      subtitle: "Column Subtitle 4",
      imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
    },
    {
      id: 5,
      title: "Column Title 5",
      subtitle: "Column Subtitle 5",
      imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
    },
    {
      id: 6,
      title: "Column Title 6",
      subtitle: "Column Subtitle 6",
      imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
    },
    {
      id: 7,
      title: "Column Title 7",
      subtitle: "Column Subtitle 7",
      imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598",
    },
  ],
  nextPageToken: "1",
  pageInfo: {
    totalResults: 7,
    resultsPerPage: 5,
  },
};

export default function ColumnList() {
  const [searchParams] = useSearchParams();
  return (
    <>
      <H1>읽을거리</H1>
      <SortingBtns btnNames={["최신 순", "인기 순"]} btnValues={["new", "popular"]} />
      <ColumnListSection>
        {searchParams.get(queryKey)}
        {data.columns.map((column) => (
          <ColumnCard key={column.id} {...column} />
        ))}
      </ColumnListSection>
    </>
  );
}

const H1 = styled.h1({
  textAlign: "center",
  fontSize: "1.5rem",
  margin: "1rem 0",
});
const ColumnListSection = styled.section({
  width: "50rem",
  margin: "0 auto",
  backgroundColor: "red",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
});
