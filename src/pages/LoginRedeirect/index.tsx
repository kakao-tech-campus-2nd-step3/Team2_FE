import { useNavigate, useSearchParams } from "react-router-dom";

import { fetchInstance } from "@/utils/axiosInstance";
import { RouterPath } from "@/utils/path";
import { authLocalStorage } from "@/utils/storage";

export default function LoginRedirect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  fetchInstance()
    .get(`/api/users/callback?code=${searchParams.get("code")}`)
    .then((res) => {
      authLocalStorage.set(res.data.accessToken);
      navigate(RouterPath.home.getPath());
    })
    .catch((err) => console.log(err));
  return <></>;
}
