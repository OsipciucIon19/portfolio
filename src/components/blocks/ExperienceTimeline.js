import React, { useState } from 'react';
import "../../assets/styles/timeline.css";
import {useDarkTheme} from "../../context/DarkThemeContext";

const EXPERIENCE_ITEMS = ['lyceum', 'university', 'internship', 'pentalog', 'orange']

const ExperienceTimeline = () => {
  const {isDarkTheme} = useDarkTheme();
  const [hoveredItems, setHoveredItems] = useState(EXPERIENCE_ITEMS);
  const [popupStyle, setPopupStyle] = useState({ display: 'none' });
  const [popupText, setPopupText] = useState('');

  const _handleHover = (item) => {
    setHoveredItems([item])
    setPopupStyle(getPopupStyle(item))
    setPopupText(getPopupText(item))
  }

  const _handleUnhover = () => {
    setHoveredItems(EXPERIENCE_ITEMS)
    setPopupStyle({ display: 'none' })
    setPopupText('')
  }

  const getPopupStyle = (item) => {
    switch (item) {
      case 'lyceum':
        return {
          background: '#ffc76f',
          top: '-30%',
          left: '15%',
          color: isDarkTheme ? '#000' : '#fff'
        }
      case 'university': 
        return {
          background: '#014b87',
          top: '-30%',
          left: '42%',
          color: isDarkTheme ? '#000' : '#fff'
        }
      case 'internship':
        return {
          background: '#ed561d',
          top: '-50%',
          left: '57%',
          color: isDarkTheme ? '#000' : '#fff'
        }
      case 'pentalog':
        return {
          background: '#0a7af8',
          top: '-50%',
          left: '61.5%',
          color: isDarkTheme ? '#000' : '#fff'
        }
      case 'orange':
        return {
          background: '#ff7900',
          top: '-50%',
          left: '78%',
          color: isDarkTheme ? '#000' : '#fff'
        }
      default:
        return null
    }
  }

  const getPopupText = (item) => {
    switch (item) {
      case 'lyceum':
        return 'Sep 2016 - Jun 2019'
        case 'university': 
        return 'Sep 2019 - Jun 2023'
      case 'internship':
        return 'Mar - Aug 2021'
      case 'pentalog':
        return 'Aug 2021 - Apr 2023'
      case 'orange':
        return 'Sep 2023 - present'
      default:
        return ''
    } 
  }

  return (
    <div className="experience-wrapper">
      <h2 className={`${isDarkTheme && "light-text"}`}>Experience Timeline</h2>
      <div className="experience">
        <div className="legend">
          <div className="education">
            <div className={`experience-type-title ${isDarkTheme && "light-text"}`}>Education:</div>
            <ul className="education-list">
              <li
                className={`legend-item ${hoveredItems.includes('lyceum') ? '' : 'no-hover'}`}
                onMouseEnter={() => _handleHover('lyceum')}
                onMouseLeave={() => _handleUnhover()}
              >
                <span className="period-legend lyceum"/>
                <div className={`period-legend-text ${isDarkTheme && "light-text"}`}>
                  <div className="period-legend-title">
                    Theoretical Lyceum «Mihail Sadoveanu», Hîncești
                  </div>
                  <div className="period-legend-subtitle">
                    Mathematics and Science Profile
                  </div>
                </div>
              </li>
              <li
                className={`legend-item ${hoveredItems.includes('university') ? '' : 'no-hover'}`}
                onMouseEnter={() => _handleHover('university')}
                onMouseLeave={() => _handleUnhover()}
              >
                <span className="period-legend university"/>
                <div className={`period-legend-text ${isDarkTheme && "light-text"}`}>
                  <div className="period-legend-title">Technical University of Moldova</div>
                  <div className="period-legend-subtitle">Information Technology (French Section)</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="work">
            <div className={`experience-type-title ${isDarkTheme && "light-text"}`}>Work:</div>
            <ul className="work-list">
            <li
                className={`legend-item ${hoveredItems.includes('internship') ? '' : 'no-hover'}`}
                onMouseEnter={() => _handleHover('internship')}
                onMouseLeave={() => _handleUnhover()}
              >
                <span className="period-legend internship"/>
                <div className={`period-legend-text ${isDarkTheme && "light-text"}`}>
                  <div className="period-legend-title">Internship at Pentalog</div>
                  <div className="period-legend-subtitle">Full-Stack Web Developer</div>
                </div>
              </li>
              <li
                className={`legend-item ${hoveredItems.includes('pentalog') ? '' : 'no-hover'}`}
                onMouseEnter={() => _handleHover('pentalog')}
                onMouseLeave={() => _handleUnhover()}
              >
                <span className="period-legend pentalog"/>
                <div className={`period-legend-text ${isDarkTheme && "light-text"}`}>
                  <div className="period-legend-title">Pentalog</div>
                  <div className="period-legend-subtitle">Frontend Web Developer</div>
                </div>
              </li>
              <li
                className={`legend-item ${hoveredItems.includes('orange') ? '' : 'no-hover'}`}
                onMouseEnter={() => _handleHover('orange')}
                onMouseLeave={() => _handleUnhover()}
              >
                <span className="period-legend orange"/>
                <div className={`period-legend-text ${isDarkTheme && "light-text"}`}>
                  <div className="period-legend-title">Orange Slovensko</div>
                  <div className="period-legend-subtitle">DevOps Engineer</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="timeline">
          <span id="popup" style={popupStyle}>{popupText}</span>
          <span
            className={`period lyceum ${hoveredItems.includes('lyceum') ? '' : 'no-hover'}`}
            onMouseEnter={() => _handleHover('lyceum')}
            onMouseLeave={() => _handleUnhover()}
          />
          <span
            className={`period university ${hoveredItems.includes('university') ? '' : 'no-hover'}`}
            onMouseEnter={() => _handleHover('university')}
            onMouseLeave={() => _handleUnhover()}
          />
          <span
            className={`period internship ${hoveredItems.includes('internship') ? '' : 'no-hover'}`}
            onMouseEnter={() => _handleHover('internship')}
            onMouseLeave={() => _handleUnhover()}
          />
          <span
            className={`period pentalog ${hoveredItems.includes('pentalog') ? '' : 'no-hover'}`}
            onMouseEnter={() => _handleHover('pentalog')}
            onMouseLeave={() => _handleUnhover()}  
          />
          <span
            className={`period orange ${hoveredItems.includes('orange') ? '' : 'no-hover'}`}
            onMouseEnter={() => _handleHover('orange')}
            onMouseLeave={() => _handleUnhover()}
          />
          <span id="main-axe">
          <div className="bullet bullet-2016">
            <span className="year">2016</span>
          </div>
          <span className="bullet bullet-2017"/>
          <span className="bullet bullet-2018"/>
          <span className="bullet bullet-2019"/>
          <span className="bullet bullet-2020"/>
          <span className="bullet bullet-2021"/>
          <span className="bullet bullet-2022"/>
          <span className="bullet bullet-2023"/>
          <span className="bullet bullet-2024"/>
          <span className="bullet bullet-2025"/>
        </span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;