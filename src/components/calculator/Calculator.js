import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { AlsDisease } from "../disease/als.disease";
import { COPDDisease } from "../disease/copd.disease";
import { APPLICATION_CONTANTS } from "../../utils/constants";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel, Input } from "@material-ui/core";

const Calculator = () => {
  const [user, setUser] = useContext(UserContext);
  const [diseaseConfig, setDiseaseConfig] = useState(null);
  useEffect(() => {
    if (user.diseaseType === APPLICATION_CONTANTS.DISEASE_TYPE.ALS) {
      console.log("Load Disease Config of " + user.diseaseType);

      setDiseaseConfig(AlsDisease);
    } else if (user.diseaseType === APPLICATION_CONTANTS.DISEASE_TYPE.COPD) {
      console.log("Load Disease Config of " + user.diseaseType);
      setDiseaseConfig(COPDDisease);
    }
  }, [user.diseaseType, diseaseConfig]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    console.log("someting changed " + event.target.className);
  };
  return (
    <>
      <div>
        <p>
          This page directly opens the pre-configured calculator Following are
          the selected details of Patients
        </p>
        <ul>
          {user.diseaseType ? <li>Disease Type - {user.diseaseType}</li> : ""}
          {user.controlMode ? (
            <li>Venti Operation Mode - {user.controlMode}</li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div>
        {diseaseConfig && diseaseConfig.settings ? (
          <FormControl onSubmit={handleSubmit} onChange={handleChange}>
            {Object.keys(diseaseConfig.inputParameters).map(
              (keyName, keyIndex) => {
                const inputProp = diseaseConfig.inputParameters[keyName];
                console.log("inputProp " + keyName + inputProp.type);

                return (
                  <div className="row" key={keyIndex}>
                    <InputLabel htmlFor={inputProp.type}>
                      {inputProp.description}
                    </InputLabel>
                    <Input
                      name={inputProp.type}
                      id={inputProp.type}
                      value={inputProp.value}
                      aria-describedby="my-helper-text"
                      variant="filled"
                    />
                    <br />
                  </div>
                );
              }
            )}
          </FormControl>
        ) : (
          "Disease Config Not Loaded"
        )}
      </div>
    </>
  );
};

export default Calculator;
