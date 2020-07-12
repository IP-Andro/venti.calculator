import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SimpleCard from "../reusables/SimpleCard";
import Button from "@material-ui/core/Button";
import SettingsCard from "../reusables/SettingsCard";
import { UserContext } from "../../UserContext";
import { AlsDisease } from "../disease/als.disease";
import { COPDDisease } from "../disease/copd.disease";
import { APPLICATION_CONTANTS } from "../../utils/constants";
import { calculateValueFromOperation } from "./ventilaterService";
import "./VentSettings.css";
export default function VentilatorSettings() {
  const [user, setUser] = useContext(UserContext);
  const [diseaseConfig, setDiseaseConfig] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
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
    setShowSettings(true);
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
  const handleReset = (event) => {
    event.preventDefault();
    setShowSettings(false);
  };
  const handleChange = (event) => {
    // console.log("someting changed " + event.target.value);
  };

  const handleIpChanges = (evt, newValue, key) => {
    diseaseConfig.ip[key].value = newValue;
  };

  return (
    <div className="vent-container">
      <div className="input-settings-container">
        {diseaseConfig &&
          Object.keys(diseaseConfig.ip).map((keyName, keyIndex) => {
            const inputProp = diseaseConfig.ip[keyName];
            return (
              <SimpleCard
                key={keyIndex}
                metric={inputProp.property}
                symbol={inputProp.unit}
                min={inputProp.value}
                changeHandler={handleIpChanges}
              />
            );
          })}
      </div>
      <Button
        onClick={handleReset}
        className="reset-button"
        variant="contained"
        color="secondary"
      >
        Reset
      </Button>
      <Button
        onClick={handleSubmit}
        className="submit-button"
        variant="contained"
        color="secondary"
      >
        Calculate
      </Button>
      <div className="setting-container">
        {showSettings ? (
          <>
            <div className="settings-heading">
              <span style={{ marginLeft: "9px" }}>Settings</span>
            </div>
            <div className="settings-section">
              {diseaseConfig && diseaseConfig.op ? (
                Object.keys(diseaseConfig.op).map((keyName, keyIndex) => {
                  const outputProp = diseaseConfig.op[keyName];
                  return (
                    <SettingsCard
                      key={keyIndex}
                      settingName={outputProp.description}
                      metric={outputProp.metric}
                      value={outputProp.value}
                    />
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
            <div className="additional-settings-heading">
              <span style={{ marginLeft: "9px" }}>Additional settings</span>
            </div>
            <div className="additional-settings-section">
              {diseaseConfig && diseaseConfig.settings ? (
                Object.keys(diseaseConfig.settings).map((keyName, keyIndex) => {
                  const outputProp = diseaseConfig.settings[keyName];
                  if (outputProp.display) {
                    return (
                      <SettingsCard
                        key={keyIndex}
                        settingName={outputProp.description}
                        metric={outputProp.metric}
                        value={outputProp.value}
                      />
                    );
                  }
                })
              ) : (
                <div></div>
              )}
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
