import React from "react";

import classes from './RecordList.module.css'
import MeetupItem from './RecordItem';

function RecordList(props) {
  const records = JSON.parse(props.records.pName).records
  console.log(records)
  const patientsRecords = [];

  for (const key in records) {
    const record = {
      id: key,
      ...records[key]
    };
    patientsRecords.push(record)
  }
  return (
    <ul className={classes.list}>
      {patientsRecords.map((record) => (
        <MeetupItem
          title={record.title}
          description={record.description}
          date={record.date}
        />)
      )}
    </ul>
  );
}

export default RecordList;