import * as React from 'react';
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

import '../../index.css';

import TestList from './TestList'


function Tests(props) {
  const pid = JSON.parse(props.pName).pid
  const firebaseConfig = {
    databaseURL: "https://reactstarter-a834d-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTests, setLoadedTests] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://reactstarter-a834d-default-rtdb.firebaseio.com/patients/${pid}/tests.json`
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const tests = [];
      for (const key in data) {
        const test = {
          id: key,
          ...data[key]
        };
        tests.push(test)
      }

      setIsLoading(false)
      setLoadedTests(tests)
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  // console.log(loadedTests)
  return (
    <div>
      <h1>Past Tests</h1>
      {
        props.pName != 0 && (
          <TestList tests={loadedTests} />
        )
      }
    </div>
  );

}

export default Tests;