import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const data = [
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Batchs",
      link: "/batchs",
    },
    {
      title: "Participants Lists",
      link: "/list",
    },
    {
      title: "Trainers",
      link: "/trainer",
    },
    {
      title: "Date Wise Joinings",
      link: "/date",
    },
    {
      title: "Give Software Access",
      link: "/access",
    },
  ];

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="sideBarMainDiv">
      <img src="auraLogo.png" className="logo" alt="" />
      {data.map((d) => (
        <Link to={d.link} style={{ textDecoration: "none", color: "white" }}>
          <div className="sidebarItems">
            <h3 className="itemContent">{d.title}</h3>
          </div>
        </Link>
      ))}

      <button
        style={{ marginTop: "200px", marginLeft: "100px" }}
        onClick={(e) => logout(e)}
      >
        Logout
      </button>
    </div>
  );
}
