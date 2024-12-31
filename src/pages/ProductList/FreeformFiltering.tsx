import styled from "@emotion/styled";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FilteringSection() {
  const [isFreeFromOpen, setFreeFromOpen] = useState(true);

  const toggleFreeFrom = () => setFreeFromOpen(!isFreeFromOpen);

  return (
    <FilterContainer>
      <ToggleSection onClick={toggleFreeFrom}>
        <FilterTitle>프리프롬 필터링</FilterTitle>
        {isFreeFromOpen ? <FaChevronUp /> : <FaChevronDown />}
      </ToggleSection>
      {isFreeFromOpen && (
        <FilterContent>
          {/* 프리프롬 필터링 내용 */}
          <Tag>피넛 프리</Tag>
          <Tag>나트륨 프리</Tag>
          <Tag>슈가 프리</Tag>
          <Tag>디카페인</Tag>
        </FilterContent>
      )}
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  border: 1px solid var(--color-gray2);
  border-radius: 8px;
  padding: 5px 16px;
  background-color: #f9f9f9;
  margin: 5px 0;
`;

const FilterTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin: 4px 0;
`;

const ToggleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  border-top: 1px solid var(--color-gray2);
  &:first-of-type {
    border-top: none;
  }
`;

const FilterContent = styled.div`
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.div`
  padding: 4px 8px;
  background-color: var(--color-main);
  color: white;
  border-radius: 4px;
  font-size: 14px;
`;
