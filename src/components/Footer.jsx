import React from "react";
import { Link } from "react-router-dom";
import { FacebookRounded, Twitter, Instagram } from "@mui/icons-material";
import {
  FooterContainer,
  FooterLogo,
  FooterBrand,
  FooterRow,
  FooterSocialIcons,
  FooterSitemap,
  FooterTerms,
  FooterCopyright,
} from "../styles/FooterStyles";

const footerMenuList = [
  { title: "Home", to: "/" },
  { title: "Features", to: "/features" },
  { title: "Notifications", to: "/notifications" },
  { title: "Circular", to: "/circular" },
  { title: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterRow>
          <FooterLogo>
            <FooterBrand>
              <img
                src="./images/logo-white.png"
                alt="Thirumala international school logo"
              />
              <h2>Company name</h2>
            </FooterBrand>

            <p>Follow us on: </p>
            <FooterSocialIcons>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookRounded />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </FooterSocialIcons>
          </FooterLogo>

          <FooterSitemap>
            {footerMenuList.map(item => (
              <Link key={item.title} to={item.to}>
                {item.title}
              </Link>
            ))}
          </FooterSitemap>

          <FooterTerms>
            <Link to="/">Privacy policy</Link>
            <Link to="/about">Terms</Link>
          </FooterTerms>
        </FooterRow>
      </FooterContainer>
      <FooterCopyright>
        <p>All rights reserved</p>
      </FooterCopyright>
    </footer>
  );
};

export default Footer;
