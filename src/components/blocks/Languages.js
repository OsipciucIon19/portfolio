import React from 'react';
import "../../assets/styles/languages.css"
import {useDarkTheme} from "../../context/DarkThemeContext";

const Languages = () => {
  const {isDarkTheme} = useDarkTheme();

  return (
    <div className="languages-wrapper">
      <h2 className={`${isDarkTheme && "light-text"}`}>Spoken languages</h2>
      <div className="languages">
        <div className="levels-legend">
          <span className="level-placeholder" />
          <div className={`levels ${isDarkTheme && "light-text"}`}>
            <span className="level">A2</span>
            <span className="level">B1</span>
            <span className="level">B2</span>
            <span className="level">C1</span>
            <span className="level">C2</span>
          </div>
        </div>
        <ul>
          <li className="language-item">
            <span className={`language-title  ${isDarkTheme && "light-text"}`}>Romanian</span>
            <span className="progress-bg">
              <span className="progress-fill romanian" />
            </span>
          </li>
          <li className="language-item">
            <span className={`language-title  ${isDarkTheme && "light-text"}`}>Russian</span>
            <span className="progress-bg">
              <span className="progress-fill russian" />
            </span>
          </li>
          <li className="language-item">
            <span className={`language-title  ${isDarkTheme && "light-text"}`}>English</span>
            <span className="progress-bg">
              <span className="progress-fill english" />
            </span>
          </li>
          <li className="language-item">
            <span className={`language-title  ${isDarkTheme && "light-text"}`}>French</span>
            <span className="progress-bg">
              <span className="progress-fill french" />
            </span>
          </li>
          <li className="language-item">
            <span className={`language-title  ${isDarkTheme && "light-text"}`}>Slovak</span>
            <span className="progress-bg">
              <span className="progress-fill slovak" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Languages;