import { useQuery } from "@tanstack/react-query";
import { JSX } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "@/components/Loading.tsx";
import { fetchInstance } from "@/utils/axiosInstance";

import Bottom from "./Bottom";
import Content from "./Content";
import Header from "./Header";
import { type ColumnDetail } from "./type";

/**
 * @returns {JSX.Element} - 칼럼 상세 페이지를 렌더링하는 JSX 요소
 */
export default function ColumnDetail(): JSX.Element {
  const { columnId } = useParams<{ columnId: string }>();
  const { data, isPending, isError } = useQuery<ColumnDetail>({
    queryKey: ["column", columnId],
    queryFn: async () => {
      const response = await fetchInstance().get(`/api/columns/${columnId}`);
      return response.data;
    },
  });

  if (isPending) return <Loading />;
  if (isError) return <div>Error!</div>;

  return (
    <>
      <Header
        title={data.title}
        imgurl={data.imgurl}
        createdAt={data.createdAt}
        auth={data.auth}
        keyword={data.keyword}
      />
      <Content content={data.content} />
      <Bottom />
    </>
  );
}
