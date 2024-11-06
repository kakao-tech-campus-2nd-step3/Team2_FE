import { useNavigate, useSearchParams } from "react-router-dom";

import { fetchInstance } from "@/utils/axiosInstance";
import { RouterPath } from "@/utils/path";
import { authLocalStorage } from "@/utils/storage";

export default function LoginRedirect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log(searchParams.get("code"));
  fetchInstance()
    .get(`/api/users/callback?code=${searchParams.get("code")}`)
    .then((res) => {
      authLocalStorage.set(res.data.token);
      navigate(RouterPath.home.getPath());
    })
    .catch((err) => console.log(err));
  return <></>;
}
