import "./Home.css";

import ProjectsView from "../Components/HomeComponents/ProjectsView";
import DocView from "../Components/HomeComponents/DocView";
import FrontView from "../Components/HomeComponents/FrontView";
import TeamView from "../Components/HomeComponents/TeamView";

const Home = () => {
  return (
    <div>
      <FrontView />
      <ProjectsView />
      <DocView />
      <TeamView />
    </div>
  );
};

export default Home;
