import styled from "@emotion/styled";

import Pagination from "@/components/Pagination";
import SortingBtns from "@/components/SortingBtns";

export default function ProductList() {
  return (
    <>
      <SortingBtnsSection>
        <SortingBtns
          sortingBtns={[
            {
              name: "신상품",
              value: "recent",
            },
            {
              name: "가격 순",
              value: "price",
            },
            {
              name: "추천 순",
              value: "recommendations",
            },
            {
              name: "구매량",
              value: "Purchases",
            },
          ]}
        />
      </SortingBtnsSection>

      <ProductListSection></ProductListSection>

      <Pagination
        // totalResults={data.pageInfo.totalResults}
        // resultsPerPage={data.pageInfo.resultsPerPage}
        totalResults={3}
        resultsPerPage={10}
      />
    </>
  );
}

const SortingBtnsSection = styled.section({
  display: "flex",
  justifyContent: "right",
  width: "65%",
  margin: "0 auto",
  padding: "1rem 0",
  "@media (max-width: 768px)": {
    width: "90%",
  },
});

const ProductListSection = styled.section({
  width: "65%",
  margin: "0 auto",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  "@media (max-width: 768px)": {
    width: "90%",
    gridTemplateColumns: "1fr",
  },
});
