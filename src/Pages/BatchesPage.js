import React from "react";
import "./BatchsPage.css";
import { useNavigate } from "react-router-dom";

import AddBatchModal from "../Components/AddBatchModal";

export default function BatchesPages() {
  const navigate = useNavigate();

  const data = [
    {
      batchName: "Batch 1 (Yoga)",
      time: "6am - 7am",
      no: 8,
      trainerName: "Karuna Ahuja",
    },
    {
      batchName: "Batch 2 (Yoga)",
      time: "7am - 8am",
      no: 10,
      trainerName: "Karuna Ahuja",
    },
  ];

  const colors = ["#F8999D", "#92ACDD"];

  return (
    <div className="batchPage">
      <p className="bHead">Batches</p>

      <AddBatchModal />

      <div className="cardsDiv">
        {data.map((d, i) => (
          <div
            className="cards"
            onClick={() =>
              navigate("/listPerBatch", {
                state: {
                  data: {
                    batchName: d.batchName,
                    // productName: data.productName,
                    // price: data.price,
                    // description: data.description,
                    // contactNumber: data.contactNumber,
                  },
                },
              })
            }
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              {" "}
              {d.batchName}{" "}
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  // border: "1px solid black",
                  padding: "5px",
                  marginLeft: "25px",
                  borderRadius: "20px ",
                  background: colors[i],
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{
                    // marginLeft: "10px",
                    marginTop: "2px",
                    marginBottom: "2px",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  {d.time}{" "}
                </p>
              </div>

              <p
                style={{
                  marginRight: "20px",
                  fontSize: "17px",
                }}
              >
                Participants :{" "}
                <span style={{ fontWeight: "500" }}> {d.no} </span>{" "}
              </p>
            </div>
            <div>
              {/* <p style={{ marginLeft: "10px" }}>
                Trainer :{" "}
                <span style={{ fontWeight: "500" }}> {d.trainerName} </span>{" "}
              </p> */}

              <p style={{ marginLeft: "30px" }}>
                {" "}
                Date : <span style={{ fontWeight: "500" }}>2 oct 2022</span>
              </p>
            </div>

            <p style={{ textAlign: "center", marginBottom: "0px" }}>
              By {d.trainerName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
