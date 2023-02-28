import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import url from "../config.json";

export default function AccessPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const body = {
      Name: name,
      Email: email,
      Password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const resp = await fetch(`${url.localhost}/register`, requestOptions);

      if (resp.status === 200) {
        alert("successfully given the access");
      }
      if (resp.status === 300) {
        alert("This person already has the access");
      }
    } catch (error) {}
  };

  return (
    <div
      style={{
        width: "350px",
        height: "450px",
        backgroundColor: "white",
        margin: "auto",
        marginTop: "100px",
        padding: "35px",
        borderRadius: "20px",
      }}
    >
      <h2>Give Software Access</h2>
      <TextField
        style={{ marginTop: "20px", width: "280px" }}
        id="outlined-basic"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
      />
      <TextField
        style={{ marginTop: "20px", width: "280px" }}
        id="outlined-basic"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
      />
      <TextField
        style={{ marginTop: "20px", width: "280px" }}
        id="outlined-basic"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
      />
      <Button
        onClick={() => handleSubmit()}
        style={{ marginTop: "60px", marginLeft: "90px" }}
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
}
