import React from "react";
import "./BatchsPage.css";
import { useNavigate } from "react-router-dom";
import url from "../config.json";
import { MdDelete } from "react-icons/md";

import AddBatchModal from "../Components/AddBatchModal";
import { useState, useEffect } from "react";
import EditBatch from "../Components/EditBatch";
import { FiRefreshCw } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";

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

  const refresh = async () => {
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
  };

  const handleDelete = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };

      const resp = await fetch(
        `${url.localhost}/DeleteBatch/${id}`,
        requestOptions
      );

      if (resp.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log("error=>", error);
      alert("error");
    }
  };

  const colors = ["#F8999D", "#92ACDD"];

  return (
    <div className="batchPage">
      <Tooltip title="Refresh">
        <div
          onClick={() => refresh()}
          style={{
            position: "absolute",
            left: "78%",
            top: "21%",
            cursor: "pointer",
          }}
        >
          <FiRefreshCw size={20} />
        </div>
      </Tooltip>
      <p className="bHead">Batches</p>

      <AddBatchModal />

      <div className="cardsDiv">
        {data &&
          data.map((d, i) => (
            <div className="card2">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  marginTop: "10px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                {" "}
                {d.BatchName}{" "}
              </p>

              <EditBatch data={d} />

              <MdDelete
                color="white"
                onClick={() => handleDelete(d._id)}
                size={20}
                style={{
                  position: "absolute",
                  right: "25",
                  top: "15",
                  cursor: "pointer",
                }}
              />
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                    Date :{" "}
                    <span style={{ fontWeight: "500" }}>
                      {d.Date.split("T")[0]}
                    </span>
                  </p>
                </div>

                <p style={{ textAlign: "center", marginBottom: "0px" }}>
                  By {d.TrainerName}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
