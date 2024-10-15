import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          <StyledImage
            src="src\pages\Home\Shop Now.webp"
            alt="Shop Now"
            isHovered={isHoveredLeft}
          />
          <OverlayText>SHOP NOW</OverlayText>
        </ImageContainer>
        <ImageContainer
          onMouseEnter={() => setIsHoveredRight(true)}
          onMouseLeave={() => setIsHoveredRight(false)}
          onClick={() => navigate("/columns")}
        >
          <StyledImage
            src="src\pages\Home\Read The Column.webp"
            alt="Read The Column"
            isHovered={isHoveredRight}
          />
          <OverlayText>Read The Column</OverlayText>
        </ImageContainer>
      </ImageSection>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 0 10px;
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
  height: auto;
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const StyledImage = styled.img<{ isHovered: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${({ isHovered }) => (isHovered ? "none" : "grayscale(100%)")};
  transition: filter 0.5s ease;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #89a06b;
  font-size: calc(2vw + 2vh);
  font-weight: bold;
  text-align: center;
  font-weight: 1600;
  opacity: 0.85;
  z-index: 1;
  white-space: nowrap;
  width: 90%;
  max-width: 100%;
`;
