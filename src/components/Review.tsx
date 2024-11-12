import styled from "@emotion/styled";
import { format } from "date-fns";
import { useState } from "react";

type ReviewProps = {
  product: {
    name: string;
    productImg: string;
  };
  rate: number;
  content: string;
  date: Date;
  isProduct: boolean;

};

export default function Review({ product, rate, content, date }: ReviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleContent = () => setIsExpanded(!isExpanded);

  const displayContent =
    isExpanded || content.length <= 50 ? content : `${content.slice(0, 50)}...`;

  return (
    <ReviewContainer>
      <Header>
        <StarRating>
          <Stars rate={rate} />
        </StarRating>
        <ProductInfo>
          <ProductImg src={product.productImg} alt={`${product.name}'s avatar`} />
          <ProductName>{product.name}</ProductName>
          <ReviewDate>{format(date, "yyyy-MM-dd HH:mm")}</ReviewDate>
        </ProductInfo>
      </Header>
      <Content>
        {displayContent}
        {content.length > 50 && (
          <ToggleButton onClick={handleToggleContent}>
            {isExpanded ? "간략히" : "더보기"}
          </ToggleButton>
        )}
      </Content>
    </ReviewContainer>
  );
}

// 별점 컴포넌트
const Stars = ({ rate }: { rate: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rate)) {
      stars.push(<Star key={i}>★</Star>);
    } else if (i === Math.floor(rate) + 1 && rate % 1 !== 0) {
      const width = `${(rate % 1) * 100}%`;
      stars.push(
        <StarPartial key={i}>
          <StarFull width={width}>★</StarFull>
          <StarEmpty>☆</StarEmpty>
        </StarPartial>,
      );
    } else {
      stars.push(<StarEmpty key={i}>☆</StarEmpty>);
    }
  }
  return <>{stars}</>;
};

const ReviewContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StarRating = styled.div`
  display: flex;
  color: #9bc678;
  font-size: 18px;
  margin-right: 10px;
`;

const Star = styled.span`
  color: #9bc678;
  font-size: 18px;
`;

const StarPartial = styled.span`
  position: relative;
  display: inline-block;
  font-size: 18px;
  width: 1em;
  height: 1em;
`;

const StarFull = styled.span<{ width: string }>`
  position: absolute;
  overflow: hidden;
  width: ${({ width }) => width};
  color: #9bc678;
  font-size: 18px;
`;

const StarEmpty = styled.span`
  color: #ddd;
  font-size: 18px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

const ProductName = styled.span`
  font-weight: bold;
  margin-right: 6px;
`;

const ReviewDate = styled.span`
  color: #888;
  font-size: 12px;
`;

const Content = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #9bc678;
  cursor: pointer;
  font-size: 14px;
  margin-left: 5px;
  padding: 0;
  text-decoration: underline;
`;
