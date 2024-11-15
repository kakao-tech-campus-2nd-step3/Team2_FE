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
  // const refs = useRef<{ [key: string]: HTMLElement | null }>({});

  // const scrollToElement = (index: number) => {
  //   if (!refs.current[index]) return;

  //   refs.current[index].scrollIntoView({ behavior: "smooth" });
  //   refs.current[index].classList.add("highlight");

  //   refs.current[index].addEventListener(
  //     "animationend",
  //     () => {
  //       refs.current[index]!.classList.remove("highlight");
  //     },
  //     { once: true },
  //   );
  // };

  return (
    <Container>
      {/* <Index>
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
      </Index> */}
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

// const Index = styled.ul({
//   position: "sticky",
//   top: "30vh",
//   marginLeft: "85%",
//   height: 0,
//   padding: "1rem",
//   color: "var(--color-gray)",
//   fontSize: "var(--font-size-small)",
//   cursor: "pointer",
//   li: {
//     "&:hover": {
//       textDecoration: "underline",
//     },
//   },
// });
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
  marginTop: "10px",
  "& h2": {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    "&.highlight": {
      animation: `${highlight} 1s ease-out`,
    },
  },
  "& h3": {
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
