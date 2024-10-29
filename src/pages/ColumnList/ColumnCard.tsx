import styled from "@emotion/styled";

type Props = {
  title: string;
  subtitle: string;
  imgurl: string;
};

export default function ColumnCard({ title, subtitle, imgurl }: Props) {
  return (
    <Container>
      <Img src={imgurl} alt={title} />
      <Titles>
        <H2>{title}</H2>
        <P>{subtitle}</P>
      </Titles>
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});
const Img = styled.img({
  width: "100%",
  aspectRatio: "16 / 9",
  objectFit: "cover",
  borderRadius: "1rem",
});

const Titles = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  gap: "0.2rem",
});
const H2 = styled.h2({
  fontSize: "var(--font-size-large)",
  fontWeight: "bold",
  lineHeight: "1.2",
});
const P = styled.p({
  fontSize: "var(--font-size-small)",
  color: "var(--color-gray)",
});
