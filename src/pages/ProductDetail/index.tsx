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
      id: 101,
      userName: "John Doe",
      userImageUrl: "https://example.com/avatar1.jpg",
    },
    rate: 4.7,
    content:
      "로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.로마 콜로세움은 정말 멋졌습니다! 투어도 만족스럽고 가이드도 친절했어요.",
    date: new Date("2023-09-01"),
  },
  {
    id: 2,
    user: {
      id: 102,
      userName: "Jane Smith",
      userImageUrl: "https://example.com/avatar2.jpg",
    },
    rate: 2.5,
    content: "기대보다는 좀 아쉬웠어요. 사람이 너무 많아서 제대로 보기가 힘들었네요.",
    date: new Date("2023-09-10"),
  },
  {
    id: 3,
    user: {
      id: 103,
      userName: "Alice Brown",
      userImageUrl: "https://example.com/avatar3.jpg",
    },
    rate: 5.0,
    content: "완벽한 경험이었습니다! 다시 오고 싶어요.",
    date: new Date("2023-09-15"),
  },
  {
    id: 4,
    user: {
      id: 104,
      userName: "Bob White",
      userImageUrl: "https://example.com/avatar4.jpg",
    },
    rate: 4.3,
    content: "멋진 투어였어요! 추천합니다.",
    date: new Date("2023-09-20"),
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
      <ProductReview reviews={exampleReviews} />
    </>
  );
}
