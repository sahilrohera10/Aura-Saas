import React from "react";
import "./BatchsPage.css";
import { useNavigate } from "react-router-dom";
import url from "../config.json";

import AddBatchModal from "../Components/AddBatchModal";
import { useState, useEffect } from "react";

export default function BatchesPages() {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(`${url.localhost}/GetAllBatches`)
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          setData(resp);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const colors = ["#F8999D", "#92ACDD"];

  return (
    <div className="batchPage">
      <p className="bHead">Batches</p>

      <AddBatchModal />

      <div className="cardsDiv">
        {data &&
          data.map((d, i) => (
            <div
              className="cards"
              onClick={() =>
                navigate("/listPerBatch", {
                  state: {
                    data: {
                      batchName: d.BatchName,
                      id: d._id,
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
                {d.BatchName}{" "}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
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
                    {d.From} - {d.To}{" "}
                  </p>
                </div>
              </div>
              <div>
                <p style={{ marginLeft: "30px" }}>
                  {" "}
                  Date : <span style={{ fontWeight: "500" }}>{d.Date}</span>
                </p>
              </div>

              <p style={{ textAlign: "center", marginBottom: "0px" }}>
                By {d.TrainerName}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
