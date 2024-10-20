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

  const pageBtns = [
    ...Array(maxPageNum === pageNum ? totalResults % resultsPerPage : resultsPerPage).keys(),
  ].map((i) => resultsPerPage * (pageNum - 1) + i + 1);

  const changePage = (page: number) => {
    setPageNum(page);
    changeState(String(resultsPerPage * (page - 1) + 1));
  };

  return (
    <>
      <button onClick={() => changePage(pageNum - 1)} disabled={pageNum === 1}>
        <span className="material-symbols-outlined">arrow_left_alt</span>
        <span>이전</span>
      </button>
      <div>
        {pageBtns.map((i) => (
          <button
            key={i}
            onClick={() => changeState(String(i))}
            disabled={activeState === String(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <button onClick={() => changePage(pageNum + 1)} disabled={pageNum === maxPageNum}>
        <span>다음</span>
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </button>
    </>
  );
}
