import React, { useContext, useEffect, useState } from 'react';
import SimpleCard from "../reusables/card";
import Button from '@material-ui/core/Button';
import SettingsCard from '../reusables/settings-card';
import { UserContext } from "../../UserContext";
import { AlsDisease } from "../disease/als.disease";
import { COPDDisease } from "../disease/copd.disease";
import { APPLICATION_CONTANTS } from "../../utils/constants";
import { calculateValueFromOperation } from "./ventilaterService";

export default function VentilatorSettings() {
    const [user, setUser] = useContext(UserContext);
    const [diseaseConfig, setDiseaseConfig] = useState(null);
    useEffect(() => {
        if (user.diseaseType === APPLICATION_CONTANTS.DISEASE_TYPE.ALS) {
            console.log("Load Disease Config of " + user.diseaseType);

            setDiseaseConfig(AlsDisease);
        } else if (user.diseaseType === APPLICATION_CONTANTS.DISEASE_TYPE.COPD) {
            console.log("Load Disease Config of " + user.diseaseType);
            setDiseaseConfig(COPDDisease);
        } else {
            console.log("Loading Default Config  ");
            // let ss = COPDDisease.op.o1.operation;
            // console.log(" ss " + ss);

            setDiseaseConfig(AlsDisease);
        }
    }, [user.diseaseType]);

    const handleSubmit = (event) => {
        event.preventDefault();
        Object.keys(diseaseConfig.op).map((keyName, keyIndex) => {
            if (
                diseaseConfig.op[keyName].operation &&
                diseaseConfig.op[keyName].operation.length === 3
            ) {
                diseaseConfig.op[keyName].value = calculateValueFromOperation(
                    diseaseConfig.op[keyName],
                    diseaseConfig
                );
            }
        });
        Object.keys(diseaseConfig.alarms).map((keyName, keyIndex) => {
            if (
                diseaseConfig.alarms[keyName].operation &&
                diseaseConfig.alarms[keyName].operation.length === 3
            ) {
                console.log(
                    keyName + " alarm oper " + diseaseConfig.alarms[keyName].operation
                );

                diseaseConfig.alarms[keyName].value = calculateValueFromOperation(
                    diseaseConfig.alarms[keyName],
                    diseaseConfig
                );
            }
        });
        setDiseaseConfig({ ...diseaseConfig, diseaseConfig });
    };
    const handleChange = (event) => {
        // console.log("someting changed " + event.target.value);
    };

    const handleIpChanges = (evt, newValue, key) => {
        diseaseConfig.ip[key].value = newValue;
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <SimpleCard metric="HEIGHT" symbol="cm" min={175} max={375} changeHandler = {handleIpChanges}/>
                <SimpleCard metric="WEIGHT" symbol="kg" min={10} max={300} changeHandler = {handleIpChanges}/>
            </div>
            <Button style={{ marginLeft: "10px", marginRight: "auto", marginTop: "27px", width: "45%" }} variant="contained" color="secondary">
                Reset
        </Button>
            <Button onClick={handleSubmit} style={{ marginLeft: "20px", marginRight: "auto", marginTop: "27px", width: "45%" }} variant="contained" color="secondary">
                Calculate
        </Button>
            <div style={{ display: "flex", marginTop: "20px", flexDirection: "column" }}>
                <div style={{ "textAlign": "left", "borderLeft": "4px solid #f50057", "fontFamily": "sans-serif", "fontWeight": "700", "fontSize": "30px", "marginLeft": "9px" }}><span style={{ marginLeft: "9px" }}>Settings</span></div>
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", backgroundColor:"#ffc0cb1a", marginTop:"11px", paddingTop:"3px",paddingBottom:"15px" }}>
                    {diseaseConfig && diseaseConfig.op ? Object.keys(diseaseConfig.op).map((keyName, keyIndex) => {
                        const outputProp = diseaseConfig.op[keyName];
                            return (
                                <SettingsCard settingName={outputProp.description} metric={outputProp.metric} value={outputProp.value} />
                            );
                    }) : <div></div>}
                </div>
                <div style={{ "textAlign": "left", "borderLeft": "4px solid #f50057", "marginTop": "44px", "fontFamily": "sans-serif", "fontWeight": "700", "fontSize": "30px", "marginLeft": "9px" }}><span style={{ marginLeft: "9px" }}>Additional settings</span></div>
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", backgroundColor:"#ffc0cb1a", marginTop:"11px", paddingTop:"3px",paddingBottom:"15px" }}>
                {diseaseConfig && diseaseConfig.settings ? Object.keys(diseaseConfig.settings).map((keyName, keyIndex) => {
                        const outputProp = diseaseConfig.settings[keyName];
                        if (outputProp.display) {
                            return (
                                <SettingsCard settingName={outputProp.description} metric={outputProp.metric} value={outputProp.value} />
                            );
                        }
                    }) : <div></div>}
                </div>
            </div>
        </div>
    )
}