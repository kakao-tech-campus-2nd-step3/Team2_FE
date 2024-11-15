import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { JSX } from "react";
import ReactMarkdown from "react-markdown";

/**
 * Content 컴포넌트
 * @param {object} props - 컴포넌트가 받을 props
 * @param {string} props.content - 콘텐츠 문자열
 * @returns {JSX.Element} - 콘텐츠를 렌더링하는 JSX 요소
 */
export default function Content({ content }: { content: string }): JSX.Element {
  return (
    <Container>
      <ContentContainer>
        <StyledMarkdownWrapper>
          <ReactMarkdown>{content}</ReactMarkdown>
        </StyledMarkdownWrapper>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div({
  position: "relative",
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

const StyledMarkdownWrapper = styled.div({
  fontSize: "var(--font-size-base)",
  lineHeight: 1.3,
  margin: "30px 0",
  "& h1": {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    "&.highlight": {
      animation: `${highlight} 1s ease-out`,
    },
  },
  "& h2": {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "15px",
    "&.highlight": {
      animation: `${highlight} 1s ease-out`,
    },
  },
  "& p": {
    fontSize: "var(--font-size-base)",
    lineHeight: 1.3,
    marginTop: "10px",
  },
  "& img": {
    width: "calc(100% - 160px)",
    margin: "20px 80px",
    borderRadius: "10px",
  },
});
