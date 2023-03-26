import React from 'react';
import { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import PopUp from '../healthrecords/PopUp';
import Backdrop from '../layout/Backdrop';
import classes from './NewPatientForm.module.css'
import Card from '../layout/Card'

function NewTestForm(props) {
  const titleInputRef = useRef();
  const tidInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  const [popUpIsOpen, setPopUpIsOpen] = useState(false)

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredTid = tidInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const recordData = {
      title: enteredTitle,
      description: enteredDescription,
      tid: enteredTid,
      date: enteredDate,
      // riskUpdate: riskValue
    }

    props.onAddTest(recordData);
  }

  function handleClick() {
    setPopUpIsOpen(true)
  }

  function closeModalHandler() {
    setPopUpIsOpen(false);
    window.location.reload(true);
  }


  return (
    <>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>Title</label>
            <input type="text" required id="title" ref={titleInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='description'>Description</label>
            <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor='tid'>Test ID</label>
            <input type="text" required id="tid" ref={tidInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='date'>Date</label>
            <input type="text" required id="date" ref={dateInputRef}></input>
          </div>
          {/* <Slider aria-label="Volume" value={riskValue} onChange={handleChange} /> */}
          <div className={classes.actions}>
            <button onClick={handleClick}>Add Test</button>
          </div>

        </form>
      </Card>
      {popUpIsOpen && (
        <PopUp onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {popUpIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </>

  );
}

export default NewTestForm;