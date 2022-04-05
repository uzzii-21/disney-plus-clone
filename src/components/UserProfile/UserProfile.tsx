import styled from "styled-components";

const ProfileImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

function UserProfile() {
  return (
    <ProfileImg
      src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
      alt=""
    />
  );
}

export default UserProfile;
