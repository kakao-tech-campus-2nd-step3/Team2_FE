import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { RouterPath } from "@/utils/path";

export default function Bottom() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    // TODO : 좋아요 post API 호출
    setIsLiked((prev) => !prev);
  };
  useEffect(() => {
    // TODO : 좋아요 여부 체크 API 호출
    setIsLiked(false);
  }, []);
  return (
    <Container>
      <div>
        <FavoriteIcon className="material-symbols-outlined" isLiked={isLiked} onClick={handleLike}>
          favorite
        </FavoriteIcon>
        {/* TODO 좋아요 총 개수 get에 추가 요청 */}
      </div>
      <MyLink to={RouterPath.columnList.getPath()}>
        다른 칼럼 보러가기 <span className="material-symbols-outlined">arrow_right_alt</span>
      </MyLink>
    </Container>
  );
}

const Container = styled.div({
  width: "70%",
  margin: "0 auto",
  padding: "0.3rem",
  borderTop: "1px solid #e9e9e9",

  display: "flex",
  justifyContent: "space-between",
});

const beating = keyframes({
  "0%": { transform: "scale(1)" },
  "40%": { transform: "scale(1.25)" },
  "70%": { transform: "scale(0.9)" },
  "100%": { transform: "scale(1)" },
});
const FavoriteIcon = styled.button<{ isLiked: boolean }>((props) => ({
  fontSize: "var(--font-size-large)",
  ...(props.isLiked && {
    fontVariationSettings: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
    color: "red",
    animation: `${beating} .5s 1 alternate`,
  }),
}));

const MyLink = styled(Link)({
  fontSize: "var(--font-size-base)",
  display: "flex",
  alignItems: "center",
  fontVariationSettings: "'wght' 300",
  ":hover": {
    color: "var(--color-main)",
    fontWeight: "bold",
  },
  span: {
    fontSize: "var(--font-size-large)",
  },
});
