import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../components/auth/authContext";
import {
  Avatar,
  Box,
  Button,
  createTheme,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import StickyFooter from "./loginFooter";

import Image from "./Mineral_bg.jpg"




const theme = createTheme({
  palette: {
    primary: {
      light: '#467eac',
      main: '#9500ae',
      dark: '#004346',
      contrastText: '#fff',
    },
    secondary: {
      light: '#467eac',
      main: '#829baf',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  
};

function LoginScreen() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const currentContext = useContext(AuthContext);

  const [passwordShown, setPasswordShown] = useState(false);

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleEmailChange = (e: any) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    let hardcodedCred = {
      email: "admin@admin.com",
      password: "admin",
    };

    if (
      emailInput === hardcodedCred.email &&
      passwordInput === hardcodedCred.password
    ) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = "123456abcdef";
      sessionStorage.setItem("auth-token", token);
      currentContext!.setAuthentication(true);
    }
  };

  return currentContext!.authentication ? (
    <Navigate to="/home" />
  ) : (
    <ThemeProvider theme={theme}>
    <Paper style={styles.paperContainer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        
          
        }}
      >
        <Stack 
          spacing={5}
          sx={{
            mt:"auto",
            backgroundColor: "grey",
            borderRadius: '16px',
            p: 2,
            opacity:1 }}>

          <Avatar
           sx={{
            mx: 'auto',
            mt: -5,
            bgcolor: 'success.light',
             }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography
            variant="h2"
            gutterBottom
            sx={{ 
             mt:"top",
             alignItems: "center",
             fontFamily: 'Georgia' }}
          >
            Cobalt Login
          </Typography>

          

          <TextField
            sx={{
              bgcolor: 'secondary.main',  
              borderRadius:'8px',
               
          }}
            id="outlined-basic-username"
            label="Username"
            variant="outlined"
            value={emailInput}
            onChange={handleEmailChange}
          />

          <FormControl
           variant="outlined"
           sx={{
            bgcolor: 'secondary.main',
            borderRadius:'8px'}}>

            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              type={passwordShown ? "text" : "password"}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setChangePassword(changeIcon);
                      togglePassword();
                    }}
                    edge="end"
                  >
                    {changeIcon ? <FaEye /> : <FaEyeSlash />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        

        <Button
         variant="text"
         onClick={handleLoginSubmit}
         sx={{
          bgcolor: 'secondary.main',
          color: 'black',
          ':hover': {
            bgcolor: 'success.dark', 
          },
         }}>
          Login
        </Button>
        <StickyFooter/>
        </Stack>
        
      </Box>
      </Paper>
      </ThemeProvider>
  );
}

export default LoginScreen;
