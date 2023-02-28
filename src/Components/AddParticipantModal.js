import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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

export default function AddParticipantModal({ id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [phn, setPhn] = React.useState();
  const [address, setAddress] = React.useState();
  const [gender, setGender] = React.useState();

  const addParticipant = async () => {
    try {
      const body = {
        BatchId: id,
        Name: name,
        Age: age,
        ContactNo: phn,
        Address: address,
        Gender: gender,
        JoiningDate: date,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      console.log("body=>", body);

      const resp = await fetch(
        "http://localhost:3004/AddParticipant",
        requestOptions
      );

      if (resp.status === 200) {
        alert("successfully joined");
      }
      if (resp.status === 300) {
        alert("This participant has already joined this batch");
      }
    } catch (error) {
      console.log("error=>", error);
      alert("error");
    }
  };
  const [date, setDate] = React.useState(dayjs(new Date().toJSON()));

  const handleChange = (newValue) => {
    setDate(newValue);
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              variant="outlined"
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              variant="outlined"
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Phone No."
              value={phn}
              onChange={(e) => setPhn(e.target.value)}
              variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Joining Date "
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
            />
          </Typography>

          <Button
            onClick={() => addParticipant()}
            style={{ marginLeft: "220px" }}
            variant="contained"
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
