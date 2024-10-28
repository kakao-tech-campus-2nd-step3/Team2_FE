import styled from "@emotion/styled";

import Background from "@/components/Background";

export default function MyFavorites() {
  return (
    <Background>
      <H1>찜한 상품</H1>
      <Container>
        {/* 상품 리스트 가져다 쓸 예정 */}
        <TmpCard />
        <TmpCard />
        <TmpCard />
        <TmpCard />
        <TmpCard />
      </Container>
    </Background>
  );
}

const H1 = styled.h1({
  fontSize: "var(--font-size-large)",
  fontWeight: "bold",
  textAlign: "center",
  margin: "2rem",
});
const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "1rem",

  padding: "1.5rem",
  margin: "1rem",
  border: "1px solid #ddd",
  borderRadius: "1rem",
  backgroundColor: "white",
});
const TmpCard = styled.div({
  backgroundColor: "red",
  height: "300px",
});
