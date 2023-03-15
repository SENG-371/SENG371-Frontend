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
  const handleSubmit = (event) => {
    event.preventDefault();


    const result = p.find(({ name }) => pName === name);

    localStorage.setItem("CurrentPatient", JSON.stringify(result));
    window.location.reload(false);

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Welcome Healthcare practitioner</h1>
        </Grid>

        <Grid style={{ padding: 0, margin: 'auto' }} item xs={9}>

          <div>
            <form onSubmit={handleSubmit}>
              <label>Enter your name:
                <input
                  type="text"
                  value={pName}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <input type="submit" />
            </form>
          </div>

        </Grid >
      </Grid >
    </Box >
  );
}