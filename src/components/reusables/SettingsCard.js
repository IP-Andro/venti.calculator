import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles({
  root: {
    marginTop: "12px",
    background: "linear-gradient(#050B12,#010202)",
    boxShadow: "0px 10px 57px #07131f",
    width: "45%",
    height: "162px",
    borderLeft: "3px solid #1FBADC",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#fff",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "#05A8DC",
    textAlign: "left",
    marginTop: "-11px",
  },
  valueSelected: {
    fontSize: 48,
    color: "#fff",
    textAlign: "left",
    marginTop: "8px",
  },
  symbol: { fontSize: "14px", fontWeight: "normal", fontStyle: "normal" },
  pos: {
    marginBottom: 12,
  },
});

export default function SettingsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div style={{ marginTop: "5px" }}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.settingName}
          </Typography>
          <Typography className={classes.valueSelected}>
            {props.value}
          </Typography>
          <Typography className={classes.symbol}>{props.metric}</Typography>
        </CardContent>
      </div>
    </Card>
  );
}
