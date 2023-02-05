import React from "react";
import Page from "@/components/Pages/Page";
import Link from "next/link";

const HomePage = () => {
  const divStyle = {
    height: "200px",
    padding: "50px",
    background: "#9B9B9B",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    cursor: "pointer",
  };

  return (
    <Page>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li style={{ width: "30%" }}>
          <Link
            href={"/countries"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={divStyle}>
              <h2>Countries</h2>
            </div>
          </Link>
        </li>
        <li style={{ width: "30%" }}>
          <Link
            href={"/profile"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={divStyle}>
              <h2>Profile</h2>
            </div>
          </Link>
        </li>
      </ul>
    </Page>
  );
};

export default HomePage;
