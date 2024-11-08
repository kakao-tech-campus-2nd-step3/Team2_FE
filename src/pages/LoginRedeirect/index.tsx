import { useNavigate, useSearchParams } from "react-router-dom";

import { fetchInstance } from "@/utils/axiosInstance";
import { RouterPath } from "@/utils/path";

export default function LoginRedirect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  fetchInstance({ withCredentials: true })
    .get(`/api/users/callback?code=${searchParams.get("code")}`)
    .then(() => {
      navigate(RouterPath.home.getPath());
    })
    .catch((err) => console.log(err));
  return <></>;
}
