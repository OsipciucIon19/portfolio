import React from 'react';
import {useDarkTheme} from "../../context/DarkThemeContext";

const ProjectList = ({projects, handleClick}) => {
  const {isDarkTheme} = useDarkTheme();

  const clickHandle = (name) => {
    handleClick(name)
  }

  return (
    <aside className="side-bar">
      <h2
        className={`${isDarkTheme && "light-text"}`}
      >Projects</h2>
      <ul>
        {projects.map(project =>
          <li
            className={`side-bar-item ${isDarkTheme && "light-text"}`}
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