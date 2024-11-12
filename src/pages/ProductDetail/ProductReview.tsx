// ProductReview.tsx
import styled from "@emotion/styled";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import CreateReview from "@/components/CreateReview";
import Review from "@/components/Review";

import type { Review as ReviewType } from "./type";

export default function ProductReview({ reviews }: { reviews: ReviewType[] }): JSX.Element {
  const [isReviewOpen, setReviewOpen] = useState(true);
  const [allReviews, setAllReviews] = useState<ReviewType[]>(reviews);

  const toggleReview = () => setReviewOpen(!isReviewOpen);

  const handleReviewSubmit = (rating: number, reviewText: string) => {
    const newReview: ReviewType = {
      id: allReviews.length + 1,
      product: {
        id: 0, // 임시 ID
        productName: "사용자", // 임시 사용자
        productImg: "https://example.com/avatar.jpg", // 임시 이미지 URL
      },
      rate: rating,
      content: reviewText,
      date: new Date(),
    };
    setAllReviews([newReview, ...allReviews]);
  };

  const filteredReviews = allReviews.filter((review) => review);

  return (
    <ReviewContainer>
      <CreateReview onSubmit={handleReviewSubmit} />

      <ToggleSection onClick={toggleReview}>
        <h3>리뷰</h3>
        {isReviewOpen ? <FaChevronUp /> : <FaChevronDown />}
      </ToggleSection>

      {isReviewOpen && (
        <ReviewList>
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <Review
                key={review.id}
                product={{
                  name: review.product.productName,
                  productImg: review.product.productImg,
                }}
                rate={review.rate}
                content={review.content}
                date={review.date}
                isProduct={true}
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
