import React from 'react';
import meditatio from '../../assets/videos/meditatio.webm'
import groceryCart from '../../assets/videos/grocery-cart.webm'
import msc from '../../assets/videos/msc.webm'
import findACoach from '../../assets/videos/find-a-coach.webm'

function ProjectItem({display, project}) {
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


  return (
    <section className={`content-block ${display && "show"}`}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <video
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