import * as React from 'react';

export default function Patients() {
  const patientList = [{
    pid: 1,
    name: 'Jason',
    age: 74,
    birthday: 'June 13, 1946',
    riskLevel: 2,
    records: [{
      title: 'Test 1',
      description: 'It was short',
      date: '1980'
    }, {
      title: 'Test 2',
      description: 'It was long',
      date: '1980'
    }]
  }, {
    pid: 2,
    name: 'Katie',
    age: 34,
    birthday: 'April 17, 1998',
    riskLevel: 6,
    records: [{
      title: 'Test 39',
      description: 'It was short',
      date: '1980'
    }, {
      title: 'Test 26',
      description: 'It was long',
      date: '1980'
    }]
  }, {
    pid: 3,
    name: 'Albert',
    age: 65,
    birthday: 'May 4, 1916',
    riskLevel: 9,
    records: [{
      title: 'Test 115',
      description: 'It was short',
      date: '1980'
    }]
  }
  ]
  return patientList
}