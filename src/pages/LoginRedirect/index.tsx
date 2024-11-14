import { useNavigate, useSearchParams } from "react-router-dom";

import { fetchInstance } from "@/utils/axiosInstance";
import { RouterPath } from "@/utils/path";
import { accessTokenStorage, refreshTokenStorage } from "@/utils/storage";

export default function LoginRedirect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  fetchInstance()
    .get(`/api/users/callback?code=${searchParams.get("code")}`)
    .then((res) => {
      accessTokenStorage.set(res.data.accessToken);
      refreshTokenStorage.set(res.data.refreshToken);
      navigate(RouterPath.home.getPath());
    })
    .catch((err) => console.log(err));
  return <></>;
}
