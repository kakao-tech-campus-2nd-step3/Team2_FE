import styled from "@emotion/styled";
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
          {createdAt} {auth}
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

const HeaderContainer = styled.div<{ imgurl: string }>`
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.imgurl});
  padding: 26px 15% 10px;
`;
const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  border-bottom: 1px solid var(--color-gray);
  margin: 0 15%;
  padding: 6px 0;
`;
const Keyword = styled.div`
  display: inline-block;
  font-size: var(--font-size-small);
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  padding: 6px;
  white-space: nowrap;
`;

const Title = styled.h1`
  font-size: var(--font-size-large);
  font-weight: bold;
  color: #fff;
`;
const ColumnInfo = styled.div`
  font-size: var(--font-size-base);
  color: #fff;
  width: 100%;
  text-align: right;
`;
