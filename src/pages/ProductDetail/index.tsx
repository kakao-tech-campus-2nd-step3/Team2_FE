import { JSX } from "react";

import Product from "./Product";
import ProductInfo from "./ProductInfo";
import ProductReview from "./ProductReview";
import type { ProductDetail } from "./type";

const data: ProductDetail = {
  id: 1,
  name: "상품명",
  price: "5000",
  imgurl: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
  totalrate: "3.6",
  moreinfo: "추가 설명",
  producturl:
    "https://www.getyourguide.com/ko-kr/roma-l33/roma-kolroseum-igseupeureseu-tueo-mic-poreom-ibjang-t457508/?ranking_uuid=db08e83a-62a1-4717-9945-6a2da1739289",
  imageurl2: "https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg",
  freformcate: ["글로텐 프리"],
  allregycate: ["땅콩", "카테고리2"],
};

/**
 * @returns {JSX.Element} - 상세 페이지를 렌더링하는 JSX 요소
 */
export default function ProductDetail(): JSX.Element {
  return (
    <>
      <ProductInfo product={data} />
      <Product detail={data} />
      <ProductReview productId={data.id} />
    </>
  );
}
