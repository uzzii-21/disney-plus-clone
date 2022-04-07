import styled from "styled-components";

const Avatar = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 10px;
  }
`;

const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

function UserProfile() {
  return (
    <Avatar>
      <span>Uzair</span>
      <ProfileImg
        src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
        alt=""
      />
    </Avatar>
  );
}

export default UserProfile;
