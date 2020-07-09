import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Slider from '@material-ui/core/Slider';
let newValue;
const useStyles = makeStyles({
  root: {
    minWidth: 152,
    marginTop: "60px",
    backgroundColor: "#1D262C",
    boxShadow: "0px 11px 55px #000000",
    width: "142px",
    height: "126px",
    border: "1px solid #313538",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#fff"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    color: "#fff",
    textAlign:"center"
  },
  valueSelected: {
      fontSize: 46,
      color:"#fff",
      textAlign:"center",
      marginTop: "-11px"
  },
  pos: {
    marginBottom: 12,
  },
});

const PrettoSlider = withStyles({
  root: {
    color: '#f50057',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
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
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const changeHandler = props.changeHandler;
  return (
    <Card className={classes.root}>
    <div style={{marginTop:"-5px"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.metric}
        </Typography>
        <Typography className={classes.valueSelected}>
          175<span style={{fontSize:"14px",fontWeight:"normal",fontStyle:"normal"}}>{props.symbol}</span>
        </Typography>
      </CardContent>
      <div style={{width:"90px",marginTop:"-25px", height: "80px", marginLeft:"auto", marginRight: "auto"}}>
      <PrettoSlider min={props.min} max={props.max} onChange={(e, newVal)=>
        {newValue = newVal;
          changeHandler(e, newVal,props.metric.toLowerCase());
        }} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
      
      </div></div>
    </Card>
  );
}
