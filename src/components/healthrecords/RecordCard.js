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

export default function RecordCard({ val }) {
  return (
    <Card sx={{ width: '100%', margin: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {val.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {val.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
