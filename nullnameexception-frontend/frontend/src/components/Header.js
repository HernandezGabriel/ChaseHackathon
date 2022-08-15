import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // want to show if the user is already logged in
    <HeaderContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/rewards">Redeem</NavLink>
      <NavLink to="/events">Volunteer Opportunites</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  font-size: 17.5px;
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
  }
`;
