import React, {useEffect, useRef} from 'react';
import meditatio from '../../assets/videos/meditatio.webm'
import groceryCart from '../../assets/videos/grocery-cart.webm'
import msc from '../../assets/videos/msc.webm'
import findACoach from '../../assets/videos/find-a-coach.webm'
import github from "../../assets/images/github.svg";
import video from "../../assets/videos/gandac.webm";

function ProjectItem({display, project}) {
  const videoRef = useRef(null);
  const map = [
    {key: "meditatio", path: meditatio},
    {key: "grocery-cart", path: groceryCart},
    {key: "msc-everywhere", path: msc},
    {key: "find-a-coach", path: findACoach}
  ]

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
      <h1 className="project-title">{project.name}</h1>
      <p className="project-description">{project.description}</p>
      <div className="project-button">
        <a className="project-link" href={project.gitHubLink}>View GitHub Code <img width={20} src={github} alt="github"/></a>
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
      />

    </section>
  );
}

export default ProjectItem;