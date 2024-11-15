import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Review from "@/components/Review";
import CreateReview from "@/pages/ProductDetail/CreateReview";

import type { Review as ReviewType } from "./type";

export default function ProductReview({ productId }: { productId: number }): JSX.Element {
  const [isReviewOpen, setReviewOpen] = useState(true);
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  // 서버로부터 리뷰 목록을 가져오는 함수
  const fetchReviews = async () => {
    try {
      const response = await fetch(`/api/products/${productId}/reviews`);
      if (!response.ok) {
        throw new Error("리뷰를 가져오는 데 실패했습니다.");
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  // 컴포넌트가 마운트될 때 리뷰 목록을 가져옴
  useEffect(() => {
    fetchReviews();
  }, []);

  const toggleReview = () => setReviewOpen(!isReviewOpen);

  // 리뷰 작성 후 서버에 POST 요청을 보내고, 성공 시 리뷰 목록을 갱신
  const handleReviewSubmit = async (rating: number, reviewText: string) => {
    const newReview = {
      rate: rating,
      content: reviewText,
      date: new Date(),
    };

    try {
      const response = await fetch(`/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error("리뷰 작성에 실패했습니다.");
      }

      // 리뷰 작성 후 목록 갱신
      fetchReviews();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReviewContainer>
      <CreateReview onSubmit={handleReviewSubmit} />

      <ToggleSection onClick={toggleReview}>
        <h3>리뷰</h3>
        {isReviewOpen ? <FaChevronUp /> : <FaChevronDown />}
      </ToggleSection>

      {isReviewOpen && (
        <ReviewList>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Review
                key={review.id}
                info={{
                  name: review.user.userName,
                  img: review.user.userImageUrl,
                }}
                rate={review.rate}
                content={review.content}
                date={review.date}
                infoIsProduct={false}
              />
            ))
          ) : (
            <p>리뷰가 없습니다.</p>
          )}
        </ReviewList>
      )}
    </ReviewContainer>
  );
}

const ReviewContainer = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  max-width: 900px;
`;

const ToggleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const ReviewList = styled.div`
  margin-top: 20px;
`;
