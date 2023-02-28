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

export default function EditTrainer({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = React.useState(data.Name);
  const [age, setAge] = React.useState(data.Age);
  const [date, setDate] = React.useState(data.JoiningDate.split("T")[0]);
  const [gender, setGender] = React.useState(data.Gender);
  const [expertise, setExpertise] = React.useState(data.Expertise);
  const [address, setAddress] = React.useState(data.Address);
  const [contact, setContact] = React.useState(data.ContactNo);
  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const handleEdit = async () => {
    const body = {
      Name: name,
      Age: age,
      JoiningDate: date,
      Gender: gender,
      Expertise: expertise,
      ContactNo: contact,
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
        "http://localhost:3004/UpdateTrainerDetails",
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
        style={{ marginLeft: "230px", position: "absolute" }}
      >
        {" "}
        <MdModeEdit
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
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Gender"
              variant="outlined"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Expertise"
              variant="outlined"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Contact No."
              variant="outlined"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
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
              style={{ margin: "10px", width: "470px" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
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
