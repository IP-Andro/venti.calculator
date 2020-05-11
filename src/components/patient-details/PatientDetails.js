import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./PatientDetails.css";

function PatientsDetails() {
  const [diseaseType, setDiseaseType] = React.useState("ALS");
  const [controlMode, setControlMode] = React.useState("pressure");

  const handlDiseaseType = (event) => {
    setDiseaseType(event.target.value);
  };
  const handleControlMode = (event) => {
    setControlMode(event.target.value);
  };
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
            value={diseaseType}
            onChange={handlDiseaseType}
          >
            <FormControlLabel value="ALS" control={<Radio />} label="ALS/MND" />
            <FormControlLabel value="COVID" control={<Radio />} label="COVID" />
            <FormControlLabel
              value="other"
              disabled
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="form-control">
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Please select the ventilator control mode
          </FormLabel>
          <RadioGroup
            aria-label="controlMode"
            name="controlMode"
            value={controlMode}
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
