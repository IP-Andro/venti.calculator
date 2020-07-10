import React from "react";
import NavBar from "../components/header/NavBar";
import { routes } from "./routes";
import DiseaseList from "../components/disease-list/DiseaseList";
import ControlModes from "../components/control-modes/ControlModes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import VentilatorSettings from "../components/ventilator-settings/VentSettings";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <Switch>
          {/* {routes.map( (route, i) => {
            return (<Route
            key={i}
            path={route.path}
            component={route.component}
          />)
            })} */}
          <Route exact path="/" component={DiseaseList} />
          <Route exact path="/disease-type" component={DiseaseList} />
          <Route exact path="/control-modes" component={ControlModes} />
          <Route exact path="/settings" component={VentilatorSettings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
