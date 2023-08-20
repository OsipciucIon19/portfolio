import React from 'react';
import {useDarkTheme} from "../../context/DarkThemeContext";

const Footer = () => {
  const {isDarkTheme} = useDarkTheme();
  return (
    <footer className={`${isDarkTheme && "light-text"}`}>
      © 2023 Osipciuc Ion
    </footer>
  );
}

export default Footer;