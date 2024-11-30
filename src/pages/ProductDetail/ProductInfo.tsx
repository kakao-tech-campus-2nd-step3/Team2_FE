import styled from "@emotion/styled";
import { JSX, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { ProductDetail } from "./type";

/**
 * ProductInfo 컴포넌트
 * @param {object} props - 컴포넌트가 받을 props
 * @param {ProductDetail} props.product - 상품 상세 정보 객체
 * @returns {JSX.Element} - 상품 정보를 렌더링하는 JSX 요소
 */
export default function ProductInfo({ product }: { product: ProductDetail }): JSX.Element {
  const [isFavorite, setFavorite] = useState(false);

  // 찜 기능 토글
  const toggleFavorite = () => setFavorite(!isFavorite);

  // 별점 계산
  const renderStars = (totalrate: number) => {
    const rate = totalrate;
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
    return stars;
  };

  return (
    <ProductContainer>
      {/* 이미지 섹션 */}
      <ImageContainer>
        <Image src={product.imgUrl} alt={product.name} />
        <LikeButton onClick={toggleFavorite}>
          {isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
        </LikeButton>
      </ImageContainer>

      {/* 상품 정보 섹션 */}
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        <TagList>
          {product.freeFrom.map((category) => (
            <Tag key={category}>{category}</Tag>
          ))}
        </TagList>
        <TagList>
          {product.allergy.map((category) => (
            <Tag key={category}>{category}</Tag>
          ))}
        </TagList>
        <Price>{product.price}원</Price>
        <BuyButton onClick={() => window.open(product.ProductUrl, "_blank")}>
          {product.mallName} &gt;
        </BuyButton>
        <RatingSection>
          <p>별점</p>
          <Stars>{renderStars(product.rating)}</Stars>
        </RatingSection>
      </InfoContainer>
    </ProductContainer>
  );
}

// 스타일링
const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px auto;
  max-width: 900px;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  background-color: #eaeaea;
  object-fit: cover;
`;

const LikeButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  flex: 1;
  max-width: 350px;
`;

const ProductName = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const TagList = styled.div`
  display: flex;
  gap: 10px;
`;
const Tag = styled.div`
  background-color: #dff5e2;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 10px;
`;

const Price = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BuyButton = styled.button`
  padding: 10px 20px;
  background-color: var(--color-main);
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100%;
`;

const RatingSection = styled.div`
  margin-top: 10px;
`;

const Stars = styled.div`
  display: flex;
  gap: 5px;
`;

const Star = styled.span`
  font-size: 24px;
  color: #ffd700;
`;

const StarEmpty = styled.span`
  z-index: 0;
  font-size: 24px;
  color: var(--color-gray);
`;

const StarPartial = styled.div`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  overflow: hidden;
  & > * {
    position: absolute;
  }
`;

const StarFull = styled.span<{ width?: string }>`
  z-index: 1;
  font-size: 24px;
  color: #ffd700;
  display: inline-block;
  width: ${(props) => (props.width ? props.width : "100%")};
  overflow: hidden;
`;
