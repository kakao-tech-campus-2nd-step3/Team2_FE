import styled from "@emotion/styled";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import type { Review } from "./type";

export default function ProductReview({
  productId,
  reviews,
}: {
  productId: number;
  reviews: Review[];
}): JSX.Element {
  const [isReviewOpen, setReviewOpen] = useState(true);

  const toggleReview = () => setReviewOpen(!isReviewOpen);

  const filteredReviews = reviews.filter((review) => review.productid === productId);

  return (
    <ReviewContainer>
      <ToggleSection onClick={toggleReview}>
        <h3>리뷰</h3>
        {isReviewOpen ? <FaChevronUp /> : <FaChevronDown />}
      </ToggleSection>

      {/* 리뷰 섹션 */}
      {isReviewOpen && (
        <ReviewList>
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review, index) => (
              <ReviewItem key={index}>
                <p>{`평점: ${review.rate}`}</p>
                <p>{review.content}</p>
              </ReviewItem>
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

const ReviewItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  p {
    margin: 0;
  }
`;
