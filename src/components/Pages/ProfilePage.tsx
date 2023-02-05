import React from "react";
import { useQuery, gql } from "@apollo/client";
import ClientOnly from "@/components/ClientOnly";
import Page from "@/components/Pages/Page";
import Link from "next/link";

const QUERY = gql`
  query Countries {
    country(code: "PL") {
      name
      emoji
      code
      languages {
        name
      }
    }
  }
`;

const ProfilePage = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const poland = data.country;

  return (
    <Page>
      <ClientOnly>
        <Link
          href={`/countries/${poland.code}`}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <div
            style={{
              width: "50%",
              height: "150px",
              background: "#9B9B9B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
              textAlign: "center",
              boxSizing: "border-box",
              borderRadius: "30px",
              fontSize: "20px",
              color: "#FFF",
              margin: "auto",
              cursor: "pointer",
            }}
          >
            <p>{poland.name}</p>
            <p>{poland.code}</p>
          </div>
        </Link>
      </ClientOnly>
    </Page>
  );
};

export default ProfilePage;
