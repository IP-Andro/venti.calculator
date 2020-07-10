import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const PinkRadio = withStyles({
  root: {
    color: pink[400],
    "&$checked": {
      color: pink[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function SimpleList(props) {
  const [selectedValue, setSelectedValue] = React.useState("ALS");
  const classes = useStyles();
  const onChangeHandler = props.onChangeHandler;
  const list = props.list;
  return (
    <List
      className={classes.root}
      style={{
        backgroundColor: "#253038",
        border: "1px solid #313538",
        boxSizing: "border-box",
        boxShadow: "0px 11px 55px #000000",
      }}
    >
      {list.map((item, keyIndex) => {
        return (
          <div key={keyIndex}>
            <ListItem
              alignItems="flex-start"
              style={keyIndex % 2 !== 0 ? { background: "#1D262C" } : {}}
            >
              <FormControlLabel
                value={item.val}
                select="true"
                checked={false}
                color="#F41062"
                control={
                  <PinkRadio
                    checked={selectedValue === item.val}
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                      onChangeHandler(e);
                    }}
                  />
                }
                // disableRipple
              />
              <ListItemText
                primary={item.item}
                secondary={
                  <>
                    <span style={{ color: "white", fontSize: "14px" }}>
                      {item.desc !== undefined ? item.desc : ""}
                    </span>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
    </List>
  );
}
