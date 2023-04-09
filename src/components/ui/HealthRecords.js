import * as React from 'react';
import { useState, useEffect } from "react";

import '../../index.css';
import RecordList from './RecordList';

function HealthRecords(props) {
  const pid = JSON.parse(props.pName).pid
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://reactstarter-a834d-default-rtdb.firebaseio.com/patients/${pid}/records.json`
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup)
      }

      setIsLoading(false)
      setLoadedMeetups(meetups)
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div >
      <h1>Health Records</h1>
      {
        props.pName != 0 && (
          <RecordList records={props} />
        )
      }
    </div >
  );
}

export default HealthRecords;