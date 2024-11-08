import styled from "@emotion/styled";

import type { WishProductDTO } from "./type";

function ProductCard({ name, price, imgUrl, tag }: WishProductDTO) {
  return (
    <CardContainer>
      <ProductImage src={imgUrl} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPriceTagContainer>
        <ProductPrice>{price}원</ProductPrice>
        {tag && <ProductTag>{tag}</ProductTag>}
      </ProductPriceTagContainer>
    </CardContainer>
  );
}

export default ProductCard;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 8px 0;
`;

const ProductPriceTagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const ProductTag = styled.span`
  background-color: var(--color-main);
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 4px;
  color: white;
`;
