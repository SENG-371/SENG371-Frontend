import React from "react";

import TestItem from './TestItem';

const list = {
  listStyle: 'none',
  margin: 0,
  padding: 0
}

function TestList(props) {
  console.log(props.tests)
  // const records = JSON.parse(props.records.pName).records
  const tests = props.tests;
  // const patientsRecords = [];

  // for (const key in records) {
  //   const record = {
  //     id: key,
  //     ...records[key]
  //   };
  //   if (record.id != 0)
  //     patientsRecords.push(record)
  // }

  let sortedPatientsTests = tests.sort(
    (p1, p2) => (p1.priority < p2.priority) ? 1 : (p1.priority > p2.priority) ? -1 : 0);

  return (
    <ul style={list}>
      {sortedPatientsTests.map((test) => (
        <TestItem
          title={test.title}
          description={test.description}
          date={test.date}
          priority={test.priority}
          id={test.id}
        />)
      )}
    </ul>
  );
}

export default TestList;