import styled from '@emotion/styled';
import type { Content } from './type';
import { useRef } from 'react';
import { keyframes } from '@emotion/react';

export default function Content({ content }: { content: Content[] }) {
  const refs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToElement = (index: number) => {
    if (!refs.current[index]) return;

    refs.current[index].scrollIntoView({ behavior: 'smooth' });
    refs.current[index].classList.add('highlight');

    refs.current[index].addEventListener(
      'animationend',
      () => {
        refs.current[index]!.classList.remove('highlight');
      },
      { once: true },
    );
  };

  return (
    <>
      <Index>
        {content.map((item, index) => {
          switch (item.tag) {
            case 'h2':
              return (
                <li key={index} onClick={() => scrollToElement(index)}>
                  {item.content}
                </li>
              );
            case 'h3':
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
            case 'h2':
              return (
                <H2 key={index} ref={(el) => (refs.current[index] = el)}>
                  {item.content}
                </H2>
              );
            case 'h3':
              return (
                <H3 key={index} ref={(el) => (refs.current[index] = el)}>
                  {item.content}
                </H3>
              );
            case 'p':
              return <P key={index}>{item.content}</P>;
            case 'img':
              return <Img key={index} src={item.content} alt="컬럼의 설명을 돕는 이미지" />;
          }
        })}
      </ContentContainer>
    </>
  );
}

const Index = styled.ul`
  position: fixed;
  top: 200px;
  right: 0;
  width: calc((100vw - 700px) / 2 - 20px);
  color: var(--color-gray);
  font-size: 12px;
  cursor: pointer;
  li:hover {
    text-decoration: underline;
  }
`;
const ContentContainer = styled.div`
  width: 700px;
  margin: 0 auto;
`;

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
const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  &.highlight {
    animation: ${highlight} 1s ease-out;
  }
`;
const H3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  &.highlight {
    animation: ${highlight} 1s ease-out;
  }
`;
const P = styled.p`
  margin-top: 10px;
`;
const Img = styled.img`
  width: 500px;
  margin: 20px 100px;
  border-radius: 10px;
  margin-top: 10px;
`;
