import React, {useEffect, useRef, useState} from 'react';
import video from '../../assets/videos/bug.webm'
import darkVideo from '../../assets/videos/bug-dark.webm'
import videoMP4 from '../../assets/videos/bug.mp4'
import darkVideoMP4 from '../../assets/videos/bug-dark.mp4'
import {handleVideo} from "../../utils/handleVideo";
import {detectIOS} from "../../utils/detectIOS";
import ExperienceTimeline from "./ExperienceTimeline";
import Languages from "./Languages";
import {useDarkTheme} from "../../context/DarkThemeContext";
import clickIcon from "../../assets/images/click-icon.svg";

const PersonalInfo = ({display}) => {
  const videoRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(true);
  const {isDarkTheme} = useDarkTheme();

  useEffect(() => {
    if (videoRef) {
      videoRef.current = handleVideo(videoRef, display)
    }
  }, [display])

  return (
    <>
      <section className={`content-block personal-info-block ${display && "show"}`}>
        <div
          onClick={() => setIsFlipped(false)}
          className={`front-face ${!isFlipped && "front-face-flipped"} ${isDarkTheme && "light-shadow"}`}
        >
          <div className="content-block-text">
            <h1>Welcome!</h1>
            <p className={`${isDarkTheme && "light-text"}`}>
              My name is Ion and I'm a programmer specialized in developing modern and efficient web applications.
            </p>
            <p className="info-text gradient">
              <img className="click-icon" src={clickIcon} width="15" alt="Click here" />Tap the card to view more information about me
            </p>
            <video
              className="personal-info-video"
              ref={videoRef}
              width="400"
              src={detectIOS() ? (isDarkTheme ? darkVideoMP4 : videoMP4) : (isDarkTheme ? darkVideo : video)}
              controlsList="nodownload"
              autoPlay loop muted playsInline
            />
            <p className={`info-bug ${isDarkTheme && "light-text"}`}><i>* I hope this is the only bug you'll see in my projects :)</i></p>
          </div>
        </div>
        <div className={`back-face ${isFlipped && "back-face-flipped"} ${isDarkTheme && "light-shadow"}`}>
          <div className="content-block-text">
            <button className="close-button" onClick={() => setIsFlipped(true)}>&#x2715;</button>
            <Languages />
            <ExperienceTimeline />
          </div>
        </div>

      </section>
    </>
  );
}

export default PersonalInfo;