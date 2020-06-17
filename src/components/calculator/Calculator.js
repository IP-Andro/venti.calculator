import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { AlsDisease } from "../disease/als.disease";
import { COPDDisease } from "../disease/copd.disease";
import { APPLICATION_CONTANTS } from "../../utils/constants";
import FormControl from "@material-ui/core/FormControl";
import { FormLabel, Input, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { calculateValueFromOperation } from "./ventilaterService";
import "./Calculator.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Calculator = () => {
  const classes = useStyles();
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

      setDiseaseConfig(COPDDisease);
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

  return (
    <>
      <div className="flex-container">
        <p>
          This page directly opens the pre-configured calculator Following are
          the selected details of Patients
        </p>
        <ul>
          {user.diseaseType ? (
            <li>Disease Type - {user.diseaseType}</li>
          ) : (
            <li>Using Default Disease Config</li>
          )}
          {user.controlMode ? (
            <li>Venti Operation Mode - {user.controlMode}</li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="flex-container">
        {diseaseConfig && diseaseConfig.settings ? (
          <>
            <Grid
              container
              spacing={1}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <form onSubmit={handleSubmit} onChange={handleChange}>
                {Object.keys(diseaseConfig.ip).map((keyName, keyIndex) => {
                  const inputProp = diseaseConfig.ip[keyName];

                  return (
                    <Grid item xs={12} key={keyIndex}>
                      <FormControl className="cust" fullWidth={false}>
                        <FormLabel
                          className="label-test"
                          htmlFor={inputProp.type}
                        >
                          {inputProp.description}
                        </FormLabel>
                        <Input
                          name={keyName}
                          id={keyName}
                          defaultValue={inputProp.value}
                          onChange={(e) => (inputProp.value = e.target.value)}
                          aria-describedby="my-helper-text"
                          variant="filled"
                          required
                        />
                      </FormControl>
                    </Grid>
                  );
                })}
                <Grid item xs={12}>
                  <Button
                    size="small"
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    type="submit"
                    startIcon={<SaveIcon />}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    type="reset"
                    className={classes.button}
                    color="primary"
                  >
                    Reset
                  </Button>
                </Grid>
              </form>
            </Grid>
            <Grid
              container
              spacing={1}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <FormControl className="cust">
                  <FormLabel>
                    <span className="coloumn-name">Description</span>
                  </FormLabel>
                  <FormLabel className="coloumn-name">
                    <span className="coloumn-name">Formula</span>
                  </FormLabel>
                  <FormLabel className="coloumn-name">
                    <span className="coloumn-name">Calculated Value</span>
                  </FormLabel>
                </FormControl>
              </Grid>

              {Object.keys(diseaseConfig.op).map((keyName, keyIndex) => {
                const outputProp = diseaseConfig.op[keyName];
                return (
                  <Grid item xs={12} key={keyIndex}>
                    <FormControl className="cust">
                      <FormLabel>{outputProp.description}</FormLabel>
                      <FormLabel>{outputProp.operation}</FormLabel>
                      <FormLabel>{outputProp.value}</FormLabel>
                    </FormControl>
                  </Grid>
                );
              })}
            </Grid>
            <h3>Additional Settings </h3>
            <Grid
              container
              spacing={1}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <FormControl className="cust">
                  <FormLabel>
                    <span className="coloumn-name">Setting Name</span>
                  </FormLabel>
                  <FormLabel className="coloumn-name">
                    <span className="coloumn-name">Setting Value</span>
                  </FormLabel>
                </FormControl>
              </Grid>

              {Object.keys(diseaseConfig.settings).map((keyName, keyIndex) => {
                const outputProp = diseaseConfig.settings[keyName];
                if (outputProp.display) {
                  return (
                    <Grid item xs={12} key={keyIndex}>
                      <FormControl className="cust">
                        <FormLabel>{outputProp.description}</FormLabel>
                        <FormLabel>{outputProp.value}</FormLabel>
                      </FormControl>
                    </Grid>
                  );
                }
              })}
            </Grid>
            <h3>Alarm Settings </h3>
            <Grid
              container
              spacing={1}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <FormControl className="cust">
                  <FormLabel>
                    <span className="coloumn-name">Alarm Name</span>
                  </FormLabel>
                  <FormLabel className="coloumn-name">
                    <span className="coloumn-name">Alarm Value</span>
                  </FormLabel>
                </FormControl>
              </Grid>

              {Object.keys(diseaseConfig.alarms).map((keyName, keyIndex) => {
                const outputProp = diseaseConfig.alarms[keyName];
                return (
                  <Grid item xs={12} key={keyIndex}>
                    <FormControl className="cust">
                      <FormLabel>{outputProp.description}</FormLabel>
                      <FormLabel>{outputProp.value}</FormLabel>
                    </FormControl>
                  </Grid>
                );
              })}
            </Grid>
          </>
        ) : (
          "Disease Config Not Loaded"
        )}
      </div>
    </>
  );
};

export default Calculator;
