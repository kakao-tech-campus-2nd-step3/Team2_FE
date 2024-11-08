import { JSX } from "react";

import Product from "./Product";
import ProductInfo from "./ProductInfo";
import ProductReview from "./ProductReview";
import type { ProductDetail, Review } from "./type";

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

const exampleReviews: Review[] = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar1.jpg",
    },
    rate: 4.7,
    content:
      "로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.",
    date: "2023-09-01",
    productid: 1,
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatarUrl: "https://example.com/avatar2.jpg",
    },
    rate: 2.5,
    content: "기대보다는 좀 아쉬웠어요. 사람이 너무 많아서 제대로 보기가 힘들었네요.",
    date: "2023-09-10",
    productid: 1,
  },
  {
    id: 3,
    user: {
      name: "Alice Brown",
      avatarUrl: "https://example.com/avatar3.jpg",
    },
    rate: 5.0,
    content: "완벽한 경험이었습니다! 다시 오고 싶어요.",
    date: "2023-09-15",
    productid: 1,
  },
  {
    id: 4,
    user: {
      name: "Bob White",
      avatarUrl: "https://example.com/avatar4.jpg",
    },
    rate: 4.3,
    content: "멋진 투어였어요! 추천합니다.",
    date: "2023-09-20",
    productid: 1,
  },
];

/**
 * @returns {JSX.Element} - 상품 상세 페이지를 렌더링하는 JSX 요소
 */
export default function ProductDetail(): JSX.Element {
  return (
    <>
      <ProductInfo product={data} />
      <Product detail={data} />
      <ProductReview productId={data.id} reviews={exampleReviews} />
    </>
  );
}
