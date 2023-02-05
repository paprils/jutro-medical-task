import React from "react";
import { country } from "@/interfaces/country";

interface SingleCountryTileProps {
  activeCountry: country;
}

const SingleCountryTile = (props: SingleCountryTileProps) => {
  const { activeCountry } = props;

  return (
    <div
      style={{
        width: "100%",
        background: "#9B9B9B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        padding: "50px",
        boxSizing: "border-box",
        color: "#FFF",
        borderRadius: "30px",
      }}
    >
      <h1>{activeCountry.name}</h1>
      <p>{activeCountry.code}</p>
      <p style={{ fontSize: "50px" }}>{activeCountry.emoji}</p>
      <p>Languages:</p>
      <ul>
        {activeCountry.languages.map((language: { name: string }) => {
          return (
            <li key={language.name}>
              <p>{language.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleCountryTile;
