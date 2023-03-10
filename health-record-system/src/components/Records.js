import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import CustomizedInputBox from './CustomizedInputBox'
import Grid from '@mui/material/Grid';

// Generate Order Data
function createData(id, date, name, illness, description) {
  return { id, date, name, illness, description };
}

const rows = [
  createData(
    0,
    'Test',
    'Test',
    'Test',
    'Test',
  ),
  createData(
    1,
    'Test',
    'Test',
    'Test',
    'Test',
  ),
  createData(2, 'Test', 'Test', 'Test', 'Test'),
  createData(
    3,
    'Test',
    'Test',
    'Test',
    'Test',
  ),
  createData(
    4,
    'Test',
    'Test',
    'Test',
    'Test',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Records() {
  return (
    <React.Fragment>
      <Grid container spacing = {12}>
        <Grid item xs={8}>
         <Title>Recent Records</Title>
        </Grid>
        <Grid item xs={4}>
          <CustomizedInputBox/>
        </Grid>
        
      </Grid>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Illness</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.illness}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more records
      </Link>
    </React.Fragment>
  );
}