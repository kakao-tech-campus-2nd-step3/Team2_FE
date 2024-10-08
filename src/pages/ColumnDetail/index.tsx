import { JSX } from "react";

import Content from "./Content";
import Header from "./Header";
import type { ColumnDetail } from "./type";

const data: ColumnDetail = {
  id: "1",
  title: "칼럼의 제목이 여기에 들어갑니다",
  imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
  createdAt: "2020-01-01",
  auth: "작성자",
  keyword: ["키워드1", "키워드2", "키워드3"],
  content: [
    {
      tag: "h2",
      content: "제목입니다.",
    },
    {
      tag: "h3",
      content: "제목입니다.",
    },
    {
      tag: "p",
      content:
        "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
    },
    {
      tag: "h2",
      content: "제목입니다.",
    },
    {
      tag: "img",
      content: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
    },
  ],
};

/**
 * @returns {JSX.Element} - 칼럼 상세 페이지를 렌더링하는 JSX 요소
 */
export default function ColumnDetail(): JSX.Element {
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
    </>
  );
}
