import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/portfolio" render={() => <Home />} />
        <Route exact path="/portfolio/project/:title" render={() => <Project />} />
      </Switch>
    </>
  );
};

export default Routes;
