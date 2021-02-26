import './App.css';
import Projects from "./Views/Projects"
import ProjectDetail from "./Views/ProjectDetail"
import { Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/projects/:projectId">
        <ProjectDetail />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
