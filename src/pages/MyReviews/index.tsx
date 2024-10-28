import styled from "@emotion/styled";

import Background from "@/components/Background";

export default function MyReviews() {
  return (
    <Background>
      <H1>나의 리뷰</H1>
      <Container>
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
  display: "flex",
  flexDirection: "column",
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
