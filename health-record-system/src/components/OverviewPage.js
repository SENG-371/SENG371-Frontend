import * as React from 'react';
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

export default function OverviewPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ backgroundColor: "#2f404b", height: "100vh", color: "white" }}>
      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}>

          <Grid item xs={12}>
            <h1>Welcome Healthcare practitioner</h1>
          </Grid>

          <Grid style={{ padding: 0, textAlign: 'center', margin: 'auto' }} item xs={3}>
            <h2>Current Patient:</h2>
          </Grid>

          <Grid style={{ padding: 0, margin: 'auto' }} item xs={9}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField sx={{
                  "& .MuiFormLabel-root, .MuiInputBase-root": {
                    color: 'white'
                  }
                }}
                  id="outlined-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                />
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} style={{ padding: 0, margin: 'auto' }}>
            <Box sx={{ bgcolor: '#2f404b' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                fullWidth={true}
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
              </Tabs>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ width: '100%' }}>
              <List sx={{
                width: '100%',
                bgcolor: "#2f404b",
                position: 'relative',
                overflow: 'auto',
                maxHeight: 600,
                '& ul': { padding: 0 },
              }}>
                <ListItem disablePadding>
                  <Card sx={{ width: '100%', margin: 1 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Card 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">

                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </ListItem>
                <ListItem disablePadding>
                  <Card sx={{ width: '100%', margin: 1 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Card 2
                      </Typography>
                      <Typography variant="body2" color="text.secondary">

                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </ListItem>
                <ListItem disablePadding>
                  <Card sx={{ width: '100%', margin: 1 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Card 3
                      </Typography>
                      <Typography variant="body2" color="text.secondary">

                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </ListItem>
              </List>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}