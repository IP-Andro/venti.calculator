import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { Home, Book, AccountBox, CloseIcon } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu"
import Collapse from '@material-ui/core/Collapse';
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div" className="nav-full">
        <ListItemText inset>
          <TypoGraphy variant="subtitle1">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Home />
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="subtitle1">
            <Link className="nav-link" to="/calculator">
              Calculator
            </Link>
            <Book />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="subtitle1">
            <Link className="nav-link" to="/support">
              Supported Diseases
            </Link>
            <Book />
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="subtitle1">
            <Link className="nav-link" to="/guidelines">
              Important Guidelines
            </Link>
            <AccountBox />
          </TypoGraphy>
        </ListItemText>
      </ListItem>

      <ListItem className="hamburger">
        <TypoGraphy color="inherit" variant="subtitle1">
          <MenuIcon />
        </TypoGraphy>
        </ListItem>
    </List>
  );
}

export default NavBar;
