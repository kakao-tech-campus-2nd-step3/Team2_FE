import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import Background from "@/components/Background";
import { fetchInstance } from "@/utils/axiosInstance";

import DashBoard from "./DashBoard";

type UserInfo = {
  id: number;
  userName: string;
  userImgUrl: string;
  allergies: string[];
  freefrom: string[];
};

export default function MyAccount() {
  const { data, isPending, isError } = useQuery<UserInfo>({
    queryKey: ["myAccount"],
    queryFn: async () => {
      const response = await fetchInstance().get("/api/users/info");
      return response.data;
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Background>
      <Profile>
        <img src={data.userImgUrl} alt="user profile image" />
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
