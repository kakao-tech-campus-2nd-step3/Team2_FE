import styled from "@emotion/styled";

import { useQueryParam } from "@/utils/hooks/useQueryParam";

type Props = {
  btnNames: string[];
  btnValues: string[];
};

// eslint-disable-next-line react-refresh/only-export-components
export const queryKey = "sortby";

/**
 * 컬럼, 상품 리스트에 담길 정렬 버튼
 * btnNames와 btnValues의 길이는 같아야 함
 *
 * @params btnNames 버튼 이름들(사용자에게 표시될 값 ex. 최신 순)
 * @params btnValues 버튼 값들(실제로 query parameter에 들어갈 값 ex. new)
 * @returns 정렬 버튼 컴포넌트
 */
export default function SortingBtns({ btnNames, btnValues }: Props) {
  const { activeState, changeState } = useQueryParam(queryKey, btnValues);
  return (
    <>
      {btnValues.map((value, index) => (
        <Btn key={value} onClick={() => changeState(value)} isActive={activeState === value}>
          {btnNames[index]}
        </Btn>
      ))}
    </>
  );
}

const Btn = styled.button<{ isActive: boolean }>((props) => ({
  padding: "0.4rem 0.6rem",
  borderRadius: "0.5rem",
  margin: "0 0.5rem",
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
