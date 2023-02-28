import { Space, Table, Tag } from "antd";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import url from "../config.json";
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
  // {
  //   title: "Joining Date",
  //   dataIndex: "date",
  //   key: "date",
  // },
  {
    title: "Address",
    dataIndex: "Address",
    key: "address",
  },
];

export default function ParticipantsList() {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(`${url.localhost}/GetAllParticipants`)
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          setData(resp);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "600",
          marginLeft: "20px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        All Participants
      </p>
      <Table
        style={{ marginTop: "50px", marginLeft: "40px" }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}
