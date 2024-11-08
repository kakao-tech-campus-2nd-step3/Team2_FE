import { Review } from "@/pages/ProductDetail/type";

export function convertToDate(reviews: Review[]): Review[] {
  return reviews.map((review) => ({
    ...review,
    date: new Date(review.date as unknown as string),
  }));
}
export const getDateString = (date: Date): string => {
  const arrDayStr = ["일", "월", "화", "수", "목", "금", "토"];

  const year = date.getFullYear().toString().slice(2, 4);
  return (
    year +
    "/" +
    formatTwoWord(date.getMonth()) +
    "/" +
    formatTwoWord(date.getDate()) +
    "(" +
    arrDayStr[date.getDay()] +
    ") " +
    formatTwoWord(date.getHours()) +
    ":" +
    formatTwoWord(date.getMinutes())
  );
};
const formatTwoWord = (n: number): string => {
  return n < 10 ? "0" + n : "" + n;
};
