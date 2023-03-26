import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import HealthRecords from '../components/healthrecords/HealthRecords';
import Header from '../components/layout/Header';
import classes from './OverviewPage.module.css'
import NewRecord from '../components/healthrecords/NewRecord';
import Tests from '../components/tests/Tests';
import NewTest from '../components/tests/NewTest';
import Prescriptions from '../components/prescriptions/Prescriptions';

function OverviewPage() {

  const [component, setComponent] = useState(0);

  const [currentPatient, setCurrentPatient] = useState(0)

  function handleEvent(event) {
    setCurrentPatient(localStorage.getItem("CurrentPatient"))
  };

  function handleChange() {

  }
  return (
    <div className={classes.container}>
      <Header onChange={handleEvent} />
      <Grid item xs={12} >
        <Box className={classes.bar} >
          <Tabs
            textColor='white'
            onChange={handleChange}
            variant="fullWidth"
            scrollButtons="auto"
          >
            <Tab onClick={() => setComponent(0)} label="Health Records" />
            <Tab onClick={() => setComponent(1)} label="Tests" />
            <Tab onClick={() => setComponent(2)} label="Prescriptions" />
            <Tab onClick={() => setComponent(3)} label="Add Record" />
            <Tab onClick={() => setComponent(4)} label="Add Test" />
          </Tabs>
        </Box>
      </Grid>
      {
        component == 0 && (
          <HealthRecords pName={currentPatient} />
        )
      }
      {
        component == 1 && (
          <Tests pName={currentPatient} />
        )
      }
      {
        component == 2 && (
          <Prescriptions pName={currentPatient} />
        )
      }
      {
        component == 3 && (
          <NewRecord />
        )
      }
      {
        component == 4 && (
          <NewTest />
        )
      }
    </div >
  );
}

export default OverviewPage;