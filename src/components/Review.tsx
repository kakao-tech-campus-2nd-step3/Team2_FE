import styled from "@emotion/styled";
import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RouterPath } from "@/utils/path";

type ReviewProps = {
  info: {
    name: string;
    img: string;
  };
  rate: number;
  content: string;
  date: Date;
  infoIsProduct: boolean;
  productId?: number;
};

export default function Review({
  info,
  rate,
  content,
  date,
  infoIsProduct,
  productId,
}: ReviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleToggleContent = () => setIsExpanded(!isExpanded);

  const displayContent =
    isExpanded || content.length <= 50 ? content : `${content.slice(0, 50)}...`;

  return (
    <ReviewContainer>
      <Header>
        <StarRating>
          <Stars rate={rate} />
        </StarRating>
        <Info
          onClick={
            infoIsProduct
              ? () => navigate(RouterPath.productDetail.getPath(String(productId)))
              : undefined
          }
        >
          <InfoImg src={info.img} alt={`${info.name}'s avatar`} infoIsProduct={infoIsProduct} />
          <InfoRight infoIsProduct={infoIsProduct}>
            <InfoName>{info.name}</InfoName>
            <ReviewDate>{format(date, "yyyy-MM-dd HH:mm")}</ReviewDate>
          </InfoRight>
        </Info>
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
  border: 1px solid var(--color-gray2);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  margin-bottom: 15px;
`;

const StarRating = styled.div`
  display: flex;
  color: var(--color-main);
  font-size: 18px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Star = styled.span`
  color: var(--color-main);
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
  color: var(--color-main);
  font-size: 18px;
`;

const StarEmpty = styled.span`
  color: var(--color-gray2);
  font-size: 18px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const InfoImg = styled.img<{ infoIsProduct: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${(props) =>
    props.infoIsProduct
      ? `
    border-radius: 0.3rem;
    width: 60px;
    height: 60px;
  `
      : ""}
  margin-right: 8px;
`;

const InfoRight = styled.div<{ infoIsProduct: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.infoIsProduct ? "10px" : "4px")};
`;
const InfoName = styled.span`
  font-weight: bold;
  font-size: var(--font-size-small);
`;
const ReviewDate = styled.span`
  color: var(--color-gray);
  font-size: var(--font-size-small);
`;

const Content = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--color-main);
  cursor: pointer;
  font-size: 14px;
  margin-left: 5px;
  padding: 0;
  text-decoration: underline;
`;
