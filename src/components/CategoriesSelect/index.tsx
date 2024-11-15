import styled from "@emotion/styled";
// import { useQuery } from "@tanstack/react-query";

// import { fetchInstance } from "@/utils/axiosInstance";

// import { AllergyCategories } from "./type";

// type Props = {
//   isAllergy: boolean;
//   onCategoryChange: (category: string) => void;
// };

/**
 * 불러올 정보가 알러지인지 프리프롬인지 구분할 변수랑
 * 카테고리 중 어떤 것이 새로 셋 되면 수행할 작업 함수를 받아서 수행
 * @returns
 */
export default function CategoriesSelect(): JSX.Element {
  // const { data, isPending, isError } = useQuery<AllergyCategories>({
  //   queryKey: [ isAllergy ? "allergy" : "freefrom" ],
  //   queryFn: async () => (await fetchInstance().get("/api/allergyCategorie/all")).data,
  // });
  return (
    <Container>
      <Btn isActive={true}>전체</Btn>
      <Btn isActive={true}>전체</Btn>
      <Btn isActive={false}>전체</Btn>
      <Btn isActive={true}>전체</Btn>
    </Container>
  );
}
export const Container = styled.div({
  display: "flex",
  gap: "0.5rem",
});
export const Btn = styled.button<{ isActive: boolean }>((props) => ({
  borderRadius: "0.8rem",
  cursor: "pointer",
  border: "none",
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
