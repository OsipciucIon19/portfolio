import {useEffect, useState} from "react";
import {loadDataFromJson} from "./utils/loadDataFromJson"
import NavigationBar from "./components/navigation/NavigationBar";
import Footer from "./components/footer/Footer";
import PersonalInfo from "./components/blocks/PersonalInfo";
import ProjectList from "./components/blocks/ProjectList";
import ProjectItem from "./components/blocks/ProjectItem";
import Background from "./components/blocks/Background";

const App = () => {
  const [data, setData] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("personal-info")

  useEffect(() => {
    loadDataFromJson('/data.json').then(r => setData(r))
  }, [])

  const callback = (name) => {
    setSelectedMenu(name)
  }


  return (
    <div className="container">
      <Background />
      <NavigationBar handleClick={callback}/>
      <div className="main-block">
        <ProjectList projects={data?.projects || []} handleClick={callback}/>
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
