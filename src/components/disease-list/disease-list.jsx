import React, { useEffect, useContext } from 'react';
import SimpleList from './../reusables/list'
import Button from '@material-ui/core/Button';
import {Link,   BrowserRouter as Router} from "react-router-dom"
import { UserContext } from "../../UserContext";
import { APPLICATION_CONTANTS } from "../../utils/constants";

export default function DiseaseList() {
    const [user, setUser] = useContext(UserContext);
    const handlDiseaseType = (event) => {
        setUser({
          ...user,
          diseaseType: event.target.value,
        });
      };

    const diseaseList = [
        { 
            item: "ALS / MND", 
            desc: "Amyotrophic lateral sclerosis / Motor neurone disease",
            val: APPLICATION_CONTANTS.DISEASE_TYPE.ALS 
        }, 
        { 
            item: "COPD",
            desc: "Chronic obstructive pulmonary disease",
            val: APPLICATION_CONTANTS.DISEASE_TYPE.COPD
        }, 
        { item: "Others", val: "other" }
    ];
    return (
    <div style={{marginTop:"100px", marginLeft:"3%"}}>
        <h1 style={{"marginBottom":"8px","fontFamily":"sans-serif","fontWeight":"700","fontSize":"25px"}}>DISEASE TYPE</h1>
        <SimpleList list={diseaseList} onChangeHandler={handlDiseaseType}/>
        <Button style={{marginTop:"50px",width:"95%"}} variant="contained" color="secondary">
            <Link style={{color:"white"}} to="/control-modes">Next</Link>
        </Button>
    </div>)
}