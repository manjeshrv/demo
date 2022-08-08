import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HeaderStyled,
  HeaderContainer,
  HeaderBrand,
  HeaderMenu,
  HeaderToggler,
  TogglerIcon,
} from "../styles/HeaderStyles";

const headerMenuList = [
  { title: "Home", to: "/" },
  { title: "Features", to: "/features" },
  { title: "Notifications", to: "/notifications" },
  { title: "Circular", to: "/circular" },
  { title: "Contact", to: "/contact" },
];

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNavbar(prev => !prev);
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <HeaderBrand>
          <Link to="/">
            <img
              src="./images/logo.png"
              alt="Thirumala international school logo"
            />
          </Link>
        </HeaderBrand>
        <HeaderMenu open={toggleNavbar}>
          <ul>
            {headerMenuList.map(item => (
              <li key={item.title}>
                <NavLink to={item.to} onClick={handleToggleNavbar}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </HeaderMenu>
        <HeaderToggler onClick={handleToggleNavbar}>
          <TogglerIcon open={toggleNavbar} />
        </HeaderToggler>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
