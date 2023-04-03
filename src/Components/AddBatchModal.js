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
import url from "../config.json";

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

export default function AddBatchModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [batchName, setBatchName] = React.useState();
  const [trainerName, setTrainerName] = React.useState();
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();
  const [date, setDate] = React.useState(dayjs(new Date().toJSON()));
  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const addBatch = async () => {
    try {
      const body = {
        BatchName: batchName,
        From: from,
        To: to,
        TrainerName: trainerName,
        Date: date,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      const resp = await fetch(`${url.localhost}/CreateBatch`, requestOptions);

      if (resp.status === 200) {
        alert("successfully added");
      }
      if (resp.status === 300) {
        alert("batch Already added");
      }
    } catch (error) {
      console.log("error=>", error);
      alert("error");
    }
  };

  return (
    <div style={{ position: "absolute", right: "3%", top: "5%" }}>
      <Button variant="contained" onClick={handleOpen}>
        + New Batch
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Batch
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Batch Name"
              variant="outlined"
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Trainer Name"
              variant="outlined"
              value={trainerName}
              onChange={(e) => setTrainerName(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="From .."
              variant="outlined"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="To .."
              variant="outlined"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Starting Date "
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Date"
              variant="outlined"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            /> */}
          </Typography>

          <Button
            onClick={() => addBatch()}
            style={{ marginLeft: "190px" }}
            variant="contained"
          >
            Add Batch
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
