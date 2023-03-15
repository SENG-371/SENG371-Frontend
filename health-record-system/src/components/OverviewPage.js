import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { style } from '@mui/system';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../index.css';
import HealthRecords from './overviewpage/HealthRecords';
import Header from './overviewpage/Header';
import axios from "axios";
import Patients from '../assets/Patients';

export default function OverviewPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [component, setComponent] = useState(0);


  let currentPatient = ""
  if (localStorage.getItem("CurrentPatient")) {
    currentPatient = (localStorage.getItem("CurrentPatient"));
  }

  console.log(JSON.parse(currentPatient).name)


  return (
    <>
      <div style={{ backgroundColor: "black", height: "100vh", color: "white" }}>
        <Header />
        <Grid item xs={12} >
          <Box sx={{ bgcolor: 'black' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              textColor='white'
              scrollButtons="auto"
            >
              <Tab onClick={() => setComponent(0)} label="Health Records" />
              <Tab onClick={() => setComponent(1)} label="Tests" />
              <Tab onClick={() => setComponent(2)} label="Prescriptions" />
              <Tab onClick={() => setComponent(3)} label="Item Four" />
              <Tab onClick={() => setComponent(4)} label="Item Five" />
              <Tab onClick={() => setComponent(5)} label="Item Six" />
              <Tab onClick={() => setComponent(6)} label="Item Seven" />
            </Tabs>
          </Box>
        </Grid>
        {component == 0 && (
          <HealthRecords pName={JSON.parse(currentPatient).name} />

        )}
        {component == 1 && (
          <h1>Tests</h1>
        )}
        {component == 2 && (
          <h1>Prescriptions</h1>
        )}
        {component == 3 && (
          <h1>Item 3</h1>
        )}
        {component == 4 && (
          <h1>Item 4</h1>
        )}
        {component == 5 && (
          <h1>Item 5</h1>
        )}
        {component == 6 && (
          <h1>Item 6</h1>
        )}
        {component == 7 && (
          <h1>Item 7</h1>
        )}

      </div>
    </>
  )
}