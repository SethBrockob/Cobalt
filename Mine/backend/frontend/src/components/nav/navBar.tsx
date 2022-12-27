import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Avatar } from '@mui/material';

import { MineralAPI } from '../../api/api';
import { mineralType } from '../../types/mineral';
import { Navigate } from 'react-router-dom';

export default function NavBar() {
  const [minerals, setMinerals] = React.useState<mineralType[]>([]);

  
  

  const logOutHandle = () => {
    <Navigate to="/" />;
  };

  const getMinerals = async () => {
    const response = await MineralAPI.getMineral();
    setMinerals(response.data);
    console.log(response);
  };


  
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Avatar alt="Cobalt Logo" src="./C.jpg"
            sx={{ flexGrow: 1,
            border:2,
            borderColor:"white" }} />
          </IconButton>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Cobalt
          </Typography>
          <Button
            color="inherit"
            onClick={logOutHandle}
            >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
