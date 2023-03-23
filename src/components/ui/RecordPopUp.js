import React from "react";
import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import classes from './PopUp.module.css'

function RecordPopUp(props) {
  const newPriority = props.info.priority + 1;
  const firebaseConfig = {
    databaseURL: "https://reactstarter-a834d-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig);

  function addRecordHandler() {
    const db = getDatabase();
    set(ref(db, 'patients/' + JSON.parse(localStorage.getItem('CurrentPatient')).pid + '/records/' + props.info.id), {
      title: props.info.title,
      description: props.info.description,
      date: props.info.date,
      priority: newPriority
    });
    const id = JSON.parse(localStorage.getItem('CurrentPatient')).records
    console.log(id)
    props.onCancel();
  }

  return (
    <div className={classes.fullRecord}>
      <h1>{props.info.title}</h1>
      <h3>{props.info.date}</h3>
      <p>{props.info.description}</p>
      <button onClick={addRecordHandler}>Close</button>
    </div>
  );

}

export default RecordPopUp;