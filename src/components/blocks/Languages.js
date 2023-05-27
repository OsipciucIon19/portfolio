import React from 'react';
import "../../assets/styles/languages.css"

const Languages = () => {
  return (
    <div className="languages-wrapper">
      <h3>Spoken languages</h3>
      <div className="languages">
        <div className="levels-legend">
          <span className="level-placeholder" />
          <div className="levels">
            <span className="level">B1</span>
            <span className="level">B2</span>
            <span className="level">C1</span>
            <span className="level">C2</span>
          </div>
        </div>
        <ul>
          <li className="language-item">
            <span className="language-title">Romanian</span>
            <span className="progress-bg">
              <span className="progress-fill romanian" />
            </span>
          </li>
          <li className="language-item">
            <span className="language-title">Russian</span>
            <span className="progress-bg">
              <span className="progress-fill russian" />
            </span>
          </li>
          <li className="language-item">
            <span className="language-title">English</span>
            <span className="progress-bg">
              <span className="progress-fill english" />
            </span>
          </li>
          <li className="language-item">
            <span className="language-title">French</span>
            <span className="progress-bg">
              <span className="progress-fill french" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Languages;