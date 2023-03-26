import React from "react";
import { useRef, useState } from 'react';

import classes from './RecordItem.module.css'
import Card from "./Card";
import RecordPopUp from "./RecordPopUp";
import Backdrop from "./Backdrop";

function RecordItem(props) {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false)

  function handleClick() {
    setPopUpIsOpen(true)
  }

  function closeModalHandler() {
    setPopUpIsOpen(false);
  }

  if (props.title) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.date}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={handleClick}>View Record</button>
          </div>
          {popUpIsOpen && (
            <RecordPopUp onCancel={closeModalHandler} onConfirm={closeModalHandler} info={props} />
          )}
          {popUpIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </Card>
      </li>
    );
  }
}

export default RecordItem;