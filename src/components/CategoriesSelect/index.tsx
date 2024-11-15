import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { fetchInstance } from "@/utils/axiosInstance";

import { Loading } from "../Loading";

type Props = {
  isAllergy: boolean;
  initCategory?: (setSelectedCategory: (categories: string[]) => void) => void;
  onCategoryChange: (selectedCategory: string[]) => void;
};
type Categories = {
  id: number;
  type: string;
}[];

/**
 * @param isAllergy 알러지인지 프리프롬인지 구분
 * @param initCategory 카테고리 초기화 함수(setSelectedCategory)를 받아서 세팅알아서 수행하는 함수
 * @param onCategoryChange 카테고리 변경 시 수행할 함수(주로 백엔드에 저장/조회 요청)
 * @returns
 */
export default function CategoriesSelect({
  isAllergy,
  initCategory,
  onCategoryChange,
}: Props): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const { data, isPending, isError } = useQuery<Categories>({
    queryKey: [isAllergy ? "allergy" : "freefrom"],
    queryFn: async () =>
      (
        await fetchInstance().get(
          `/api/${isAllergy ? "allergyCategorie" : "freefromCategories"}/all`,
        )
      ).data,
  });

  useEffect(() => {
    if (initCategory) initCategory(setSelectedCategory);
  }, [initCategory]);

  const handleCategoryClick = (categoryType: string) => {
    if (selectedCategory.includes(categoryType)) {
      setSelectedCategory(selectedCategory.filter((category) => category !== categoryType));
    } else {
      setSelectedCategory([...selectedCategory, categoryType]);
    }
    onCategoryChange(selectedCategory);
  };

  if (isPending) return <Loading />;
  if (isError) return <div>Error</div>;

  return (
    <>
      {data?.map((category) => (
        <Btn
          key={category.id}
          isActive={selectedCategory.includes(category.type)}
          onClick={() => handleCategoryClick(category.type)}
        >
          {category.type}
        </Btn>
      ))}
    </>
  );
}
export const Btn = styled.button<{ isActive: boolean }>((props) => ({
  borderRadius: "0.8rem",
  cursor: "pointer",
  border: "none",
  margin: "0.3rem",
  padding: "0.3rem 0.7rem",
  textAlign: "center",
  flexBasis: "8rem",
  whiteSpace: "nowrap",
  ...(props.isActive
    ? {
        backgroundColor: "var(--color-main)",
        color: "#fff",
      }
    : { border: "solid 2px #eee", color: "#999" }),
}));
