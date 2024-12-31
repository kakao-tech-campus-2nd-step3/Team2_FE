import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchInstance } from "@/utils/axiosInstance";
import { RouterPath } from "@/utils/path";
import { accessTokenStorage } from "@/utils/storage";

const fetchLikeCount = (columnId: string, setLikeCount: (v: number) => void) => {
  if (!columnId) return;
  fetchInstance()
    .get(`/api/columns/likes/count?articleId=${columnId}`)
    .then((res) => setLikeCount(res.data.count));
};

/**
 * @returns 칼럼 하단 좋아요, 다른 칼럼 보러가기 버튼
 */
export default function Bottom() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { columnId } = useParams<{ columnId: string }>();

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
      fetchInstance(true)
        .post("/api/columns/likes", { articleId: columnId })
        .then(() => fetchLikeCount(columnId ?? "", setLikeCount))
        .catch(() => {
          setIsLiked(false);
          setLikeCount(likeCount - 1);
        });
    } else
      fetchInstance(true)
        .delete(`/api/columns/likes/${columnId}`)
        .then(() => {
          setIsLiked(false);
          fetchLikeCount(columnId ?? "", setLikeCount);
        });
  };
  useEffect(() => {
    fetchLikeCount(columnId ?? "", setLikeCount);

    if (!accessTokenStorage.get()) return;
    fetchInstance(true)
      .get(`/api/columns/likes?articleId=${columnId}`)
      .then((res) => {
        setIsLiked(res.data.isliked);
      });
  }, [columnId]);
  return (
    <Container>
      <Favorite>
        <FavoriteIcon className="material-symbols-outlined" isLiked={isLiked} onClick={handleLike}>
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
