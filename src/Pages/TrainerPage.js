import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import AddTrainerModal from "../Components/AddTrainerModal";
import url from "../config.json";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import EditTrainer from "../Components/EditTrainer";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

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

export default function TrainerPage() {
  const [data, setData] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [name, setName] = useState();
  // const [age, setAge] = useState();
  // const [date, setDate] = React.useState(dayjs(new Date().toJSON()));
  // const [gender, setGender] = React.useState();
  // const [expertise, setExpertise] = React.useState();
  // const [address, setAddress] = React.useState();
  // const [contact, setContact] = React.useState();

  // const handleChange = (newValue) => {
  //   setDate(newValue);
  // };

  useEffect(() => {
    try {
      fetch(`${url.localhost}/GetTrainers`)
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          setData(resp);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };

      const resp = await fetch(
        `http://localhost:3004/DeleteTrainer/${id}`,
        requestOptions
      );

      if (resp.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log("error=>", error);
      alert("error");
    }
  };

  const handleEdit = async () => {};

  return (
    <>
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

          <Button
            onClick={() => handleEdit()}
            style={{ marginLeft: "190px" }}
            variant="contained"
          >
            Add Trainer
          </Button>
        </Box>
      </Modal>

      <div>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "10px",
            marginLeft: "30px",
            textAlign: "center",
          }}
        >
          Trainers
        </p>

        <AddTrainerModal />

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: "50px",
          }}
        >
          {data &&
            data.map((d) => (
              <div
                style={{
                  // border: "0.5px solid black",
                  width: "300px",
                  height: "190px",
                  background: "#0E6086",
                }}
              >
                <div
                  style={{
                    // border: "0.5px solid black",
                    width: "300px",
                    height: "150px",
                    background: "white",
                    position: "relative",
                  }}
                >
                  <EditTrainer data={d} />

                  <MdDelete
                    onClick={() => handleDelete(d._id)}
                    size={20}
                    style={{
                      position: "absolute",
                      right: "25",
                      top: "10",
                      cursor: "pointer",
                    }}
                  />
                  <div style={{ display: "flex" }}>
                    <Avatar
                      style={{ margin: "10px" }}
                      {...stringAvatar(d.Name)}
                    />
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      {d.Name}
                    </p>
                  </div>
                  <p style={{ marginLeft: "15px", fontSize: "15px" }}>
                    Age : {d.Age}
                  </p>
                  <p style={{ marginLeft: "15px", fontSize: "15px" }}>
                    Joining : {d.JoiningDate.split("T")[0]}
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "white",
                    // marginLeft: "20px",
                    textAlign: "center",
                  }}
                >
                  {d.Expertise}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
