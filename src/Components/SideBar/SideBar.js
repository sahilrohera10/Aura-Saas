import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
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
      title: "Workshops",
      link: "/workshop",
    },
  ];

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
    </div>
  );
}
