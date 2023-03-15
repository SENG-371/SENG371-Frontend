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
import '../../index.css';
import Patients from '../../assets/Patients';

export default function Header() {
  const [pName, setName] = useState("");
  const p = Patients();


  let currentPatient = ""
  let risk = 'NA'
  if (localStorage.getItem("CurrentPatient")) {
    currentPatient = (localStorage.getItem("CurrentPatient"));
  }


  const handleSubmit = (event) => {
    localStorage.setItem("CurrentPatient", pName);
    let patientName = currentPatient;
    console.log(patientName);

  }
  if (p.find(({ name }) => currentPatient === name)) {
    const result = p.find(({ name }) => currentPatient === name)
    risk = result.riskLevel
    console.log(result)

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1 className='blur-front'>Welcome Healthcare practitioner</h1>
        </Grid>
        <Grid style={{}} item xs={8}>
          <div className='blur-front patientNameBox'>
            <form onSubmit={handleSubmit}>
              <h1 className='labelStyle'>Enter Patient Name</h1>
              <label >
                <input
                  className='textbox'
                  type="text"
                  value={pName}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <input className='button-22' type="submit" />
            </form>
          </div>
        </Grid >
        <Grid style={{}} item xs={4}>
          <h1 className='blur-front'>Risk Level {risk}</h1>
        </Grid >
      </Grid >
    </Box >
  );
}