import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/nav/navBar";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import AddMineral from "../../components/modals/addDataModal";
import { mineralType } from "../../types/mineral";
import { MineralAPI } from "../../api/api";
import MineralOptions from "../../components/modals/multiPurposeModal";

function GridScreen() {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openDel, setOpenDel] = React.useState(false);
  const [openOptions, setOpenOptions] = React.useState(false);

  const [minerals, setMinerals] = React.useState<mineralType[]>([]);

  const getMinerals = async () => {
    const response = await MineralAPI.getMineral();
    setMinerals(response.data);
    console.log(response);
  };

  const url = "http://127.0.0.1:8000/api/";

  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ height: 350, width: "100%" }}>
      <NavBar />

      <DataGrid
        sx={{
          display: "flex",
          width: "95%",
          boxShadow: 2,
          border: 2,
          borderColor: "black",
          m: 3,
          height: 400,
          "& .mineral-header-class": {
            backgroundColor: "black",
            color: "white",
          },
          "& .atomic-weight-header-class": {
            backgroundColor: "black",
            color: "white",
          },
          "& .price-header-class": {
            backgroundColor: "black",
            color: "white",
          },
          "& .structure-header-class": {
            backgroundColor: "black",
            color: "white",
          },
          "& .picture-header-class": {
            backgroundColor: "black",
            color: "white",
          },
          "& .options-header-class": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        rows={rows}
        columns={[
          {
            field: "mineralType",
            headerName: "Mineral",
            headerClassName: "mineral-header-class",
            width: 250,
          },

          {
            field: "atomicWeight",
            headerName: "Atomic Weight",
            headerClassName: "atomic-weight-header-class",
            width: 200,
          },

          {
            field: "pricePerKg",
            headerName: "Price",
            headerClassName: "price-header-class",
            width: 200,
          },

          {
            field: "crystalStructure",
            headerName: "Structure",
            headerClassName: "structure-header-class",
            width: 230,
          },

          {
            field: "picture",
            headerName: "Picture",
            headerClassName: "picture-header-class",
            width: 230,
          },

          {
            field: "options",
            headerName: "Options",
            headerClassName: "options-header-class",
            width: 100,
          },
        ]}
        pageSize={5}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={(row: any) => row.mineralType}
      />

      <Button
        onClick={() => {
          setOpenAdd(true);
        }}
        className={"add-btn"}
      >
        {openAdd && (
          <AddMineral
            open={openAdd}
            onClose={() => {
              setOpenAdd(false);
            }}
            getMineral={getMinerals}
          />
        )}
        <AddIcon />
        Add Mineral
      </Button>

      <Button
        onClick={() => {
          setOpenOptions(true);
        }}
        className={"options-btn"}
      >
        {openOptions && (
          <MineralOptions
            openOp={openOptions}
            onClose={() => {
              setOpenOptions(false);
            }}
            getMineral={getMinerals}
          />
        )}
        <DeleteForeverIcon />
        <EditIcon />
        Options
      </Button>
    </Box>
  );
}

export default GridScreen;
