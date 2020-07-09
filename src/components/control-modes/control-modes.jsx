import React, { useEffect, useContext } from 'react';
import SimpleList from '../reusables/list'
import Button from '@material-ui/core/Button';
import {Link,   BrowserRouter as Router} from "react-router-dom"
import { UserContext } from "../../UserContext";
import { APPLICATION_CONTANTS } from "../../utils/constants";

export default function ControlModes() {
    const [user, setUser] = useContext(UserContext);
    const handlControlMode = (event) => {
        setUser({
          ...user,
          controlMode: event.target.value,
        });
      };
    const controlModes = [
        { item: "Volume control",val: "volume"}, {item: "Pressure control", val: "pressure"}, {item: "Others", val:"other" }];
    return (
    <div style={{marginTop:"100px", marginLeft:"3%"}}>
        <h1 style={{"marginBottom":"-17px","fontFamily":"sans-serif","fontWeight":"700","fontSize":"25px"}}>VENTILATOR</h1>
        <h1 style={{"marginBottom":"8px","fontFamily":"sans-serif","fontWeight":"700","fontSize":"25px"}}>CONTROL MODE</h1>
        <SimpleList list ={controlModes} onChangeHandler={handlControlMode}/>
        <Button style={{marginTop:"85px",width:"95%"}} variant="contained" color="secondary">
        <Link style={{color:"white"}} to="/settings">Next</Link>
        </Button>
        <Button style={{marginTop:"15px",width:"95%"}} variant="contained" color="secondary">
        <Link style={{color:"white"}} to="/disease-type">Back</Link>
        </Button>
    </div>)
}