import React from 'react';
import { useRef } from 'react';

import classes from './NewPatientForm.module.css'
import Card from '../ui/Card'

function NewPatientForm(props) {
  const pidInputRef = useRef();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const dobInputRef = useRef();
  const riskInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredPid = pidInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredDob = dobInputRef.current.value;
    const enteredRisk = riskInputRef.current.value;

    const patientData = {
      pid: enteredPid,
      name: enteredName,
      age: enteredAge,
      dob: enteredDob,
      risk: enteredRisk,
      records: []
    }

    props.onAddPatient(patientData);
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='pid'>Patient ID <i>(Numbers only)</i></label>
        <input
          type="numeric"
          maxlength="10"
          pattern="[0-9]{10}"
          required
          id="pid"
          ref={pidInputRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='name'>Patient Name</label>
        <input
          type="text"
          required
          id="name"
          ref={nameInputRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='age'>Patient Age</label>
        <input
          type="number"
          min="1"
          max="150"
          required
          id="age"
          ref={ageInputRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='dob'>Patient DOB</label>
        <input
          type="date"
          required
          id="dob"
          ref={dobInputRef}></input>
      </div>

      <div className={classes.control}>
        <label htmlFor='risk'>Patient Risk Level <i>(1-99)</i></label>
        <input
          type="number"
          min="1"
          max="99"
          required
          id="risk"
          ref={riskInputRef}></input>
      </div>

      <div className={classes.actions}>
        <button>Add Patient</button>
      </div>
    </form>

  );
}

export default NewPatientForm;