import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import AddTrainerModal from "../Components/AddTrainerModal";
import url from "../config.json";

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

export default function TrainerPage() {
  const [data, setData] = useState();

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

  return (
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
                width: "250px",
                height: "190px",
                background: "#0E6086",
              }}
            >
              <div
                style={{
                  // border: "0.5px solid black",
                  width: "250px",
                  height: "150px",
                  background: "white",
                }}
              >
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
                  Joining : {d.JoiningDate}
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
  );
}
