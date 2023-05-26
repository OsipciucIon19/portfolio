import React, {useEffect, useRef, useState} from 'react';
import Typed from 'react-typed';
import video from '../../assets/videos/bug.webm'
import {handleVideo} from "../../utils/handleVideo";

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
              <Typed
                strings={["My name is Ion and I'm a programmer\n" +
                "specialized in developing\n" +
                "modern and efficient web\n" +
                "applications. I am looking\n" +
                "for a friendly team where\n" +
                "we can develop together\n" +
                "effective solutions for\n" +
                "the IT field."]}
                typeSpeed={0}
              ></Typed></p>
            <p className="gradient">
              Tap on the card to view more information about me
            </p>
            <video className="personal-info-video" ref={videoRef} width="400" src={video} controlsList="nodownload"
                   autoPlay loop muted/>
            <p className="info-bug"><i>* I hope this is the only bug you'll see in my projects :)</i></p>
          </div>
        </div>
        <div onClick={() => setIsFlipped(true)} className={`back-face ${isFlipped && "back-face-flipped"}`}>
          <div className="content-block-text">
            <h1>Welcome!</h1>
          </div>
        </div>

      </section>
    </>
  );
}

export default PersonalInfo;