import React from "react";
import NavBar from "../components/header/NavBars";
import { routes } from "./routes";
import DiseaseList from "../components/disease-list/DiseaseList";
import ControlModes from "../components/control-modes/ControlModes";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import VentilatorSettings from "../components/ventilator-settings/VentSettings";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <DiseaseList />
          </Route>
          <Route exact path="/disease-type">
            <DiseaseList />
          </Route>
          <Route exact path="/control-modes">
            <ControlModes />
          </Route>
          <Route exact path="/settings">
            <VentilatorSettings />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
