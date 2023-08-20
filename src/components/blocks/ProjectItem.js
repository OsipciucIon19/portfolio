import React, {useEffect, useRef} from 'react';
import meditatio from '../../assets/videos/meditatio.webm'
import meditatioMP4 from '../../assets/videos/meditatio.mp4'
import groceryCart from '../../assets/videos/grocery-cart.webm'
import groceryCartMP4 from '../../assets/videos/grocery-cart.mp4'
import msc from '../../assets/videos/msc.webm'
import mscMP4 from '../../assets/videos/msc.mp4'
import findACoach from '../../assets/videos/find-a-coach.webm'
import findACoachMP4 from '../../assets/videos/find-a-coach.mp4'
import github from "../../assets/images/github.svg";
import {handleVideo} from "../../utils/handleVideo";
import {detectIOS} from "../../utils/detectIOS";
import {useDarkTheme} from "../../context/DarkThemeContext";

function ProjectItem({display, project}) {
  const videoRef = useRef(null);
  const map = [
    {key: "meditatio", path: detectIOS() ? meditatioMP4 : meditatio},
    {key: "grocery-cart", path: detectIOS() ? groceryCartMP4 : groceryCart},
    {key: "msc-everywhere", path: detectIOS() ? mscMP4 : msc},
    {key: "find-a-coach", path: detectIOS() ? findACoachMP4 : findACoach}
  ]
  const {isDarkTheme} = useDarkTheme();

  const findVideoPath = (id) => {
    let path = ""
    map.forEach((el) => {
      if (el.key === id) {
        path = el.path
      }
    })
    return path
  }

  useEffect(() => {
    videoRef.current = handleVideo(videoRef, display)
  }, [display])


  return (
    <section className={`content-block ${display && "show"} ${isDarkTheme && "light-shadow"}`}>
      <h1 className={`project-title ${isDarkTheme && "light-text"}`}>{project.name}</h1>
      <p className={`project-description ${isDarkTheme && "light-text"}`}>{project.description}</p>
      <div className={`project-button ${isDarkTheme && "dark-bg"}`}>
        <a
          className={`project-link ${isDarkTheme && "light-text"}`}
          href={project.gitHubLink}
        >
          View GitHub Code <img className={`${isDarkTheme && "light-svg"}`} width={20} src={github} alt="github"/>
        </a>
      </div>
      <video
        ref={videoRef}
        className="video-project"
        width="400"
        src={findVideoPath(project.id)}
        controlsList="nodownload"
        autoPlay
        loop
        muted
        playsInline
        data-test="test"
      />

    </section>
  );
}

export default ProjectItem;