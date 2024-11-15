import styled from "@emotion/styled";
import Lottie from "lottie-light-react";
import React from "react";
import { Link } from "react-router-dom";

import topLogo from "@/assets/topLogo.json";
import { RouterPath } from "@/utils/path";
import { accessTokenStorage } from "@/utils/storage";

const StyledLottie = styled(Lottie)({
  width: "4rem",
  height: "auto",
});

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      {/* 왼쪽 로고(SVG 사용) */}
      <Link to="/" style={styles.logoContainer}>
        <StyledLottie animationData={topLogo}></StyledLottie>
      </Link>

      {/* 중앙 텍스트 (AEat) */}
      <Link to="/" style={styles.title}>
        AEat
      </Link>

      {/* 오른쪽 아이콘 3개 */}
      <div style={styles.iconContainer}>
        <Link
          to={RouterPath.productList.getPath()}
          style={styles.btn}
          className="material-symbols-outlined"
        >
          store
        </Link>
        <Link
          to={RouterPath.columnList.getPath()}
          style={styles.btn}
          className="material-symbols-outlined"
        >
          newsmode
        </Link>
        {accessTokenStorage.get() ? (
          <Link
            to={RouterPath.myAccount.getPath()}
            style={styles.btn}
            className="material-symbols-outlined"
          >
            person
          </Link>
        ) : (
          <Link
            to={RouterPath.login.getPath()}
            className="material-symbols-outlined"
            style={styles.btn}
          >
            login
          </Link>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "relative" as const,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: "10px 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    textDecoration: "none",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  title: {
    position: "absolute" as const,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "var(--font-size-exLarge)",
    fontWeight: "bold",
    color: "var(--color-main)",
    textDecoration: "none",
  },
  btn: {
    fontSize: "var(--font-size-exLarge)",
    color: "var(--color-main)",
  },
  iconContainer: {
    display: "flex",
    gap: "15px",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  icon: {
    width: "28px",
    height: "28px",
    cursor: "pointer",
  },
};

export default Header;
