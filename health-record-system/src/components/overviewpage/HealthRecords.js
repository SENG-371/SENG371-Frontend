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
import RecordCard from './RecordCard';
import Patients from '../../assets/Patients';

export default function HealthRecords({ pName }) {
  return (
    <Grid item xs={12}>
      <Box sx={{ width: '100%' }}>
        <h1>Add Record for {pName} </h1>
        <Button variant="outlined">Add Record</Button>
        <List sx={{
          width: '100%',
          bgcolor: "black",
          position: 'relative',
          overflow: 'auto',
          maxHeight: 600,
          '& ul': { padding: 0 },
        }}>
          <ListItem disablePadding>

            <RecordCard />
          </ListItem>
        </List>
      </Box>
    </Grid>
  )

}