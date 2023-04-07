import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import classes from './Header.module.css'

export default function Header(props) {

  const navigate = useNavigate();

  const [selectedPatient, setSelectedPatient] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [loadedPatients, setLoadedPatients] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://reactstarter-a834d-default-rtdb.firebaseio.com/patients.json'
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const patients = [];

      for (const key in data) {
        const patient = {
          id: key,
          ...data[key]
        };
        if (patient.id != 0)
          patients.push(patient)
      }

      setIsLoading(false)
      setLoadedPatients(patients)

    });
  }, []);

  function handleChange(event) {
    const patientIndex = event.target.value;

    setSelectedPatient(props.patients[0]);

    props.onChange();
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const handleSubmit = (event) => {
    navigate("/newpatient", { replace: true });
  };

  return (
    <div className={classes.gridContainer}>
      <div className={classes.item1}>
        <h1 className={classes.title}>Welcome {props.pracUsername}</h1>
      </div>

      <div className={classes.item2} className="body">
        <h3>Patient Lookup</h3>

        <label for="patients">Patient:</label>

        <select name="patients" onChange={handleChange}>
          <option disabled selected>Select a Patient</option>
          {props.patients.map((patient, index) => <option value={index}>{patient.username}</option>)}
        </select>

        <div className={classes.actions}>
          <button onClick={handleSubmit}>Add new patient</button>
        </div>
      </div>

      <div className={classes.item3}>
        <h3>Current Patient: {selectedPatient.username}</h3>

        <h3>Risk Level: {selectedPatient.riskLevel}</h3>
      </div>
    </div>
  );
}