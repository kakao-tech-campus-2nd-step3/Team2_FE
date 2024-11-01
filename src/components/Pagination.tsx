import styled from "@emotion/styled";
import { useState } from "react";

import { useQueryParam } from "@/utils/hooks/useQueryParam";

// eslint-disable-next-line react-refresh/only-export-components
export const queryKey = "pageToken";

type Props = {
  totalResults: number;
  resultsPerPage: number;
};

/**
 * 컬럼, 상품 리스트에 담길 페이지네이션
 *
 * @params totalResults 전체 데이터 수
 * @params resultsPerPage 페이지당 결과 수
 * @returns
 */
export default function Pagination({ totalResults, resultsPerPage }: Props) {
  const maxPageNum = Math.ceil(totalResults / resultsPerPage);

  const { activeState, changeState } = useQueryParam(
    queryKey,
    [...Array(maxPageNum).keys()].map((i) => String(i + 1)),
  );
  const [pageNum, setPageNum] = useState(1);

  console.log(5 - (5 % 10));
  const pageBtns = [
    ...Array(maxPageNum - (maxPageNum % 5) < pageNum ? maxPageNum % 5 : 5).keys(),
  ].map((i) => resultsPerPage * (pageNum - 1) + i + 1);

  const changePage = (page: number) => {
    setPageNum(page);
    changeState(String(resultsPerPage * (page - 1) + 1));
  };

  return (
    <Container>
      <PageBtn
        aria-label="이전 페이지"
        onClick={() => changePage(pageNum - 1)}
        disabled={pageNum === 1}
      >
        <span className="material-symbols-outlined">arrow_left_alt</span>
        <span>이전</span>
      </PageBtn>
      <div>
        {pageBtns.map((i) => (
          <PageNumBtn
            key={i}
            onClick={() => changeState(String(i))}
            disabled={activeState === String(i)}
          >
            {i}
          </PageNumBtn>
        ))}
      </div>
      <PageBtn
        aria-label="다음 페이지"
        onClick={() => changePage(pageNum + 1)}
        disabled={pageNum === maxPageNum}
      >
        <span>다음</span>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </PageBtn>
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
});

const PageNumBtn = styled.button({
  width: "2rem",
  height: "2rem",
  borderRadius: "0.5rem",
  "&:disabled": {
    color: "white",
    backgroundColor: "var(--color-main)",
  },
});
const PageBtn = styled.button({
  "&:disabled": {
    color: "var(--color-gray)",
  },

  display: "flex",
  alignItems: "center",
  fontVariationSettings: "'wght' 200",
});
