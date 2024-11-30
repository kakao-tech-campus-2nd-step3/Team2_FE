import styled from "@emotion/styled";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { ProductDetail } from "./type";

export default function Product({ detail }: { detail: ProductDetail }): JSX.Element {
  const [isDetailOpen, setDetailOpen] = useState(true);

  const toggleDetail = () => setDetailOpen(!isDetailOpen);

  return (
    <DetailContainer>
      <ToggleSection onClick={toggleDetail}>
        <h3>상품 상세</h3>
        {isDetailOpen ? <FaChevronUp /> : <FaChevronDown />}
      </ToggleSection>

      {isDetailOpen && (
        <>
          <DetailImage src={detail.description} alt="상품 상세 이미지" />
          <DetailTable>
            <tbody>
              <tr>
                <TableHeader>제조사</TableHeader>
                <td>{detail.manufacturer}</td>
                <TableHeader>용량</TableHeader>
                <td>{detail.capacity}</td>
              </tr>
              <tr>
                <TableHeader>영양성분</TableHeader>
                <td colSpan={3}>{detail.nutritionalInfo}</td>
              </tr>
              <tr>
                <TableHeader>성분</TableHeader>
                <td colSpan={3}>{detail.ingredients}</td>
              </tr>
            </tbody>
          </DetailTable>
        </>
      )}
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px auto;
  border: 1px solid var(--color-gray2);
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  max-width: 900px;
`;

const ToggleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const DetailImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 20px auto;
  display: block;
  background-color: #eaeaea;
  display: block;
  background-color: #eaeaea;
`;

const DetailTable = styled.table`
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid var(--color-gray2);
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

const TableHeader = styled.th`
  white-space: nowrap;
  font-weight: bold;
`;
