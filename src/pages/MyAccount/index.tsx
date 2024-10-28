import styled from "@emotion/styled";

import DashBoard from "./DashBoard";

// /api/users/info
const userInfo = {
  id: 1,
  user_name: "이름",
  user_img_url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  allergies: ["달걀", "이름이 길이이일다란 알러지"],
  freefrom: ["글루텐프리"],
};

export default function MyAccount() {
  return (
    <>
      <Profile>
        <img src={userInfo.user_img_url} alt="user profile image" />
        <h2>{userInfo.user_name}</h2>
      </Profile>
      <DashBoard allergies={userInfo.allergies} freefrom={userInfo.freefrom} />
    </>
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
