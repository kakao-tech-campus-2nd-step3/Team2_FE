import styled from "@emotion/styled";
import { useState } from "react";

import Pagination from "@/components/Pagination";
import SortingBtns from "@/components/SortingBtns";

import AllergyFiltering from "./AllergyFiltering";
import exampleData from "./exampleData.json";
import FreeformFiltering from "./FreeformFiltering";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const data = exampleData;

  const [priceRange, setPriceRange] = useState([0, 100]);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setPriceRange([0, value]);
  };

  return (
    <Container>
      <ContentWrapper>
        <SortingBtnsSection>
          <SortingBtns
            sortingBtns={[
              { name: "신상품", value: "recent" },
              { name: "가격 순", value: "price" },
              { name: "추천 순", value: "recommendations" },
              { name: "구매량", value: "Purchases" },
            ]}
          />
        </SortingBtnsSection>

        <MainContent>
          <FilteringSection>
            <FilterBox>
              <FilterLabel>가격</FilterLabel>
              <PriceRange>
                <span>{`₩${priceRange[0]}`}</span>
                <Slider
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                />
                <span>{`₩${priceRange[1]}`}</span>
              </PriceRange>

              <FilterLabel>선택된 필터</FilterLabel>
              <SearchBox type="text" placeholder="검색어를 입력하세요" />

              <FreeformFiltering />
              <AllergyFiltering />
            </FilterBox>
          </FilteringSection>

          <ProductListSection>
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ProductListSection>
        </MainContent>

        <PaginationSection>
          <Pagination
            totalResults={data.pageInfo.totalResults}
            resultsPerPage={data.pageInfo.resultsPerPage}
          />
        </PaginationSection>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SortingBtnsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: right;
  padding: 1rem 0;
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 1rem 0;
`;

const FilteringSection = styled.section`
  width: 30%;
  padding: 1rem;
  box-sizing: border-box;
  margin-right: 10px;
`;

const ProductListSection = styled.section`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  box-sizing: border-box;
  margin-left: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaginationSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const FilterBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
`;

const FilterLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Slider = styled.input`
  flex: 1;
  margin: 0 10px;
  appearance: none;
  width: 100%;
  height: 5px;
  background: var(--color-main);
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    background: var(--color-main);
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: var(--color-main);
    border-radius: 50%;
    cursor: pointer;
  }
`;

const SearchBox = styled.input`
  width: 90%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
`;
