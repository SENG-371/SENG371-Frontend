import React from "react";
import classes from './ListItem.module.css'

function ListItem(props) {
  return (
    <div className={classes.item}>
      {props.children}
    </div>
  );
}

export default ListItem;