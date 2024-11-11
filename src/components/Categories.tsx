import styled from "@emotion/styled";

export default function Categories({ categories }: { categories: string[] }) {
  return (
    <Container>
      {categories.map((category) => (
        <div>{category}</div>
      ))}
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  gap: "1rem",
  div: {
    border: "1px solid var(--color-gray)",
    borderRadius: "0.8rem",
    padding: "0.3rem 0.7rem",
    textAlign: "center",
    flexBasis: "8rem",
    whiteSpace: "nowrap",
  },
});
