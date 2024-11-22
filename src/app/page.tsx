'use client'
import { Button } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
       AMOUNT TO BE SENT
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
    </CardContent>
  </React.Fragment>
  
  
);
export default function Home() {
  return (
    <div className="home">
      <div>
        <h2>Welcome</h2>
        <p>Statitics from</p>
      </div>
      <div className="card-id">
        <Box sx={{ minWidth: 100 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
        <Box sx={{ minWidth: 100 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
        <Box sx={{ minWidth: 1 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
      <div className="card">
        
      </div>
    </div>
  );
}
