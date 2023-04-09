import React from "react";
import { useRef, useState } from 'react';

import { clipboard } from "../../assets";

import classes from './RecordItem.module.css'
import ListItem from "./ListItem";
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
      <ListItem>
        <li className={classes.item}>
          <Card>
            <div className={classes.image}>
              <img src={clipboard} />
            </div>
            <p className={classes.date}>{props.date}</p>
            <div className={classes.content}>
              <h3 className={classes.title}>{props.title}</h3>
              <p>{props.description}</p>
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
      </ListItem>

    );
  }
}

export default RecordItem;