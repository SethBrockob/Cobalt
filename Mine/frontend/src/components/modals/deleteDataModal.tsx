import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import axios from "axios";

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

const url = "http://127.0.0.1:8000/api/";

function deleteElement(id: string) {
  axios.delete(url, { data: { id: id } }).then((res) => {
    console.log(res);
  });
}

export default function DeleteMineral({
  onClose,
  openDel,
  getMineral,
  cellValues,
}: {
  onClose: () => void;
  openDel: boolean;
  getMineral: () => void;
  cellValues: any;
}) {

  return (
    <Modal
      open={openDel}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ m: 3 }}
        >
          Are you sure you would like to Delete this Mineral, It will not be
          able to be recovered.
        </Typography>

        <Typography
          id="proceed-modal-title"
          variant="h6"
          component="h2"
          sx={{ m: 3 }}
        >
          Would you like to proceed with deletion ?
        </Typography>
        <Stack
          direction="row"
          spacing={30}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              console.log(cellValues.row);
              deleteElement(cellValues.row.id);
              onClose();
              
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              onClose();
            }}
          >
            No
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
