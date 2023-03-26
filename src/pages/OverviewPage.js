import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import HealthRecords from '../components/ui/HealthRecords';
import Header from '../components/layout/Header';
import classes from './OverviewPage.module.css'
import NewRecord from './NewRecord';

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
            <Tab onClick={() => setComponent(3)} label="Other Patient Data" />
            <Tab onClick={() => setComponent(4)} label="Add Record" />
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
          <h1>Tests</h1>
        )
      }
      {
        component == 2 && (
          <h1>Prescriptions</h1>
        )
      }
      {
        component == 3 && (
          <h1>Item 3</h1>
        )
      }
      {
        component == 4 && (
          <NewRecord />
        )
      }
    </div >
  );
}

export default OverviewPage;