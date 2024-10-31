import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

import Pagination, { queryKey as pageToken } from "@/components/Pagination";
import SortingBtns, { queryKey as sortBy } from "@/components/SortingBtns";

import ColumnCard from "./ColumnCard";
import { ColumnListResponse } from "./type";

const data: ColumnListResponse = {
  columns: [
    {
      id: 1,
      title: "이탈리아 프리프롬 식품, 이대로 괜찮은가?",
      subtitle:
        "Column Subtitle 1 Column Subtitle 1Column Subtitle 1Column Subtitle 1Column Subtitle 1Column Subtitle 1Column Subtitle 1Column Subtitle 1Column Subtitle 1Column Subtitle 1",
      imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
    },
    {
      id: 2,
      title: "이탈리아 프리프롬 식품, 이대로 괜찮은가?",
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
      imgurl:
        "https://octapi.lxzin.com/interior/vImgFileSeq/202210/11/8ede80a1-1d0c-4839-bcc3-97bd4f357ecd.jpg",
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
      <SortingBtnsSection>
        <SortingBtns
          sortingBtns={[
            {
              name: "최신 순",
              value: "recent",
            },
            {
              name: "인기 순",
              value: "popular",
            },
          ]}
        />
      </SortingBtnsSection>
      <ColumnListSection>
        <div>
          {/* TODO sort와 page 쿼리 적용하기 */}
          {searchParams.get(sortBy)} {searchParams.get(pageToken)}
        </div>
        {data.columns.map((column) => (
          <ColumnCard key={column.id} {...column} />
        ))}
      </ColumnListSection>
      <Pagination
        totalResults={data.pageInfo.totalResults}
        resultsPerPage={data.pageInfo.resultsPerPage}
      />
    </>
  );
}

const H1 = styled.h1({
  textAlign: "center",
  fontSize: "var(--font-size-large)",
  fontWeight: "bold",
  marginTop: "1rem",
});

const SortingBtnsSection = styled.section({
  display: "flex",
  justifyContent: "right",
  width: "65%",
  margin: "0 auto",
  padding: "1rem 0",
  "@media (max-width: 768px)": {
    width: "90%",
  },
});
const ColumnListSection = styled.section({
  width: "65%",
  margin: "0 auto",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  "@media (max-width: 768px)": {
    width: "90%",
    gridTemplateColumns: "1fr",
  },
});
