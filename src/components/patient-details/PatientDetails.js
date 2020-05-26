import React, { useEffect, useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./PatientDetails.css";
import { UserContext } from "../../UserContext";
import { APPLICATION_CONTANTS } from "../../utils/constants";
function PatientsDetails() {
  const [user, setUser] = useContext(UserContext);

  const handlDiseaseType = (event) => {
    setUser({
      ...user,
      diseaseType: event.target.value,
    });
  };
  const handleControlMode = (event) => {
    setUser({
      ...user,
      controlMode: event.target.value,
    });
  };

  useEffect(() => {
    console.log("render " + user.diseaseType + " " + user.controlMode);
    return () => {
      // console.log("unmounting cleanup for component");
    };
  }, [user]);

  return (
    <>
      <div className="form-control">
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Please select the disease type
          </FormLabel>
          <RadioGroup
            aria-label="diseaseType"
            name="diseaseType"
            value={user.diseaseType}
            onChange={handlDiseaseType}
          >
            <FormControlLabel
              value={APPLICATION_CONTANTS.DISEASE_TYPE.ALS}
              control={<Radio />}
              label="ALS/MND"
            />
            <FormControlLabel
              value={APPLICATION_CONTANTS.DISEASE_TYPE.COPD}
              control={<Radio />}
              label="COPD"
            />
            <FormControlLabel
              value="other"
              disabled
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <div className="form-control">
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Please select the ventilator control mode
          </FormLabel>
          <RadioGroup
            aria-label="controlMode"
            name="controlMode"
            value={user.controlMode}
            onChange={handleControlMode}
          >
            <FormControlLabel
              value="volume"
              control={<Radio />}
              label="Volume Control"
            />
            <FormControlLabel
              value="pressure"
              control={<Radio />}
              label="Pressure Control"
            />
            <FormControlLabel
              value="other"
              disabled
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}
export default PatientsDetails;
