import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/portfolio" render={() => <Home />} />
      </Switch>
    </>
  );
};

export default Routes;
