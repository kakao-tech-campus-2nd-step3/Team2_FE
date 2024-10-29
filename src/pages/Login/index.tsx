import styled from "@emotion/styled";
import { JSX } from "react";

import kakaoLoginImg from "@/assets/kakao_login_medium_wide.png";
import logo from "@/assets/logo.png";

/**
 * Login page
 * @returns {JSX.Element} Login page
 */
export default function Login(): JSX.Element {
  return (
    <PageContainer>
      <Container>
        <Header>
          <img src={logo} alt="로고" />
          <h1>로그인</h1>
        </Header>
        <a href="">
          <img src={kakaoLoginImg} alt="카카오 로그인" />
        </a>
      </Container>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: var(--color-background);
`;
const Container = styled.div`
  width: 20rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
`;
const Header = styled.div`
  margin: 0 auto;
  text-align: center;
  img {
    width: 5rem;
    margin-bottom: 0.8rem;
  }
  h1 {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;
