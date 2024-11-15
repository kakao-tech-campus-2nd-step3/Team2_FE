import styled from "@emotion/styled";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FilteringSection() {
  const [isAllergyOpen, setAllergyOpen] = useState(false);

  const toggleAllergy = () => setAllergyOpen(!isAllergyOpen);

  return (
    <div>
      <FilterContainer>
        <ToggleSection onClick={toggleAllergy}>
          <FilterTitle>알레르기 성분 필터링</FilterTitle>
          {isAllergyOpen ? <FaChevronUp /> : <FaChevronDown />}
        </ToggleSection>
        {isAllergyOpen && (
          <FilterContent>
            <Tag>메밀</Tag>
            <Tag>땅콩</Tag>
            <Tag>계</Tag>
            <Tag>새우</Tag>
            <Tag>토마토</Tag>
            <Tag>닭고기</Tag>
          </FilterContent>
        )}
      </FilterContainer>
    </div>
  );
}

const FilterContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  margin: 16px 0;
`;

const FilterTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 2px;
`;

const ToggleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid #ddd;
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
