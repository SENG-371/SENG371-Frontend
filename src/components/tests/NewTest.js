import React from "react";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update, set } from "firebase/database";

import NewTestForm from "../forms/NewTestForm";

function NewTest() {
  const navigate = useNavigate();

  const firebaseConfig = {
    databaseURL: "https://reactstarter-a834d-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig);



  function addTestHandler(testData) {
    const db = getDatabase();
    set(ref(db, 'patients/' + JSON.parse(localStorage.getItem('CurrentPatient')).pid + '/tests/' + testData.tid), {
      title: testData.title,
      description: testData.description,
      date: testData.date,
      priority: 0
    });



    navigate('/overview', { replace: true });
  }

  return (
    <section>
      <h1>Add New Test</h1>
      <NewTestForm onAddTest={addTestHandler} />
    </section>
  );
}

export default NewTest;