import React, { useEffect, useContext } from "react";
import SimpleList from "../reusables/list";
import Button from "@material-ui/core/Button";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { APPLICATION_CONTANTS } from "../../utils/constants";
import "./ControlModes.css";
export default function ControlModes() {
  const [user, setUser] = useContext(UserContext);
  const handlControlMode = (event) => {
    setUser({
      ...user,
      controlMode: event.target.value,
    });
  };
  const controlModes = [
    { item: "Volume control", val: "volume" },
    { item: "Pressure control", val: "pressure" },
    { item: "Others", val: "other" },
  ];
  return (
    <div className="control-mode-container">
      <h1 className="control-mode-heading">VENTILATOR</h1>
      <h1 className="control-mode-sub-heading">CONTROL MODE</h1>
      <SimpleList list={controlModes} onChangeHandler={handlControlMode} />
      <Button className="nav-button-next" variant="contained" color="secondary">
        <Link className="nav-button-link" to="/settings">
          Next
        </Link>
      </Button>
      <Button className="nav-button-back" variant="contained" color="secondary">
        <Link className="nav-button-link" to="/disease-type">
          Back
        </Link>
      </Button>
    </div>
  );
}
