import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import Background from "@/components/Background";
import { fetchInstance } from "@/utils/axiosInstance";

type Reviews = {
  reviews: {
    id: number;
    rate: number;
    content: string;
    productId: number;
    productImgUrl: string;
  }[];
};

export default function MyReviews() {
  const { data, isPending, isError } = useQuery<Reviews>({
    queryKey: ["myReviews"],
    queryFn: async () => {
      const response = await fetchInstance().get("/api/reviews/my");
      console.log(response.data);
      return response.data;
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(data); // TODO 리뷰 컴포넌트로 랜더링
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
