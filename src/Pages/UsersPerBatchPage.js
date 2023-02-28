import { Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import AddParticipantModal from "../Components/AddParticipantModal";
import url from "../config.json";
import { Popconfirm } from "antd";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 600,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function UserPerBatchPage() {
  // const [editData, setEditData] = React.useState([]);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = (record) => (setOpen(true), setEditData(record));
  // const handleClose = () => setOpen(false);

  const handleDelete = async (id) => {
    console.log("in delete func and id is=>", id);

    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      };

      const resp = await fetch(
        `http://localhost:3004/deleteParticipant/${id}`,
        requestOptions
      );

      if (resp.status === 200) {
        alert("successfully deleted");
      }
    } catch (error) {
      console.log("error=>", error);
      alert("error");
    }
  };

  // const editDetail = async () => {
  //   console.log("data name =>", editData["Name"]);
  // };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "Age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "gender",
    },
    {
      title: "Phone No.",
      dataIndex: "ContactNo",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "address",
    },
    {
      title: "Joining Date",
      dataIndex: "JoiningDate",
      key: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record._id)}
          >
            <a>Delete</a>
          </Popconfirm>

          {/* <a onClick={() => handleOpen(record)}>Edit</a> */}
        </Space>
      ),
    },
  ];

  const location = useLocation();
  const batchId = location.state.data.id;
  const name = location.state.data.BatchName;
  console.log("in list => ", batchId);

  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(`${url.localhost}/GetAllParticipantsByBatch/${batchId}`)
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          setData(resp);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const [name, setName] = React.useState(editData["Name"]);
  // const [age, setAge] = React.useState();
  // const [phn, setPhn] = React.useState();
  // const [address, setAddress] = React.useState();
  // const [gender, setGender] = React.useState();

  // const [date, setDate] = React.useState(dayjs(new Date().toJSON()));

  // const handleChange = (newValue) => {
  //   setDate(newValue);
  // };

  return (
    <>
      {/* Modal */}
      {/* <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Details
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
              onClick={() => editDetail()}
              style={{ marginLeft: "220px" }}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </div> */}

      <div>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "600",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          {name} Participants
        </p>
        <AddParticipantModal id={batchId} />
        <Table
          style={{ marginTop: "50px" }}
          columns={columns}
          dataSource={data}
          rowKey="_id"
        />
      </div>
    </>
  );
}
