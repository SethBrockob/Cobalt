import { Box } from '@mui/material';
import PieChart from '../../components/charts/pie2';
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
      backgroundColor: "grey", 
      height:300,
      width:300,
      }}>
    <PieChart />
    </Box>

    

    </>

  );
}

export default HomeScreen;