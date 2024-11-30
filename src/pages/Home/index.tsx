import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import imgReadTheColumn from "@/assets/Read The Column.webp";
import imgShopNow from "@/assets/Shop Now.webp";

export default function Home() {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <ImageSection>
        <ImageContainer
          onMouseEnter={() => setIsHoveredLeft(true)}
          onMouseLeave={() => setIsHoveredLeft(false)}
          onClick={() => navigate("/Products")}
        >
          <StyledImage src={imgShopNow} alt="Shop Now" isHovered={isHoveredLeft} />
          <OverlayText>SHOP NOW</OverlayText>
        </ImageContainer>
        <ImageContainer
          onMouseEnter={() => setIsHoveredRight(true)}
          onMouseLeave={() => setIsHoveredRight(false)}
          onClick={() => navigate("/columns")}
        >
          <StyledImage src={imgReadTheColumn} alt="Read The Column" isHovered={isHoveredRight} />
          <OverlayText>Read The Column</OverlayText>
        </ImageContainer>
      </ImageSection>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 10px;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1600px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 48%;
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const StyledImage = styled.img<{ isHovered: boolean }>`
  width: 100%;
  object-fit: cover;
  filter: ${({ isHovered }) => (isHovered ? "none" : "grayscale(100%)")};
  transition: filter 0.5s ease;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-main);
  font-size: calc(2vw + 2vh);
  font-weight: bold;
  text-align: center;
  font-weight: 1600;
  opacity: 0.8;
  z-index: 1;
  white-space: nowrap;
  width: 90%;
  max-width: 100%;
`;
