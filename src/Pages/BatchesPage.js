import React from "react";
import "./BatchsPage.css";
import Button from "@mui/material/Button";

export default function BatchesPages() {
  const data = [
    {
      batchName: "Batch 1 (Yoga)",
      time: "6am - 7am",
      no: 8,
      trainerName: "Karuna Ahuja",
    },
    {
      batchName: "Batch 1 (Yoga)",
      time: "6am - 7am",
      no: 8,
      trainerName: "Karuna Ahuja",
    },
  ];

  const colors = ["aquamarine", "rgb(106 255 124)"];

  return (
    <div className="batchPage">
      <h2 className="bHead">Batches</h2>
      <Button
        className="addBatch"
        sx={{ background: "#483D8B" }}
        variant="contained"
      >
        + New Batch
      </Button>

      <div className="cardsDiv">
        {data.map((d, i) => (
          <div className="cards" style={{ background: colors[i] }}>
            <h3 style={{ textAlign: "center" }}> {d.batchName} </h3>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ marginLeft: "10px" }}>
                Timings : <span style={{ fontWeight: "500" }}> {d.time} </span>{" "}
              </p>
              <p style={{ marginRight: "10px" }}>
                Participants :{" "}
                <span style={{ fontWeight: "500" }}> {d.no} </span>{" "}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ marginLeft: "10px" }}>
                Trainer :{" "}
                <span style={{ fontWeight: "500" }}> {d.trainerName} </span>{" "}
              </p>

              <p style={{ marginRight: "10px" }}>
                {" "}
                Date : <span style={{ fontWeight: "500" }}>2 oct 2022</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
