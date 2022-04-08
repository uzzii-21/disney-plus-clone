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
interface IProps {
  name: string;
  imgURL: string;
  logout: () => void;
}
function UserProfile({ name, imgURL, logout }: IProps) {
  return (
    <Avatar>
      <span>{name}</span>
      <ProfileImg onClick={logout} src={imgURL} alt={name} />
    </Avatar>
  );
}

export default UserProfile;
