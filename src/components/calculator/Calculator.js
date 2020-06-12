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
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiFormControl: {
      // Name of the rule
      root: {
        "flex-direction": "row",
      },
    },
  },
});
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
      diseaseConfig.op[keyName].value = calculateValueFromOperation(
        diseaseConfig.op[keyName],
        diseaseConfig.ip,
        diseaseConfig.op,
        diseaseConfig.settings
      );
    });
    setDiseaseConfig({ ...diseaseConfig, diseaseConfig });
  };
  const handleChange = (event) => {
    // console.log("someting changed " + event.target.value);
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
          </>
        ) : (
          "Disease Config Not Loaded"
        )}
      </div>
    </>
  );
};

export default Calculator;
