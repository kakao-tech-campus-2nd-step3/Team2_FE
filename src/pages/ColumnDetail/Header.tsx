import styled from "@emotion/styled";

type Props = {
  title: string;
  imgurl: string;
  createdAt: string;
  auth: string;
  keyword: string[];
};
export default function Header({ title, imgurl, createdAt, auth, keyword }: Props) {
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
  padding: 26px 100px 10px;
`;
const Keywords = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--color-gray);
  margin: 0 100px;
`;
const Keyword = styled.div`
  display: inline-block;
  font-size: 14px;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  padding: 6px;
  margin: 6px 3px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
const ColumnInfo = styled.div`
  font-size: 16px;
  color: #fff;
  width: 100%;
  text-align: right;
`;
