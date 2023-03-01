import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { MdModeEdit } from "react-icons/md";
import url from "../config.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditBatch({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [batchName, setBatchName] = React.useState(data.BatchName);
  const [from, setFrom] = React.useState(data.From);
  const [date, setDate] = React.useState(data.Date.split("T")[0]);
  const [to, setTo] = React.useState(data.To);
  const [tName, setTName] = React.useState(data.TrainerName);

  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const handleEdit = async () => {
    const body = {
      BatchName: batchName,
      From: from,
      To: to,
      Date: date,
      TrainerName: tName,
      id: data._id,
    };

    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      console.log("body=>", body);
      const resp = await fetch(
        `${url.localhost}/UpdateBatchDetails`,
        requestOptions
      );

      if (resp.status === 200) {
        alert("updated");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          position: "absolute",
          marginTop: "-55px",
          marginLeft: "280px",
        }}
      >
        {" "}
        <MdModeEdit
          color="white"
          size={20}
          style={{
            position: "absolute",
            right: "55",
            top: "10",
            cursor: "pointer",
          }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Trainer
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
              label="From time"
              variant="outlined"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="To time"
              variant="outlined"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Trainer Name"
              variant="outlined"
              value={tName}
              onChange={(e) => setTName(e.target.value)}
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
          </Typography>

          <Button
            onClick={() => handleEdit()}
            style={{ marginLeft: "190px" }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
