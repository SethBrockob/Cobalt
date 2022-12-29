import * as React from "react";
import {
  Button,
  Box,
  TextField,
  Select,
  Modal,
  Typography,
  MenuItem,
} from "@mui/material";
import { MineralAPI } from "../../api/api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

export default function EditModal({
  onClose,
  openEdit,
  getMineral,
  cellValues
}: {
  onClose: () => void;
  openEdit: boolean;
  getMineral: () => void;
  cellValues: any;
}) {
  const [mineralDetails, setMineralDetails] = React.useState({
    mineralType: cellValues.row.mineralType,
    atomicWeight: cellValues.row.atomicWeight,
    pricePerKg: cellValues.row.pricePerKg,
    crystalStructure: cellValues.row.crystalStructure,
    picture: cellValues.row.picture,
  });


  function StructureChanged(value: any) {
    setMineralDetails({
      ...mineralDetails,
      crystalStructure: value.toString(),
    });
  }

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files![0]);
    setMineralDetails({
      ...mineralDetails,
      picture: event.target.files![0].name,
    });
  };

  const [emptyFields, setEmptyFields] = React.useState(false);

  const submit = () => {
    let data = mineralDetails;
    if (
      data.mineralType === "" ||
      data.atomicWeight === 0 ||
      data.pricePerKg === 0 ||
      data.crystalStructure === ""
    ) {
      setEmptyFields(true);
    } else {
      MineralAPI.updateMineral(cellValues.row.id, mineralDetails)
        .then(() => {
          getMineral();
          onClose();
        })
        .catch(() => {
          getMineral();
          onClose();
        });
    }
  };

  return (
    <Modal
      open={openEdit}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: 21,
              fontWeight: 600,
              color: "#111840",
              marginBottom: 1,
            }}
          >
            Edit Mineral
          </Typography>
        </Box>
        {emptyFields && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "Red",
                marginBottom: 1,
              }}
            >
              All inputs are required
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: "#111840",
                marginTop: "10px",
              }}
            >
              Mineral:
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              onChange={(e:any) =>
                setMineralDetails({
                  ...mineralDetails,
                  mineralType: e.target.value,
                })
              }
              value={mineralDetails.mineralType}
            />
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: "#111840",
                marginTop: "10px",
              }}
            >
              Atomic Weight:
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              type="number"
              label=""
              variant="outlined"
              size="small"
              onChange={(e:any) =>
                setMineralDetails({
                  ...mineralDetails,
                  atomicWeight: parseInt(e.target.value),
                })
              }
              value={mineralDetails.atomicWeight}
            />
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: "#111840",
                marginTop: "10px",
              }}
            >
              Price:
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              type="number"
              label=""
              variant="outlined"
              size="small"
              onChange={(e:any) =>
                setMineralDetails({
                  ...mineralDetails,
                  pricePerKg: parseInt(e.target.value),
                })
              }
              value={mineralDetails.pricePerKg}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: "#111840",
                marginTop: "10px",
              }}
            >
              Crystal Structure:
            </Typography>
            <Select
              sx={{ width: "100%" }}
              size={"small"}
              onChange={(e) => StructureChanged(e.target.value)}
              value={mineralDetails.crystalStructure}
            >
              <MenuItem value="Cubic">Cubic</MenuItem>
              <MenuItem value="Tetragonal">Tetragonal</MenuItem>
              <MenuItem value="Orthorhombic">Orthorhombic</MenuItem>
              <MenuItem value="Rhombohedral">Rhombohedral</MenuItem>
              <MenuItem value="Hexagonal">Hexagonal</MenuItem>
              <MenuItem value="Monoclinic">Monoclinic</MenuItem>
              <MenuItem value="Triclinic">Triclinic</MenuItem>
            </Select>

            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: "#111840",
                marginTop: "10px",
              }}
            >
              Picture:
            </Typography>
            <Button component="label">
              <input type="file" onChange={onFileInputChange}/>
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              marginTop: "20px",
              color: "#fff",
              borderRadius: "8px",
              display: "block",
            }}
            onClick={submit}
          >
            Edit Mineral
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
