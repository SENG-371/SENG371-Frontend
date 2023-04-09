import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import classes from './Header.module.css'

export default function Header(props) {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [risk, setRisk] = useState('');

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

  console.log(loadedPatients)

  function handleChange(event) {
    setName(event.target.value)
    if (loadedPatients.find(({ name }) => event.target.value === name)) {
      localStorage.setItem('CurrentPatient', JSON.stringify(loadedPatients.find(({ name }) => event.target.value === name)));

      setRisk(JSON.parse(localStorage.getItem("CurrentPatient")).risk);
    }

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
        <h1 className={classes.title}>Welcome Healthcare practitioner</h1>
      </div>
      <div className={classes.item2}>
        <h1>Patient Lookup</h1>
        <select className={classes.selection} onChange={handleChange}>
          <option className={classes.options} value={name}> -- Select a Patient -- </option>
          {loadedPatients.map((patient) => <option value={patient.name}>{patient.name}</option>)}
        </select>

        <div className={classes.actions}>
          <button onClick={handleSubmit}>Add new patient</button>
        </div>
      </div>
      <div className={classes.item3}>
        <h1>Current Patient: {name}</h1>
        <h1>Risk Level: {risk}</h1>
      </div>
    </div>
  );
}