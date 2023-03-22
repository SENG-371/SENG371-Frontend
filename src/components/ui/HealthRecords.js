import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import '../../index.css';
import RecordCard from './RecordCard';
import Patients from '../../assets/Patients';
import RecordList from './RecordList';


function HealthRecords(props) {
  return (
    <div>
      <h1>Health Records</h1>
      {
        props.pName != 0 && (
          <RecordList meetups={props} />
        )
      }
    </div>
  );

}

export default HealthRecords;