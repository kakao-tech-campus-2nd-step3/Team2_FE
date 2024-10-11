import styled from "@emotion/styled";

import ColumnCard from "./ColumnCard";
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
  ],
  nextPageToken: "1",
  pageInfo: {
    totalResults: 3,
    resultsPerPage: 3,
  },
};

export default function ColumnList() {
  return (
    <>
      <H1>읽을거리</H1>
      {/* 필터링 버튼 */}
      <ColumnListSection>
        {data.columns.map((column) => (
          <ColumnCard key={column.id} {...column} />
        ))}
      </ColumnListSection>
      {/* 페이지네이션 */}
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
