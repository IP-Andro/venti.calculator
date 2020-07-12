import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Slider from "@material-ui/core/Slider";
import "./SimpleCard.css";
let newValue;
// const useStyles = makeStyles({
//   pos: {
//     marginBottom: 12,
//   },
// });

const PrettoSlider = withStyles({
  root: {
    color: "#f50057",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function SimpleCard(props) {
  // const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  let [displayValue, setDisplayValue] = useState(Number(props.min));
  const minVal = Number(props.min);
  const maxVal = minVal * 10;
  const changeHandler = props.changeHandler;
  return (
    <Card className="custom-card">
      <div className="custom-card-container">
        <CardContent>
          <Typography className="card-title" color="textSecondary" gutterBottom>
            {props.metric}
          </Typography>
          <Typography className="card-value">
            {displayValue}
            <span className="card-unit-symbol">{props.symbol}</span>
          </Typography>
        </CardContent>
        <div className="slider-container">
          <PrettoSlider
            min={minVal}
            max={maxVal}
            onChange={(e, newVal) => {
              setDisplayValue(newVal);
              changeHandler(e, newVal, props.metric.toLowerCase());
            }}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
        </div>
      </div>
    </Card>
  );
}
