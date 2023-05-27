import React, {useEffect, useRef, useState} from 'react';
import video from '../../assets/videos/bug.webm'
import videoMP4 from '../../assets/videos/bug.mp4'
import {handleVideo} from "../../utils/handleVideo";
import {detectIOS} from "../../utils/detectIOS";
import ExperienceTimeline from "./ExperienceTimeline";
import Languages from "./Languages";

const PersonalInfo = ({display}) => {
  const videoRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(true);

  useEffect(() => {
    if (videoRef) {
      videoRef.current = handleVideo(videoRef, display)
    }
  }, [display])

  return (
    <>
      <section className={`content-block personal-info-block ${display && "show"}`}>
        <div onClick={() => setIsFlipped(false)} className={`front-face ${!isFlipped && "front-face-flipped"}`}>
          <div className="content-block-text">
            <h1>Welcome!</h1>
            <p>
              My name is Ion and I'm a programmer specialized in developing modern and efficient web applications. I am
              looking for a friendly team where we can develop together effective solutions for the IT field.
            </p>
            <p className="gradient">
              Tap the card to view more information about me
            </p>
            <video className="personal-info-video" ref={videoRef} width="400" src={detectIOS() ? videoMP4 : video} controlsList="nodownload"
                   autoPlay loop muted playsInline />
            <p className="info-bug"><i>* I hope this is the only bug you'll see in my projects :)</i></p>
          </div>
        </div>
        <div className={`back-face ${isFlipped && "back-face-flipped"}`}>
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