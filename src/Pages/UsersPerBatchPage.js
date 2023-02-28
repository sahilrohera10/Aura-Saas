import { Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import AddParticipantModal from "../Components/AddParticipantModal";
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

export default function UserPerBatchPage() {
  const location = useLocation();

  const name = location.state.data.batchName;
  const batchId = location.state.data.id;
  console.log("in list => ", name, batchId);

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

  return (
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
      />
    </div>
  );
}
