import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteMineral({
    onClose,
    openDel,
    getMineral,
  }: {
    onClose: () => void;
    openDel: boolean;
    getMineral: () => void;
  }) {

    const [openDelState, setOpenDelState] = React.useState(openDel);
  

  
    return (
      <Modal
        open={openDel}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">

        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you would like to Delete this Mineral, It will not be able to be recovered
        </Typography>
        <Stack direction="row" spacing={30} 
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}>
        <Button>Yes</Button>
        <Button 
        onClick={() => {
            setOpenDelState(false);
          }}
          >No</Button>
        </Stack>
        </Box>
      </Modal>
    );
  }
  