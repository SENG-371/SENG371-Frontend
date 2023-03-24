import React from 'react';
import { useRef } from 'react';

import classes from './NewPatientForm.module.css'
import Card from '../layout/Card';

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
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='pid'>Patient ID</label>
          <input type="text" required id="pid" ref={pidInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Patient Name</label>
          <input type="text" required id="name" ref={nameInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='age'>Patient Age</label>
          <input type="text" required id="age" ref={ageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='dob'>Patient DOB</label>
          <input type="text" required id="dob" ref={dobInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='risk'>Patient Risk Level</label>
          <input type="text" required id="risk" ref={riskInputRef}></input>
        </div>
        <div className={classes.actions}>
          <button>Add Patient</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPatientForm;