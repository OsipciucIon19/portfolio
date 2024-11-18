import React from "react";
import NavigationLinks from "./NavigationLinks";
import logo from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/back-icon.svg";
import gmail from "../../assets/images/gmail.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import gmailHover from "../../assets/images/gmail-hover.svg";
import githubHover from "../../assets/images/github-hover.svg";
import linkedinHover from "../../assets/images/linkedin-hover.svg";

const NavigationBar = ({ activeMenu, handleClick }) => {
  const links = [
    {
      name: "gmail",
      to: "mailto:osipciuc.ion@gmail.com",
      icon: gmail,
      hoverIcon: gmailHover,
    },
    {
      name: "github",
      to: "https://github.com/OsipciucIon19",
      icon: github,
      hoverIcon: githubHover,
    },
    {
      name: "linkedin",
      to: "https://www.linkedin.com/in/osipciuc/",
      icon: linkedin,
      hoverIcon: linkedinHover,
    },
  ];
  const handleButton = () => {
    handleClick("personal-info");
  };
  return (
    <nav>
      <div className="logo-container">
        <div className="gradient-box">
          <span
            className={`back-icon-bg ${
              activeMenu !== "personal-info" ? "visible-back-button" : ""
            }`}
          />
          <img
            className="back-icon"
            src={backIcon}
            width="30"
            onClick={() => handleButton()}
            alt="back-icon"
          />
          <img
            className={`logo-image ${
              activeMenu !== "personal-info" ? "visible-back-button" : ""
            }`}
            src={logo}
            width="60"
            alt="logo"
          />
        </div>
      </div>
      <NavigationLinks links={links} />
    </nav>
  );
};

export default NavigationBar;
