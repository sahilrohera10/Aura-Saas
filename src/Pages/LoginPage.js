import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import url from "../config.json";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   const navigate = useNavigate();

  const handleSubmit = async () => {
    const body = {
      Email: email,
      Password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const resp = await fetch(`${url.localhost}/login`, requestOptions);
      resp.json().then((data) => {
        console.log("data =>", data.pass);

        if (resp.status === 400) {
          alert("please provide email and password");
        }
        if (resp.status === 401) {
          alert("No user exist with this email");
        }
        if (resp.status === 402) {
          alert("Password Incorrect");
        }

        if (resp.status === 200) {
          localStorage.setItem("name", data.pass.Name);
          localStorage.setItem("email", data.pass.Email);
          localStorage.setItem("isAuthorised", true);
          window.location.reload();
        }
      });
    } catch (error) {}
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "100px",
            marginLeft: "100px",
            marginTop: "150px",
          }}
          src="logo.jpeg"
          alt=""
        />
        <p
          style={{
            fontSize: "60px",
            fontWeight: "600",
            marginBottom: "2px",
            marginTop: "20px",
          }}
        >
          Aura Yoga Centre
        </p>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Managment Software
        </p>
      </div>

      <div
        style={{
          width: "320px",
          height: "300px",
          backgroundColor: "white",
          marginTop: "170px",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <TextField
          style={{ marginTop: "30px", width: "280px" }}
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
    </div>
  );
}
