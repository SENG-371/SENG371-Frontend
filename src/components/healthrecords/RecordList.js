import React from "react";

import classes from './RecordList.module.css'
import RecordItem from './RecordItem';

function RecordList(props) {
  const records = JSON.parse(props.records.pName).records
  const patientsRecords = [];

  for (const key in records) {
    const record = {
      id: key,
      ...records[key]
    };
    if (record.id != 0)
      patientsRecords.push(record)
  }

  let sortedPatientsRecords = patientsRecords.sort(
    (p1, p2) => (p1.priority < p2.priority) ? 1 : (p1.priority > p2.priority) ? -1 : 0);

  return (
    <ul className={classes.list}>
      {sortedPatientsRecords.map((record) => (
        <RecordItem
          title={record.title}
          description={record.description}
          date={record.date}
          priority={record.priority}
          id={record.id}
        />)
      )}
    </ul>
  );
}

export default RecordList;