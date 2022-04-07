import Styled from "styled-components";
import { NavLink, UserProfile } from "components";

// icons
import logo from "assets/images/logo.svg";
import homeIcon from "assets/images/home-icon.svg";
import SearchIcon from "assets/images/search-icon.svg";
import watchListIcon from "assets/images/watchlist-icon.svg";
import originalIcon from "assets/images/original-icon.svg";
import moviesIcon from "assets/images/movie-icon.svg";
import seriesIcon from "assets/images/series-icon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
`;

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
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
      <NavMenu>
        <NavLink linkText="HOME" linkIcon={homeIcon} />
        <NavLink linkText="SEARCH" linkIcon={SearchIcon} />
        <NavLink linkText="WATCHLIST" linkIcon={watchListIcon} />
        <NavLink linkText="ORIGINAL" linkIcon={originalIcon} />
        <NavLink linkText="MOVIES" linkIcon={moviesIcon} />
        <NavLink linkText="SERIES" linkIcon={seriesIcon} />
      </NavMenu>
      <UserProfile />
    </Nav>
  );
}

export default Navbar;
