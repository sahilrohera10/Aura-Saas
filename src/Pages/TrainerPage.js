import React from "react";
import Avatar from "@mui/material/Avatar";
import AddTrainerModal from "../Components/AddTrainerModal";

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
  const data = [
    {
      name: "Karuna Ahuja",
      age: 45,
      batchs: 5,
      expertise: "Yoga Instructor",
    },

    {
      name: "Jaanvi Ahuja",
      age: 22,
      batchs: 3,
      expertise: "Mental Health Mentor",
    },
    {
      name: "Pankaj Rohera",
      age: 50,
      batchs: 2,
      expertise: "Health Products Mentor ",
    },
    {
      name: "Mr. Ajay",
      age: 30,
      batchs: 2,
      expertise: "Yoga Instructor",
    },
  ];
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
        {data.map((d) => (
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
                <Avatar style={{ margin: "10px" }} {...stringAvatar(d.name)} />
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  {d.name}
                </p>
              </div>
              <p style={{ marginLeft: "15px", fontSize: "15px" }}>
                Age : {d.age}
              </p>
              <p style={{ marginLeft: "15px", fontSize: "15px" }}>
                No. Of Batchs : {d.batchs}
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
              {d.expertise}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
