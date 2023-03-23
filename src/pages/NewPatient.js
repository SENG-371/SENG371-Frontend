import React from "react";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import NewPatientForm from "../components/forms/NewPatientForm";

function NewPatient() {
  const firebaseConfig = {
    databaseURL: "https://reactstarter-a834d-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig);

  function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  }

  const navigate = useNavigate();

  function addPatientHandler(patientData) {
    const db = getDatabase();
    set(ref(db, 'patients/' + patientData.pid), {
      pid: patientData.pid,
      name: patientData.name,
      age: patientData.age,
      dob: patientData.dob,
      risk: patientData.risk,
      records: patientData.records
    });
    navigate('/overview', { replace: true });
  }

  return (
    <section>
      <h1>Add New Patient</h1>
      <NewPatientForm onAddPatient={addPatientHandler} />
    </section>
  );
}

export default NewPatient;