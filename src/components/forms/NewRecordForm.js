import React from 'react';
import { useRef, useState } from 'react';

import PopUp from '../ui/PopUp';
import Backdrop from '../ui/Backdrop';
import classes from './NewPatientForm.module.css'
import Card from '../ui/Card'

function NewRecordForm(props) {
  const titleInputRef = useRef();
  const ridInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  const [popUpIsOpen, setPopUpIsOpen] = useState(false)

  function submitHandler(event) {
    event.preventDefault();
    setPopUpIsOpen(true);
  }

  function closeModalHandler() {
    setPopUpIsOpen(false);
  }

  function confirmModalHandler() {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredRid = ridInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const recordData = {
      title: enteredTitle,
      description: enteredDescription,
      rid: enteredRid,
      date: enteredDate
    }

    props.onAddRecord(recordData);
    setPopUpIsOpen(false);
    // window.location.reload(true);
  }

  return (
    <>

      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title <i>(Letters only. Max length 20 characters)</i></label>
          <input
            type="text"
            required
            maxlength="20"
            pattern="[A-Z a-z]*"
            id="title"
            ref={titleInputRef}
          >
          </input>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='rid'>Record ID <i>(Numbers only. Must be 10 digits)</i></label>
          <input
            type="numeric"
            required
            id="rid"
            maxlength="10"
            pattern="[0-9]{10}"
            ref={ridInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>Date</label>
          <input
            type="date"
            required
            id="date"
            ref={dateInputRef}></input>
        </div>
        <div className={classes.actions}>
          <input className={classes.btn} type='submit'></input>
        </div>
      </form>

      {popUpIsOpen && (
        <PopUp onCancel={closeModalHandler} onConfirm={confirmModalHandler} />
      )}
      {popUpIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </>

  );
}

export default NewRecordForm;