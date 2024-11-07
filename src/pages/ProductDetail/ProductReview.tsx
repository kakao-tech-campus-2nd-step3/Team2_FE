import type { Review as ReviewType } from "../../components/Review";
import Review from "../../components/Review";

export default function ProductReview({
  productId,
  reviews,
}: {
  productId: number;
  reviews: ReviewType[];
}): JSX.Element {
  return (
    <div>
      <Review productId={productId} reviews={reviews} />
    </div>
  );
}
