import React from "react";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import NewRecordForm from "../components/forms/NewRecordForm";

function NewRecord() {
  const navigate = useNavigate();

  const firebaseConfig = {
    databaseURL: "https://reactstarter-a834d-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig);



  function addRecordHandler(recordData) {
    const db = getDatabase();
    set(ref(db, 'patients/' + JSON.parse(localStorage.getItem('CurrentPatient')).pid + '/records/' + recordData.rid), {
      title: recordData.title,
      description: recordData.description,
      date: recordData.date,
      priority: 0
    });
    navigate('/overview', { replace: true });
  }

  return (
    <section>
      <h1>Add New Record</h1>
      <NewRecordForm onAddRecord={addRecordHandler} />
    </section>
  );
}

export default NewRecord;