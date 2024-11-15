import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { RouterPath } from "@/utils/path";

type Props = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  tag?: string;
  ProductUrl: string;
  mallName: string;
};

function ProductCard({ id, name, price, imgUrl, tag, ProductUrl, mallName }: Props) {
  return (
    <CardContainer to={RouterPath.productDetail.getPath(id)}>
      {tag && tag !== "NULL" && <ProductTag>{tag}</ProductTag>}
      <ProductImage src={imgUrl} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductUrlA href={ProductUrl} onClick={(ent) => ent.stopPropagation()}>
        {mallName} &gt;
      </ProductUrlA>
      <ProductPrice>{price}원</ProductPrice>
    </CardContainer>
  );
}

export default ProductCard;

const CardContainer = styled(Link)`
  position: relative;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductName = styled.h3`
  font-size: var(--font-size-base);
  margin-top: 8px;
`;

const ProductPrice = styled.p`
  font-size: var(--font-size-base);
  font-weight: bold;
  margin-top: 8px;
`;

const ProductTag = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--color-main);
  padding: 5px 12px;
  font-size: 14px;
  border-radius: 20px;
  color: white;
  opacity: 0.8;
`;
const ProductUrlA = styled.a`
  font-size: var(--font-size-small);
  color: var(--color-main);
`;
