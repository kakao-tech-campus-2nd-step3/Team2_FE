import styled from "@emotion/styled";

// import { useQuery } from "@tanstack/react-query";
import Background from "@/components/Background";
import Review from "@/components/Review";
// import { fetchInstance } from "@/utils/axiosInstance";

type Reviews = {
  reviews: {
    id: number;
    rate: number;
    content: string;
    productId: number;
    productName: string;
    productImgUrl: string;
    date: Date;
  }[];
};

export default function MyReviews() {
  // const { data, isPending, isError } = useQuery<Reviews>({
  //   queryKey: ["myReviews"],
  //   queryFn: async () => {
  //     const response = await fetchInstance().get("/api/reviews/my");
  //     return response.data;
  //   },
  // });

  // if (isPending) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;
  const data: Reviews = {
    reviews: [
      {
        id: 1,
        rate: 4.5,
        content: "너무 맛있어요. 다음에 또 시킬게요.",
        productId: 1,
        productName: "짜장면",
        productImgUrl:
          "https://cdn.pixabay.com/photo/2016/11/29/12/54/asian-food-1869623_960_720.jpg",
        date: new Date(),
      },
      {
        id: 2,
        rate: 3.5,
        content: "맛이 좀 아쉬웠어요. 다음에는 다른 메뉴를 시켜봐야겠어요.",
        productId: 2,
        productName: "짬뽕",
        productImgUrl:
          "https://cdn.pixabay.com/photo/2016/11/29/12/54/asian-food-1869623_960_720.jpg",
        date: new Date(),
      },
      {
        id: 3,
        rate: 5,
        content: "완전 대박입니다. 다음에 또 시킬게요.",
        productId: 3,
        productName: "탕수육",
        productImgUrl:
          "https://cdn.pixabay.com/photo/2016/11/29/12/54/asian-food-1869623_960_720.jpg",
        date: new Date(),
      },
    ],
  };

  return (
    <Background>
      <H1>나의 리뷰</H1>
      <Container>
        {data?.reviews.map((review) => (
          <Review
            key={review.id}
            {...review}
            user={{ name: review.productName, avatarUrl: review.productImgUrl }}
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
