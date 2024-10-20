import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { JSX, useRef } from "react";

import type { Content } from "./type";

/**
 * Content 컴포넌트
 * @param {object} props - 컴포넌트가 받을 props
 * @param {Content[]} props.content - 콘텐츠 배열
 * @returns {JSX.Element} - 콘텐츠를 렌더링하는 JSX 요소
 */
export default function Content({ content }: { content: Content[] }): JSX.Element {
  const refs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToElement = (index: number) => {
    if (!refs.current[index]) return;

    refs.current[index].scrollIntoView({ behavior: "smooth" });
    refs.current[index].classList.add("highlight");

    refs.current[index].addEventListener(
      "animationend",
      () => {
        refs.current[index]!.classList.remove("highlight");
      },
      { once: true },
    );
  };

  return (
    <Container>
      <Index>
        {content.map((item, index) => {
          switch (item.tag) {
            case "h2":
              return (
                <li key={index} onClick={() => scrollToElement(index)}>
                  {item.content}
                </li>
              );
            case "h3":
              return (
                <li key={index} onClick={() => scrollToElement(index)}>
                  &nbsp;&nbsp;{item.content}
                </li>
              );
          }
        })}
      </Index>
      <ContentContainer>
        {content.map((item, index) => {
          switch (item.tag) {
            case "h2":
              return (
                <H2 key={index} ref={(el) => (refs.current[index] = el)}>
                  {item.content}
                </H2>
              );
            case "h3":
              return (
                <H3 key={index} ref={(el) => (refs.current[index] = el)}>
                  {item.content}
                </H3>
              );
            case "p":
              return <P key={index}>{item.content}</P>;
            case "img":
              return <Img key={index} src={item.content} alt="컬럼의 설명을 돕는 이미지" />;
          }
        })}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div({
  position: "relative",
});

const Index = styled.ul({
  position: "sticky",
  top: "30vh",
  marginLeft: "85%",
  height: 0,
  padding: "1rem",
  color: "var(--color-gray)",
  fontSize: "var(--font-size-small)",
  cursor: "pointer",
  li: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
const ContentContainer = styled.div({
  width: "65%",
  margin: "0 auto",
});

const highlight = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: var(--color-main);
  }
  100% {
    background-color: #fff;
  }
`;
const H2 = styled.h2({
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "20px",
  "&.highlight": {
    animation: `${highlight} 1s ease-out`,
  },
});
const H3 = styled.h3({
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "15px",
  "&.highlight": {
    animation: `${highlight} 1s ease-out`,
  },
});
const P = styled.p({
  fontSize: "var(--font-size-base)",
  lineHeight: 1.3,
  marginTop: "10px",
});
const Img = styled.img({
  width: "calc(100% - 160px)",
  margin: "20px 80px",
  borderRadius: "10px",
});
