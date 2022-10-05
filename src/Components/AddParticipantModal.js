import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 570,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddParticipantModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginLeft: "60rem" }}>
      <Button variant="contained" onClick={handleOpen}>
        + New Participant
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Participant
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Age"
              variant="outlined"
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Gender"
              variant="outlined"
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Phone No."
              variant="outlined"
            />
            <TextField
              style={{ margin: "10px", width: "470px" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
          </Typography>

          <Button style={{ marginLeft: "220px" }} variant="contained">
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}