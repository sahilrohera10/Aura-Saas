import { Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import AddParticipantModal from "../Components/AddParticipantModal";
import url from "../config.json";
import { Popconfirm } from "antd";
import { Tooltip } from "@mui/material";
import { FiRefreshCw } from "react-icons/fi";

export default function UserPerBatchPage() {
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

  const refresh = async () => {
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
  };

  return (
    <>
      <div>
        <Tooltip title="Refresh">
          <div
            onClick={() => refresh()}
            style={{
              position: "absolute",
              left: "80%",
              top: "14%",
              cursor: "pointer",
            }}
          >
            <FiRefreshCw size={20} />
          </div>
        </Tooltip>
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
