import React from "react";
import { Box, Button, createTheme, Paper } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "../../components/nav/navBar";

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

function GridScreen() {
  
  const url = "http://127.0.0.1:8000/api/"

  const [rows,setRows] = useState([])

  useEffect(() => {
    axios.get(url)
    .then((res) =>{
      console.log(res.data);
      setRows(res.data);
    }).catch((err) => {
      console.log(err);
    })
  },[<DataGrid columns={[]} rows={[]}/>]);

    return (

      
        <Box sx={{height: 350, width: '100%'}} >
          <NavBar/>
        
          <DataGrid
           sx={{
            display: 'flex',
            boxShadow: 2,
            border: 2,
            borderColor: 'black',
            m:3,
            height:500,
            '& .mineral-header-class' : {
              backgroundColor: 'black',
              color: 'white'
            },
            '& .atomic-weight-header-class' : {
              backgroundColor: 'black',
              color: 'white'
            },
            '& .price-header-class' : {
              backgroundColor: 'black',
              color: 'white'
            },
            '& .structure-header-class' : {
              backgroundColor: 'black',
              color: 'white'
            },
            '& .picture-header-class' : {
              backgroundColor: 'black',
              color: 'white'
            },
          }}
           rows={rows}
           columns={[
            { field: 'mineralType',
            headerName: "Mineral",
            headerClassName: 'mineral-header-class',
            width: 300, },

            { field: 'atomicWeight',
            headerName: "Atomic Weight",
            headerClassName: 'atomic-weight-header-class',
            width: 200 },

            { field: 'pricePerKg',
            headerName: "Price",
            headerClassName: 'price-header-class',
            width: 200 },

            { field: 'crystalStructure',
            headerName: "Structure",
            headerClassName: 'structure-header-class',
            width: 300 },

            { field: 'picture',
            headerName: "Picture",
            headerClassName: 'picture-header-class',
            width: 228 },
            
            ]}
           pageSize={5}
           rowsPerPageOptions={[5]}
           experimentalFeatures={{newEditingApi:true}}
           getRowId={(row: any) => row.mineralType}
           />

           
          

        </Box>
        
      );


}

export default GridScreen;