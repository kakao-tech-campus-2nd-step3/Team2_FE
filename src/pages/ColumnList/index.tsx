import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";

import { Loading } from "@/components/Loading.tsx";
import Pagination, { queryKey as pageToken } from "@/components/Pagination";
import SortingBtns, { queryKey as sortBy } from "@/components/SortingBtns";
import { fetchInstance } from "@/utils/axiosInstance";

import ColumnCard from "./ColumnCard";
import { ColumnListResponse } from "./type";

const columnsKey = (pageToken: string, sortBy: string) => ["columns", pageToken, sortBy];

export default function ColumnList() {
  const [searchParams] = useSearchParams();

  const { data, isError, isPending } = useQuery<ColumnListResponse>({
    queryKey: columnsKey(searchParams.get(pageToken)!, searchParams.get(sortBy)!),
    queryFn: async () => {
      const response = await fetchInstance().get(
        `/api/columns?sortby=${searchParams.get(sortBy)}&page=${Number(searchParams.get(pageToken)) - 1}`,
      );
      return response.data;
    },
  });

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <H1>읽을거리</H1>
      <SortingBtnsSection>
        <SortingBtns
          sortingBtns={[
            {
              name: "최신 순",
              value: "new",
            },
            {
              name: "인기 순",
              value: "popular",
            },
          ]}
        />
      </SortingBtnsSection>
      <ColumnListSection>
        {data.content.map((column) => (
          <Link to={`/columns/${column.id}`} key={column.id}>
            <ColumnCard {...column} />
          </Link>
        ))}
      </ColumnListSection>
      <Pagination totalResults={data.totalElements} resultsPerPage={10} />
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
