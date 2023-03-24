import React from "react";
import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import classes from './PopUp.module.css'

function TestPopUp(props) {
  const newPriority = props.info.priority + 1;
  const firebaseConfig = {
    databaseURL: "https://reactstarter-a834d-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig);

  function addTestHandler() {
    const db = getDatabase();
    set(ref(db, 'patients/' + JSON.parse(localStorage.getItem('CurrentPatient')).pid + '/tests/' + props.info.id), {
      title: props.info.title,
      description: props.info.description,
      date: props.info.date,
      priority: newPriority
    });
    // const id = JSON.parse(localStorage.getItem('CurrentPatient')).tests
    // console.log(id)
    // if (id !== 0)
    //   console.log(id.find(({ id }) => props.info.id === id))
    props.onCancel();
  }

  return (
    <div className={classes.fullRecord}>
      <h1>{props.info.title}</h1>
      <h3>{props.info.date}</h3>
      <p>{props.info.description}</p>
      <button onClick={addTestHandler}>Close</button>
    </div>
  );

}

export default TestPopUp;