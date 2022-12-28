import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import DeleteModal from "../../components/modals/deleteDataModal";
import EditModal from "./editDataModal";

import { MineralAPI } from "../../api/api";
import { mineralType } from "../../types/mineral";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MineralOptions({
  onClose,
  openOp,
  getMineral,
  cellValues
}: {
  onClose: () => void;
  openOp: boolean;
  getMineral: () => void;
  cellValues: Object;
}) {
  const [openOptionsState, setOpenOptionsState] = React.useState(openOp);
  const [openDel, setOpenDel] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const [minerals, setMinerals] = React.useState<mineralType[]>([]);

  const getMinerals = async () => {
    const response = await MineralAPI.getMineral();
    setMinerals(response.data);
    console.log(response);
  };

  return (
    <Modal
      open={openOp}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Would you like to Delete or edit this Mineral
        </Typography>
        <Stack
          direction="row"
          spacing={20}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              setOpenDel(true);
            }}
            className={"del-btn"}
          >
            {openDel && (
              <DeleteModal
                openDel={openDel}
                onClose={() => {
                  setOpenDel(false);
                }}
                getMineral={getMinerals}
                cellValues={cellValues}
              />
            )}
            <DeleteForeverIcon />
            Delete
          </Button>

          <Button
            onClick={() => {
              setOpenEdit(true);
            }}
            className={"edit-btn"}
          >
            {openEdit && (
              <EditModal
                openEdit={openEdit}
                onClose={() => {
                  setOpenEdit(false);
                }}
                getMineral={getMinerals}
                cellValues={cellValues}
              />
            )}
            <EditIcon />
            Edit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
