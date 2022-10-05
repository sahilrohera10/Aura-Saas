import { Space, Table, Tag } from "antd";
import React from "react";
import "antd/dist/antd.css";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Phone No.",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Joining Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    gender: "Male",
    phone: 7428727172,
    date: "5-10-2022",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    gender: "Male",
    phone: 7428727172,
    date: "5-10-2022",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    gender: "Male",
    phone: 7428727172,
    date: "5-10-2022",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default function ParticipantsList() {
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
