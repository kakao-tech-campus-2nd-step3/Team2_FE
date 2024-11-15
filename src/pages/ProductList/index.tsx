import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Loading } from "@/components/Loading";
import Pagination, { queryKey as pageToken } from "@/components/Pagination";
import SortingBtns, { queryKey as sortBy } from "@/components/SortingBtns";
import { fetchInstance } from "@/utils/axiosInstance";

import ProductCard from "./ProductCard";
import { ProductListResponse } from "./type";

export default function ProductList() {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [searchParams] = useSearchParams();

  const { data, isPending, isError } = useQuery<ProductListResponse>({
    queryKey: ["products", searchParams.get(pageToken)!, searchParams.get(sortBy)!],
    queryFn: async () =>
      (
        await fetchInstance().get(
          `/api/products?maxResults=10&pageToken=${Number(searchParams.get(pageToken)) - 1}&sortby=${searchParams.get(sortBy)}`,
        )
      ).data,
  });

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setPriceRange([0, value]);
  };

  if (isPending) return <Loading />;
  if (isError) return <div>Error</div>;

  return (
    <Container>
      <ContentSection>
        <SortingBtnsSection>
          <SortingBtns
            sortingBtns={[
              { name: "신상품", value: "new" },
              { name: "가격 순", value: "price" },
              { name: "추천 순", value: "rate" },
              { name: "구매량", value: "sales" },
            ]}
          />
        </SortingBtnsSection>

        <FilteringSection>
          <FilterBox>
            <FilterLabel>가격</FilterLabel>
            <PriceRange>
              <span>{`₩${priceRange[0]}`}</span>
              <Slider
                type="range"
                min="0"
                max="50000"
                value={priceRange[1]}
                onChange={handlePriceChange}
              />
              <span>{`₩${priceRange[1] === 50000 ? "5만원 이상" : priceRange[1]}`}</span>
            </PriceRange>

            <FilterLabel>제품명을 입력하세요</FilterLabel>
            <SearchBox type="text" placeholder="검색어를 입력하세요" />
          </FilterBox>
        </FilteringSection>

        <ProductListSection>
          {data.content.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductListSection>

        <Pagination totalResults={data.totalElements} resultsPerPage={10} />
      </ContentSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const FilteringSection = styled.section`
  width: 30%;
  padding: 1rem;
  box-sizing: border-box;
  justify-content: left;
`;

const ContentSection = styled.section`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const SortingBtnsSection = styled.section`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 1rem 0;
`;

const ProductListSection = styled.section`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  justify-content: right;

  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
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
