/* eslint-disable @typescript-eslint/naming-convention */
import styled from "@emotion/styled";
import { useState } from "react";

export default function CreateReview({
  onSubmit,
}: {
  onSubmit: (rating: number, reviewText: string) => void;
}) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (index: number) => {
    setIsDragging(true);
    setRating(index + 1);
  };

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const width = rect.width;
      const newRating = index + Math.min(Math.max(offsetX / width, 0), 1);
      setHoverRating(Math.round(newRating * 10) / 10);
    }
  };

  const handleMouseUp = () => {
    if (hoverRating !== null) {
      setRating(hoverRating);
    }
    setIsDragging(false);
    setHoverRating(null);
  };

  const handleSubmit = () => {
    onSubmit(rating, reviewText);
    setReviewText("");
    setRating(0);
  };

  const displayRating = hoverRating !== null ? hoverRating : rating;

  return (
    <ReviewForm>
      <h3>리뷰 작성</h3>
      <StarRatingContainer>
        <StarRating onMouseLeave={() => setHoverRating(null)}>
          {[...Array(5)].map((_, index) => (
            <StarWrapper
              key={index}
              onMouseDown={() => handleMouseDown(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseUp={handleMouseUp}
            >
              <Star selected={displayRating > index}>★</Star>
              <StarPartial width={`${((displayRating || rating) - index) * 100}%`} />
            </StarWrapper>
          ))}
        </StarRating>
        <RatingValue>{displayRating.toFixed(1)}점</RatingValue>
      </StarRatingContainer>
      <ReviewInput
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="리뷰를 입력하세요"
      />
      <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
    </ReviewForm>
  );
}

const ReviewForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StarRating = styled.div`
  display: flex;
  gap: 5px;
  position: relative;
  user-select: none;
`;

const StarWrapper = styled.div`
  position: relative;
  font-size: 24px;
  cursor: pointer;
  display: inline-block;
  width: 24px;
`;

const Star = styled.span<{ selected: boolean }>`
  font-size: 30px;
  color: ${(props) => (props.selected ? "#ffd700" : "#ddd")};
`;

const StarPartial = styled.div<{ width: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  width: ${(props) => props.width};
  color: #ffd700;
`;

const RatingValue = styled.span`
  font-size: 18px;
  color: #333;
  margin-top: 8px;
  margin-left: 16px;
`;

const ReviewInput = styled.textarea`
  height: 80px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #89a06b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
