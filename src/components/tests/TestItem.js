import React from "react";
import { useRef, useState } from 'react';

import classes from './TestItem.module.css'
import Card from "../layout/Card";
import TestPopUp from "./TestPopUp";
import Backdrop from "../layout/Backdrop";

function TestItem(props) {
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
            <button onClick={handleClick}>View Test</button>
          </div>
          {popUpIsOpen && (
            <TestPopUp onCancel={closeModalHandler} onConfirm={closeModalHandler} info={props} />
          )}
          {popUpIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </Card>
      </li>
    );
  }
}

export default TestItem;