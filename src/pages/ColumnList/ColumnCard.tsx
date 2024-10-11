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
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
const Img = styled.img({
  width: "100%",
  objectFit: "cover",
});
