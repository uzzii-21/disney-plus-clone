import styled from "styled-components";

const Link = styled.button`
  display: flex;
  align-items: center;
  padding: 0 12px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  img {
    height: 20px;
    margin-right: 7px;
  }

  span {
    font-size: 14px;
    color: white;
    position: relative;
    letter-spacing: 1.5px;

    &:after {
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      width: 0%;
      left: 0;
      bottom: -6px;
      opacity: 0;
    }
  }
  &:hover {
    span:after {
      width: 100%;
      opacity: 1;
    }
  }
`;

interface IProps {
  linkText: string;
  linkIcon: string;
}

function NavLink({ linkText, linkIcon }: IProps) {
  return (
    <Link>
      <img src={linkIcon} alt={linkText} />
      <span>{linkText}</span>
    </Link>
  );
}

export default NavLink;
