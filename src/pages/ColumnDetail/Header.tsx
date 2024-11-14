import styled from "@emotion/styled";
import { format } from "date-fns";
import { JSX } from "react";

/**
 * Props 타입 정의
 * @typedef {object} Props
 * @property {string} title - 제목
 * @property {string} imgurl - 이미지 URL
 * @property {string} createdAt - 생성 날짜
 * @property {string} auth - 작성자
 * @property {string[]} keyword - 키워드 배열
 */
type Props = {
  title: string;
  imgurl: string;
  createdAt: string;
  auth: string;
  keyword: string[];
};

/**
 * Header 컴포넌트
 * @param {Props} props - Header 컴포넌트가 받을 props
 * @returns {JSX.Element} - 헤더를 렌더링하는 JSX 요소
 */
export default function Header({ title, imgurl, createdAt, auth, keyword }: Props): JSX.Element {
  return (
    <>
      <HeaderContainer imgurl={imgurl}>
        <Title>{title}</Title>
        <ColumnInfo>
          {format(createdAt, "yyyy-MM-dd")} {auth}
        </ColumnInfo>
      </HeaderContainer>
      <Keywords>
        {keyword.map((i) => (
          <Keyword key={i}>{i}</Keyword>
        ))}
      </Keywords>
    </>
  );
}

const HeaderContainer = styled.div<{ imgurl: string }>((props) => ({
  textAlign: "center",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imgurl})`,
  padding: "26px 15% 10px",
}));

const Keywords = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "6px",
  borderBottom: "1px solid var(--color-gray)",
  margin: "0 15%",
  padding: "6px 0",
});
const Keyword = styled.div({
  display: "inline-block",
  fontSize: "var(--font-size-small)",
  border: "1px solid var(--color-gray)",
  borderRadius: "10px",
  padding: "6px",
  whiteSpace: "nowrap",
});

const Title = styled.h1({
  fontSize: "var(--font-size-large)",
  fontWeight: "bold",
  color: "#fff",
});
const ColumnInfo = styled.div({
  fontSize: "var(--font-size-base)",
  color: "#fff",
  width: "100%",
  textAlign: "right",
});
