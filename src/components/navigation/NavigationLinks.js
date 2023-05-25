import React, {useState} from 'react';

function NavigationLinks({links}) {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <ul className="navigation-links">
      {links.map((link, index) =>
        <li
          key={link.name}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <a
            href={link.to}
            target="_blank"
          >
            <img
              className={`link-image ${hoveredLink === index && "hovered"}`}
              src={hoveredLink === index ? link.hoverIcon : link.icon}
              width="30"
              alt={link.name}
            />
          </a>
        </li>
      )}
    </ul>
  );
}

export default NavigationLinks;