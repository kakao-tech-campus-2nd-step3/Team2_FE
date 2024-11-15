import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Background from "@/components/Background";
import { Loading } from "@/components/Loading.tsx";
import { fetchInstance, isAuthFail } from "@/utils/axiosInstance";
import { RouterPath } from "@/utils/path";

import DashBoard from "./DashBoard";

type UserInfo = {
  id: number;
  userName: string;
  userImageUrl: string;
  allergies: string[];
  freefrom: string[];
};

export default function MyAccount() {
  const navigate = useNavigate();
  const { data, isPending, isError } = useQuery<UserInfo>({
    queryKey: ["myAccount"],
    queryFn: async () => {
      const response = await fetchInstance(true)
        .get("/api/users/info")
        .catch((err) => {
          if (isAuthFail(err)) navigate(RouterPath.login.getPath());
          return Promise.reject();
        });
      return response.data;
    },
  });

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Background>
      <Profile>
        <img src={data.userImageUrl} alt="user profile image" />
        <h2>{data.userName}</h2>
      </Profile>
      <DashBoard allergies={data.allergies} freefrom={data.freefrom} />
    </Background>
  );
}

const Profile = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
  h2 {
    font-size: 1.2rem;
  }
`;
