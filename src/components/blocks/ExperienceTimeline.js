import React from 'react';
import "../../assets/styles/timeline.css";

const ExperienceTimeline = () => {
  return (
    <div className="experience-wrapper">
      <h3>Experience Timeline</h3>
      <div className="experience">
        <div className="legend">
          <div className="education">
            <h4>Education:</h4>
            <ul className="education-list">
              <li className="legend-item">
                <span className="period-legend lyceum"/>
                <div className="period-legend-text">
                  <div className="period-legend-title">
                    Theoretical Lyceum «Mihail Sadoveanu», Hîncești
                  </div>
                  <div className="period-legend-subtitle">
                    Mathematics and Science Profile
                  </div>
                </div>
              </li>
              <li className="legend-item">
                <span className="period-legend university"/>
                <div className="period-legend-text">
                  <div className="period-legend-title">Technical University of Moldova</div>
                  <div className="period-legend-subtitle">Information Technology (French Section)</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="work">
            <h4>Work:</h4>
            <ul className="work-list">
              <li className="legend-item">
                <span className="period-legend internship"/>
                <div className="period-legend-text">
                  <div className="period-legend-title">Internship at Pentalog</div>
                  <div className="period-legend-subtitle">Full-Stack Web Developer</div>
                </div>
              </li>
              <li className="legend-item">
                <span className="period-legend pentalog"/>
                <div className="period-legend-text">
                  <div className="period-legend-title">Pentalog</div>
                  <div className="period-legend-subtitle">Front-end Web Developer</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="timeline">
          <span className="period lyceum"/>
          <span className="period university"/>
          <span className="period internship"/>
          <span className="period pentalog"/>
          <span id="main-axe">
          <span className="bullet bullet-2016"/>
          <span className="year gradient year-2016">2016 </span>
          <span className="bullet bullet-2017"/>
          <span className="bullet bullet-2018"/>
          <span className="bullet bullet-2019"/>
          <span className="year gradient year-2019">2019</span>
          <span className="bullet bullet-2020"/>
          <span className="year gradient year-2020">2020</span>
          <span className="bullet bullet-2021"/>
          <span className="bullet bullet-2022"/>
          <span className="bullet bullet-2023"/>
          <span className="year gradient year-2023">2023</span>
          <span className="bullet bullet-2024"/>
        </span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;