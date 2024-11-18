import React, {useEffect, useState} from "react";
import {loadDataFromJson} from "./utils/loadDataFromJson"
import NavigationBar from "./components/navigation/NavigationBar";
import Footer from "./components/footer/Footer";
import PersonalInfo from "./components/blocks/PersonalInfo";
import ProjectList from "./components/blocks/ProjectList";
import ProjectItem from "./components/blocks/ProjectItem";
import Background from "./components/blocks/Background";
import {useDarkTheme} from "./context/DarkThemeContext";

const App = () => {
  const [data, setData] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("personal-info")
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
  }

  const projectListHandler = (name) => {
    setSelectedMenu(name)
  }

  return (
    <div className={`container`}>
      <Background/>
      <NavigationBar
        activeMenu={selectedMenu}
        handleClick={navigationBarHandler}
      />
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
