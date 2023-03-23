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
            <label htmlFor='rid'>Record ID</label>
            <input type="text" required id="rid" ref={ridInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='date'>Date</label>
            <input type="text" required id="date" ref={dateInputRef}></input>
          </div>
          <div className={classes.actions}>
            <button onClick={handleClick}>Add Record</button>
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

export default NewRecordForm;