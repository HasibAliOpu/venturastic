import React from "react";
import "./Header.css";
import logo from "../../images/icon/company-logo.png";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  return (
    <div className="nav d-flex align-items-center justify-content-between ">
      <img src={logo} alt="" />
      <div className="nav-btn">
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="/">WHAT WE WOULD DO</CustomLink>
        <CustomLink to="/">CORPORATE GOVERNANCE</CustomLink>
        <CustomLink to="/">FIRST PROJECT</CustomLink>
        <CustomLink to="/">ABOUT US</CustomLink>
        <CustomLink to="/">OUR TEAM</CustomLink>
      </div>
    </div>
  );
};

export default Header;
