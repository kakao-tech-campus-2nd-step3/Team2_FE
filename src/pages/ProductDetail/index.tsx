import { useQuery } from "@tanstack/react-query";
import { JSX } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "@/components/Loading";
import { fetchInstance } from "@/utils/axiosInstance";

import Product from "./Product";
import ProductInfo from "./ProductInfo";
import ProductReview from "./ProductReview";
import type { ProductDetail } from "./type";

/**
 * @returns {JSX.Element} - 상세 페이지를 렌더링하는 JSX 요소
 */
export default function ProductDetail(): JSX.Element {
  const { productId } = useParams<{ productId: string }>();

  const { data, isPending, isError } = useQuery<ProductDetail>({
    queryKey: ["product", productId],
    queryFn: async () => (await fetchInstance().get(`/api/products/${productId}`)).data,
  });

  if (isPending) return <Loading />;
  if (isError) return <div>Error</div>;
  return (
    <>
      <ProductInfo product={data} />
      <Product detail={data} />
      <ProductReview productId={data.id} />
    </>
  );
}
