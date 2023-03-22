import React from "react";

import classes from './RecordItem.module.css'
import Card from "./Card";

function RecordItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>{props.date}</p>
        </div>
        <div className={classes.actions}>
          <button>To favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default RecordItem;