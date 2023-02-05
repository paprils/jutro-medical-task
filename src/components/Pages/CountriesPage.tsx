import React from "react";
import { country } from "@/interfaces/country";
import Link from "next/link";
import Page from "@/components/Pages/Page";

interface CountriesPageProps {
  data: Array<country>;
}

const CountriesPage = (props: CountriesPageProps) => {
  const { data } = props;

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
        {data?.map((country: country) => {
          return (
            <li key={country.code} style={{ width: "30%" }}>
              <Link
                href={`/countries/${country.code}`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    background: "#9B9B9B",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    textAlign: "center",
                    boxSizing: "border-box",
                    borderRadius: "30px",
                    fontSize: "20px",
                    color: "#FFF",
                    flexDirection: "column",
                  }}
                >
                  <p>{country.name}</p>
                  <p>{country.code}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Page>
  );
};

export default CountriesPage;
