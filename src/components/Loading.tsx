import styled from "@emotion/styled";
import Lottie from "lottie-light-react";
import { useEffect, useRef, useState } from "react";

import loadingAnimation from "@/assets/loading.json";

const loadingTexts = [
  "알러지 없는 페이지를 준비하는 중...",
  "안전한 재료를 모으는 중...",
  "프리프롬 상품을 선별하는 중...",
  "안심할 수 있는 아이디어를 구상하는 중...",
  "위험 요소를 제거하는 중...",
];

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  fontFamily: "Arial, sans-serif",
});

const StyledLottie = styled(Lottie)({
  width: "80%",
  height: "auto",
});

const Text = styled.p({
  marginTop: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
  "@media screen and (max-width: 600px)": {
    fontSize: "16px",
  },
  "@media screen and (min-width: 601px) and (max-width: 1200px)": {
    fontSize: "17px",
  },
  "@media screen and (min-width: 1201px)": {
    fontSize: "18px",
  },
});

export function Loading() {
  const getRandomText = () => loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
  const [text, setText] = useState(getRandomText());
  const containerRef = useRef(null);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setText((prevText) => {
        const baseText = prevText.replace(/\.+$/, "");
        const dots = prevText.match(/\.+$/)?.[0] || "";
        return baseText + (dots.length >= 3 ? "" : dots + ".");
      });
    }, 500);

    return () => {
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <StyledLottie animationData={loadingAnimation} />
      <Text>{text}</Text>
    </Container>
  );
}
