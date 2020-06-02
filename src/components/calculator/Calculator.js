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

      setDiseaseConfig(COPDDisease);
    }
  }, [user.diseaseType]);

  const handleSubmit = (event) => {
    event.preventDefault();
    Object.keys(diseaseConfig.outputParameters).map((keyName, keyIndex) => {
      diseaseConfig.outputParameters[
        keyName
      ].value = calculateValueFromOperation(
        diseaseConfig.outputParameters[keyName],
        diseaseConfig.inputParameters
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
              alignItems="center"
            >
              <form onSubmit={handleSubmit} onChange={handleChange}>
                <Grid item xs={12}>
                  {Object.keys(diseaseConfig.inputParameters).map(
                    (keyName, keyIndex) => {
                      const inputProp = diseaseConfig.inputParameters[keyName];
                      console.log("inputProp " + keyName + inputProp.type);

                      return (
                        <FormControl key={keyIndex}>
                          <FormLabel htmlFor={inputProp.type}>
                            <div className="lbl">{inputProp.description}</div>
                          </FormLabel>
                          <Input
                            name={inputProp.type}
                            id={inputProp.type}
                            defaultValue={inputProp.value}
                            onChange={(e) => (inputProp.value = e.target.value)}
                            aria-describedby="my-helper-text"
                            variant="filled"
                            required
                          />
                        </FormControl>
                      );
                    }
                  )}
                </Grid>
                {/* <Grid item xs={12}>
                <FormControl>
                  <FormLabel htmlFor="abcd">QQ</FormLabel>
                  <Input
                    name="abcd"
                    id="abcd"
                    placeholder={2123}
                    defaultValue={2123}
                    aria-describedby="my-helper-text"
                    variant="filled"
                  />
                </FormControl>
              </Grid> */}
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
              alignItems="center"
            >
              <div>Following is the output parameters ::</div>

              {Object.keys(diseaseConfig.outputParameters).map(
                (keyName, keyIndex) => {
                  const outputProp = diseaseConfig.outputParameters[keyName];
                  return (
                    <Grid item xs={12} key={keyIndex}>
                      <FormControl>
                        <FormLabel>{outputProp.description}</FormLabel>
                        <FormLabel>{outputProp.operation}</FormLabel>
                        <FormLabel>{outputProp.value}</FormLabel>
                      </FormControl>
                    </Grid>
                  );
                }
              )}
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
