import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Categories from "@/components/Categories";
import Spacing from "@/components/Spacing";
import { RouterPath } from "@/utils/path";

type Props = {
  allergies: string[];
  freefrom: string[];
};

export default function DashBoard({ allergies, freefrom }: Props) {
  return (
    <Container>
      <div>
        <H3>내가 선택한 알러지 항목</H3>
        <Categories categories={allergies} />
        <Spacing size={30} />
        <H3>내가 선택한 프리프롬 항목</H3>
        <Categories categories={freefrom} />
      </div>
      <div>
        <H3>기록</H3>
        <BtnWithIcon to={RouterPath.myReviews.getPath()}>
          <span className="material-symbols-outlined">edit_square</span>나의 리뷰
        </BtnWithIcon>
        <BtnWithIcon to={RouterPath.myFavorites.getPath()}>
          <span className="material-symbols-outlined">favorite</span>찜 목록
        </BtnWithIcon>
      </div>
    </Container>
  );
}

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "4.5fr 1fr",
  margin: "1rem",
  padding: "1rem",

  border: `var(--color-gray) 1px solid`,
  borderRadius: "0.5rem",
  background: "white",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
    "& > div:nth-of-type(1)::after": {
      content: '""',
      display: "block",
      width: "100%",
      height: "1px",
      marginTop: "1.5rem",
      backgroundColor: "var(--color-gray)",
    },
  },
});

const H3 = styled.h3({
  fontSize: "var(--font-size-large)",
  fontWeight: "bold",
  padding: "0.7rem 0 1rem",
});

const BtnWithIcon = styled(Link)({
  border: `var(--color-gray) 1px solid`,
  borderRadius: "0.5rem",
  padding: "0.2rem",
  marginBottom: "0.5rem",
  width: "100%",

  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  fontSize: "var(--font-size-base)",
  ".material-symbols-outlined": {
    fontVariationSettings: "'wght' 200",
  },
});
