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
        <CustomLink to="/whatWeWouldDo">WHAT WE WOULD DO</CustomLink>
        <CustomLink to="/corporate">CORPORATE GOVERNANCE</CustomLink>
        <CustomLink to="/firstProject">FIRST PROJECT</CustomLink>
        <CustomLink to="/aboutUs">ABOUT US</CustomLink>
        <CustomLink to="/ourTeam">OUR TEAM</CustomLink>
        {/* <CustomLink to="*"></CustomLink> */}
      </div>
    </div>
  );
};

export default Header;
