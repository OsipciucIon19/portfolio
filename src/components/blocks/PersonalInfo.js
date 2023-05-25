import React, {useEffect, useRef} from 'react';
import Typed from 'react-typed';
import video from '../../assets/videos/gandac.webm'

const PersonalInfo = ({display}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (display) {
      videoRef.current.currentTime = 30;
      if (!(video.currentTime > 0 && !video.paused && !video.ended
        && video.readyState > video.HAVE_CURRENT_DATA)) {
        videoRef.current.play()
      }
    } else {
      setTimeout(() => {
        videoRef.current.pause()
      }, 100)
    }
  }, [display])

  return (
    <section className={`content-block ${display && "show"}`}>
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
      </div>
      <video ref={videoRef} width="400" src={video} controlsList="nodownload" autoPlay loop muted />
    </section>
  );
}

export default PersonalInfo;