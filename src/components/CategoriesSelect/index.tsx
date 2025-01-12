import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { fetchInstance } from "@/utils/axiosInstance";
import { useQueryParam } from "@/utils/hooks/useQueryParam";

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
  const { data, isPending, isError } = useQuery<Categories>({
    queryKey: [isAllergy ? "allergy" : "freefrom"],
    queryFn: async () =>
      (
        await fetchInstance().get(
          `/api/${isAllergy ? "allergyCategorie" : "freefromCategories"}/all`,
        )
      ).data,
  });
  const { activeState: selectedCategory, changeState } = useQueryParam<string[]>(
    isAllergy ? "allergy" : "freefrom",
    [],
    (state) => state.join(","),
    (params) => params.split(","),
  );

  useEffect(() => {
    if (initCategory) initCategory((categories) => changeState(categories));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const handleCategoryClick = (categoryType: string) => {
    const foundIndex = selectedCategory.indexOf(categoryType);
    if (foundIndex >= 0) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      changeState(selectedCategory.filter((_, index) => index !== foundIndex));
    } else {
      changeState([...selectedCategory, categoryType]);
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
