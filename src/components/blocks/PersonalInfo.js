import React, { useState } from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import Languages from "./Languages";
import { useDarkTheme } from "../../context/DarkThemeContext";
import clickIcon from "../../assets/images/click-icon.svg";
import PcCanvas from "./PcCanvas";

const PersonalInfo = ({ display }) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const { isDarkTheme } = useDarkTheme();

  return (
    <>
      <section
        className={`content-block personal-info-block ${display && "show"}`}
      >
        <div
          onClick={() => setIsFlipped(false)}
          className={`front-face ${!isFlipped && "front-face-flipped"} ${
            isDarkTheme && "light-shadow"
          }`}
        >
          <div className="content-block-text">
            <h1>Welcome!</h1>
            <p className={`${isDarkTheme && "light-text"}`}>
              My name is Ion and I'm a programmer specialized in developing
              modern and efficient web applications.
            </p>
            <p className="info-text gradient">
              <img
                className="click-icon"
                src={clickIcon}
                width="15"
                alt="Click here"
              />
              Tap the card to view more information about me
            </p>
            <div className="canvas-wrapper">
              <PcCanvas />
            </div>
          </div>
        </div>
        <div
          className={`back-face ${isFlipped && "back-face-flipped"} ${
            isDarkTheme && "light-shadow"
          }`}
        >
          <div className="content-block-text">
            <button className="close-button" onClick={() => setIsFlipped(true)}>
              &#x2715;
            </button>
            <Languages />
            <ExperienceTimeline />
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
