import React, {useState} from 'react';
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";
import {useDarkTheme} from "../../context/DarkThemeContext";

function NavigationLinks({links}) {
  const [hoveredLink, setHoveredLink] = useState(null);
  const { isDarkTheme, toggleTheme } = useDarkTheme();

  return (
    <ul className="navigation-links">
      <li
        className="theme-toggle-item"
        onClick={() => toggleTheme()}
      >
        <img
          className="theme-toggle"
          src={ isDarkTheme ? sun : moon }
          width="30"
          alt="theme"
        />
      </li>
      {links.map((link, index) =>
        <li
          key={link.name}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <a
            href={link.to}
            target="_blank"
          >
            <img
              className={`link-image ${hoveredLink === index && "hovered"} ${isDarkTheme && "light-svg"}`}
              src={hoveredLink === index ? link.hoverIcon : link.icon}
              width="30"
              alt={link.name}
            />
          </a>
        </li>
      )}
    </ul>
  );
}

export default NavigationLinks;