import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import AddMineral from '../modals/addDataModal';
import { MineralAPI } from '../../api/api';
import { mineralType } from '../../types/mineral';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Navigate } from 'react-router-dom';

export default function NavBar() {
  const [minerals, setMinerals] = React.useState<mineralType[]>([]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  
  

  const logOutHandle = () => {
    <Navigate to="/" />;
  };

  const getMinerals = async () => {
    const response = await MineralAPI.getMineral();
    setMinerals(response.data);
    console.log(response);
  };

  const list = () => (
    <><Box>
    <List>
    <ListItem disablePadding>
      <ListItemButton onClick={() => {
              setOpen(true);
            }}
            className={'add-btn'} >
        
       {open && (   
         <AddMineral
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          getMineral={getMinerals} 
          /> 
        )}
        
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <DeleteForeverIcon />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </ListItemButton>
    </ListItem>
  </List>
</Box><Divider />
    </>
  )
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
