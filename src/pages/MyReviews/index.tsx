import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import Background from "@/components/Background";
import Review from "@/components/Review";
import { fetchInstance } from "@/utils/axiosInstance";

type Reviews = {
  id: number;
  rate: number;
  content: string;
  productId: number;
  productName: string;
  productImgUrl: string;
  date: Date;
}[];

export default function MyReviews() {
  const { data, isPending, isError } = useQuery<Reviews>({
    queryKey: ["myReviews"],
    queryFn: async () => {
      const response = await fetchInstance().get("/api/reviews/my");
      return response.data;
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Background>
      <H1>나의 리뷰</H1>
      <Container>
        {data.map((review) => (
          <Review
            key={review.id}
            {...review}
            info={{ name: review.productName, img: review.productImgUrl }}
            infoIsProduct={true}
            productId={review.productId}
          />
        ))}
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
