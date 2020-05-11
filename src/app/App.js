import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "../components/nav-bar/NavBar";
import PatientDetails from "../components/patient-details/PatientDetails";
import Support from "../components/support/Support";
import Guidelines from "../components/guidelines/Guidelines";
import Calculator from "../components/calculator/Calculator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
function App() {
  return (
    <Router>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy color="inherit">Venti Params Calculator</TypoGraphy>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <div className="app-body">
          <Paper elevation={3}>
            <Switch>
              <Route path="/guidelines">
                <Guidelines />
              </Route>
              <Route path="/support">
                <Support />
              </Route>
              <Route path="/calculator">
                <Calculator />
              </Route>
              <Route path="/">
                <PatientDetails />
              </Route>
            </Switch>
          </Paper>
        </div>
      </Container>
    </Router>
  );
}

export default App;
