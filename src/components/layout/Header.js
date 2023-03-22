import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import classes from './Header.module.css'
import patientData from '../../assets/patients.json'


export default function Header(props) {

  const [name, setName] = useState('');
  const [risk, setRisk] = useState('');

  function handleChange(event) {
    setName(event.target.value)
    if (patientData.find(({ name }) => event.target.value === name)) {
      localStorage.setItem('CurrentPatient', JSON.stringify(patientData.find(({ name }) => event.target.value === name)));
      setRisk(JSON.parse(localStorage.getItem("CurrentPatient")).riskLevel);
    }
    props.onChange();
  };


  return (
    <div className={classes.gridContainer}>
      <div className={classes.item1}>
        <h1 className={classes.title}>Welcome Healthcare practitioner</h1>
      </div>
      <div className={classes.item2}>
        <h1>Patient Lookup</h1>
        <Box sx={{ minWidth: 20 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Name"
              onChange={handleChange}
            >
              <MenuItem value={'Jason'}>Jason</MenuItem>
              <MenuItem value={'Albert'}>Albert</MenuItem>
              <MenuItem value={'Katie'}>Katie</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={classes.item3}>
        <h1>Risk Level {risk}</h1>
      </div>
    </div>
  );
}