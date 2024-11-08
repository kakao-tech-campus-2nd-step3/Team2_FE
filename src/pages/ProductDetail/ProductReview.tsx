import styled from "@emotion/styled";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Review from "@/components/Review";

import type { Review as ReviewType } from "./type";

export default function ProductReview({ reviews }: { reviews: ReviewType[] }): JSX.Element {
  const [isReviewOpen, setReviewOpen] = useState(true);

  const toggleReview = () => setReviewOpen(!isReviewOpen);

  const filteredReviews = reviews.filter((review) => review);

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
            filteredReviews.map((review) => (
              <Review
                key={review.id}
                user={{
                  name: review.user.userName,
                  avatarUrl: review.user.userImageUrl,
                }}
                rate={review.rate}
                content={review.content}
                date={review.date.toString()}
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
