import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Link,   BrowserRouter as Router} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "-15px",
    color: "#1FBADC"
  },
  title: {
    flexGrow: 1,
    fontSize: 18,
    textAlign: "center"
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{"background":"linear-gradient(180deg, #060D18 57.29%, #161E24 100%)","boxShadow":"0px 1px 23px rgba(0, 0, 0, 0.8)"}} position="static">
        <Toolbar>
        <HomeIcon color="secondary">
        <Link to="/disease-type">home</Link>
        </HomeIcon>
          <Typography variant="h6" className={classes.title}>
            V E N T I<span style={{"color":"#7c8690", "fontWeight": "800","fontFamily": "sans-serif"}}> C A L</span>
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
