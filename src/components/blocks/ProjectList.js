import React from 'react';

const ProjectList = ({projects, handleClick}) => {

  const clickHandle = (name) => {
    handleClick(name)
  }

  return (
    <aside className="side-bar">
      <h2>Projects</h2>
      <ul>
        {projects.map(project =>
          <li
            className="side-bar-item"
            key={project.id}
            onClick={() => clickHandle(project.name)}
          >
            {project.name}
          </li>
        )}
      </ul>
    </aside>
  );
}

export default ProjectList;