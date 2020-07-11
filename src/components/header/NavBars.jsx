import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./NavBars.css";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function NavBar() {
  return (
    <div className="nav-bar-flex">
      <AppBar position="static" className="nav-bar-root" position="static">
        <Toolbar>
          <HomeIcon color="secondary">
            <Link to="/disease-type">home</Link>
          </HomeIcon>
          <Typography variant="h6" className="app-title">
            V E N T I<span className="app-sub-title"> C A L</span>
          </Typography>
          <IconButton
            edge="start"
            className="menu-button-icon"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
