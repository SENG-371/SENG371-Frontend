import React from "react";

import classes from './RecordList.module.css'
import MeetupItem from './RecordItem';

function RecordList(props) {
  // console.log(props)
  const patient = JSON.parse(props.meetups.pName)
  return (
    <ul className={classes.list}>
      {patient.records.map((record) => (
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