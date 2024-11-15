import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchInstance } from "@/utils/axiosInstance";
import { RouterPath } from "@/utils/path";

export default function Bottom() {
  const [articleLikeId, setArticleLikeId] = useState(-1);
  const [likeCount, setLikeCount] = useState(0);
  const { columnId } = useParams<{ columnId: string }>();

  const handleLike = () => {
    if (articleLikeId < 0) {
      setArticleLikeId(1);
      setLikeCount((prev) => prev + 1);
      fetchInstance()
        .post("/api/columns/likes", { articleId: columnId })
        .then((res) => {
          setArticleLikeId(res.data.articleLikeId);
          setLikeCount(res.data.count);
        })
        .catch(() => {
          setArticleLikeId(-1);
          setLikeCount((prev) => prev - 1);
          alert("처리 중 오류가 발생했습니다. 다시 시도해주세요.");
        });
    } else
      fetchInstance()
        .delete(`/api/columns/likes/${articleLikeId}`)
        .then(() => {
          setArticleLikeId(-1);
          setLikeCount((prev) => prev - 1);
        })
        .catch(() => {
          alert("처리 중 오류가 발생했습니다. 다시 시도해주세요.");
        });
  };
  useEffect(() => {
    fetchInstance()
      .get(`/api/columns/likes?articleId=${columnId}`)
      .then((res) => {
        setArticleLikeId(res.data.articleLikeId);
        setLikeCount(res.data.count);
      });
  }, [columnId]);
  return (
    <Container>
      <Favorite>
        <FavoriteIcon
          className="material-symbols-outlined"
          isLiked={articleLikeId >= 0}
          onClick={handleLike}
        >
          favorite
        </FavoriteIcon>
        <span>{likeCount}</span>
      </Favorite>
      <MyLink to={RouterPath.columnList.getPath()}>
        다른 칼럼 보러가기 <span className="material-symbols-outlined">arrow_right_alt</span>
      </MyLink>
    </Container>
  );
}

const Container = styled.div({
  width: "70%",
  margin: "0 auto",
  padding: "0.8rem 0.3rem",
  borderTop: "1px solid #e9e9e9",

  display: "flex",
  justifyContent: "space-between",
});

const Favorite = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
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
