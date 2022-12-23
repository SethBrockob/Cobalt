import { Box } from '@mui/material';
import ReactPieChart from '../../components/charts/pie';
import NavBar from '../../components/nav/navBar';


function HomeScreen() { 

  return (
    <>
    <NavBar/>

    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "grey",
      
    }}>
    <ReactPieChart />
    </Box>

    

    </>

  );
}

export default HomeScreen;