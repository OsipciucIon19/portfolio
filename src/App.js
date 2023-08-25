import React, {useEffect, useState} from "react";
import {loadDataFromJson} from "./utils/loadDataFromJson"
import NavigationBar from "./components/navigation/NavigationBar";
import Footer from "./components/footer/Footer";
import PersonalInfo from "./components/blocks/PersonalInfo";
import ProjectList from "./components/blocks/ProjectList";
import ProjectItem from "./components/blocks/ProjectItem";
import Background from "./components/blocks/Background";
import arrow from "./assets/images/arrow.svg";
import {useDarkTheme} from "./context/DarkThemeContext";

let FLAG = true;

const App = () => {
  const [data, setData] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("personal-info")
  const [isHintDisplayed, setIsHintDisplayed] = useState(false);
  const { isDarkTheme } = useDarkTheme();

  if (isDarkTheme) {
    document.body.className = "dark-bg"
  } else {
    document.body.className = ""
  }

  useEffect(() => {
    loadDataFromJson('https://portfolio-c1bbd-default-rtdb.europe-west1.firebasedatabase.app/data.json').then(r => setData(r))
  }, [])

  const navigationBarHandler = (name) => {
    setSelectedMenu(name)
    setIsHintDisplayed(false)
  }

  const projectListHandler = (name) => {
    setSelectedMenu(name)
    if (FLAG) {
      setIsHintDisplayed(true)
      FLAG = false
    }
  }

  return (
    <div className={`container ${isDarkTheme && "light-border"}`}>
      <Background/>
      <NavigationBar handleClick={navigationBarHandler}/>
      <div className={`hint gradient ${isHintDisplayed && "hint-visible"}`}>
        <img className="arrow" src={arrow} width="20" alt="arrow"/>
        <span className="hint-text">Click on the photo to return to welcome card</span>
      </div>
      <div className="main-block">
        <ProjectList projects={data?.projects || []} handleClick={projectListHandler}/>
        <PersonalInfo display={selectedMenu === "personal-info"}/>
        {data?.projects.map(project =>
          <ProjectItem key={project.id} display={selectedMenu === project.name} project={project}/>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
