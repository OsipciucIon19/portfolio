import React from 'react';
import {useDarkTheme} from "../../context/DarkThemeContext";

const Footer = () => {
  const {isDarkTheme} = useDarkTheme();
  return (
    <footer className={`${isDarkTheme && "light-text"}`}>
      © {new Date().getUTCFullYear()} Osipciuc Ion
    </footer>
  );
}

export default Footer;