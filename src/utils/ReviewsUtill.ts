import { Review } from "@/pages/ProductDetail/type";

export function convertToDate(reviews: Review[]): Review[] {
  return reviews.map((review) => ({
    ...review,
    date: new Date(review.date as unknown as string),
  }));
}
