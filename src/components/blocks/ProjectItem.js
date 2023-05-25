import React from 'react';

function ProjectItem({display, project}) {
  return (
    <section className={`content-block ${display && "show"}`}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </section>
  );
}

export default ProjectItem;