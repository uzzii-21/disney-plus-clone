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

const Nav = Styled.header`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  `;

const Logo = Styled.img`
  width: 80px;
  `;

const NavMenu = Styled.nav`
  display: flex;
  flex: 1;
  margin-left: 25px;
`;

function Navbar() {
  return (
    <Nav className="App">
      <Logo src={logo} />
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
