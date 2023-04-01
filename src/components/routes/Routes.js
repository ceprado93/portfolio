import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Trial from "../pages/Trial";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/portfolio" render={() => <Home />} />
        <Route exact path="/trial" render={() => <Trial />} />
      </Switch>
    </>
  );
};

export default Routes;
