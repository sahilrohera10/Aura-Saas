import React from "react";
import { useNavigate } from "react-router-dom";

export default function DateWise() {
  const data = [
    {
      from: 1,
      to: 10,
    },

    {
      from: 11,
      to: 20,
    },

    {
      from: 21,
      to: 30,
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "600",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Date Wise Joinings
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "78vw",
          height: "50vh",
          //   border: "1px solid black",
          paddingTop: "70px",
        }}
      >
        {data.map((d) => (
          <div
            style={{
              border: "2px solid black",
              width: "220px",
              height: "130px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            onClick={() =>
              navigate("/joinings", {
                state: {
                  data: {
                    from: d.from,
                    to: d.to,
                  },
                },
              })
            }
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginTop: "20px",
                fontWeight: "600",
              }}
            >
              Between
            </p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {d.from} - {d.to}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
