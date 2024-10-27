import styled from "@emotion/styled";

import { useQueryParam } from "@/utils/hooks/useQueryParam";

// eslint-disable-next-line react-refresh/only-export-components
export const queryKey = "sortby";

/**
 * @var name: 버튼 이름(사용자에게 표시될 값)
 * @var value: 버튼 값(상태관리에 사용될 값)
 */
interface SortingBtn {
  name: string;
  value: string;
}
/**
 *
 * 컬럼, 상품 리스트에 담길 정렬 버튼
 *
 * @params sortingBbtns
 * @returns 정렬 버튼 컴포넌트
 */
export default function SortingBtns({ sortingBtns }: { sortingBtns: SortingBtn[] }) {
  const { activeState, changeState } = useQueryParam(
    queryKey,
    sortingBtns.map((btn) => btn.value),
  );
  return (
    <Container>
      {sortingBtns.map((btn, index) => (
        <Btn
          key={index}
          onClick={() => changeState(btn.value)}
          isActive={activeState === btn.value}
        >
          {btn.name}
        </Btn>
      ))}
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  gap: "0.5rem",
});
const Btn = styled.button<{ isActive: boolean }>((props) => ({
  padding: "0.4rem 0.6rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  border: "none",
  ...(props.isActive
    ? {
        backgroundColor: "var(--color-main)",
        color: "#fff",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ":before": { content: '"✓"', marginRight: "0.3rem" },
      }
    : { backgroundColor: "#eee", color: "#999" }),
}));
