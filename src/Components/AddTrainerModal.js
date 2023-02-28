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

export default function AddTrainerModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [gender, setGender] = React.useState();
  const [expertise, setExpertise] = React.useState();
  const [address, setAddress] = React.useState();
  const [joiningDate, setJoiningDate] = React.useState();
  const [contact, setContact] = React.useState();

  const addTrainer = async () => {
    try {
      const body = {
        Name: name,
        Age: age,
        Gender: gender,
        Expertise: expertise,
        Address: address,
        JoiningDate: joiningDate,
        ContactNo: parseInt(contact),
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      const resp = await fetch(
        "http://localhost:3004/AddTrainer",
        requestOptions
      );

      if (resp.status === 200) {
        alert("register success");
      }
      if (resp.status === 300) {
        alert("trainer Already added");
      }
    } catch (error) {
      console.log("error=>", error);
      alert("error");
    }
  };

  return (
    <div style={{ marginLeft: "60rem" }}>
      <Button variant="contained" onClick={handleOpen}>
        + New Trainer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Trainer
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
            <TextField
              style={{ margin: "10px" }}
              id="outlined-basic"
              label="Joining Date"
              variant="outlined"
              value={joiningDate}
              onChange={(e) => setJoiningDate(e.target.value)}
            />
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
            onClick={() => addTrainer()}
            style={{ marginLeft: "190px" }}
            variant="contained"
          >
            Add Trainer
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
