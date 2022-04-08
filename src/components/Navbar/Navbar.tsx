import Styled from "styled-components";
import { NavLink, UserProfile } from "components";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// icons
import logo from "assets/images/logo.svg";
import homeIcon from "assets/images/home-icon.svg";
import SearchIcon from "assets/images/search-icon.svg";
import watchListIcon from "assets/images/watchlist-icon.svg";
import originalIcon from "assets/images/original-icon.svg";
import moviesIcon from "assets/images/movie-icon.svg";
import seriesIcon from "assets/images/series-icon.svg";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "firebase.config";
import { AuthContext } from "context/AuthProvider";

const Nav = Styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 4;
  display: flex;
  align-items: center;
  padding: 0 36px;
  transition: all .3s ease-out;

  & > a {
    width: 108px;
    height: auto;
    max-height: 70px;
    padding: 0 14px;
    display: inline-block;
    margin-right: auto;
  }
  `;

const Logo = Styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const NavMenu = Styled.nav`
  display: flex;
  flex: 1;
  margin-left: 25px;


  @media (max-width: 1024px) {
    display: none;
  }
`;
const LoginButton = Styled.button`
  border: 1px solid silver;
  padding: 8px 16px;
  background-color: rgba(0,0,0,.8);
  margin: 5px;
  margin: 5px;
  cursor: pointer;
  border-radius: 4px;
  height: 50px;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease 0s;  
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 1px;


  &:hover {
    background: #f9f9f9;
    color: #000;
  }
`;

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { authState, setAuthState } = useContext(AuthContext);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const logout = () => {
    signOut(auth);
    setAuthState({
      name: "",
      photo: "",
    });
  };
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const { user } = await res;
      setAuthState({ name: user.displayName, photo: user.photoURL });
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Nav
      style={
        navbar
          ? { backgroundColor: "#090b13" }
          : { backgroundColor: "transparent" }
      }
    >
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      {authState.name ? (
        <>
          <NavMenu>
            <NavLink linkText="HOME" linkIcon={homeIcon} />
            <NavLink linkText="SEARCH" linkIcon={SearchIcon} />
            <NavLink linkText="WATCHLIST" linkIcon={watchListIcon} />
            <NavLink linkText="ORIGINAL" linkIcon={originalIcon} />
            <NavLink linkText="MOVIES" linkIcon={moviesIcon} />
            <NavLink linkText="SERIES" linkIcon={seriesIcon} />
          </NavMenu>
          <UserProfile
            logout={logout}
            name={authState.name}
            imgURL={authState.photo}
          />
        </>
      ) : (
        <LoginButton onClick={signInWithGoogle}>LOG IN</LoginButton>
      )}
    </Nav>
  );
}

export default Navbar;
