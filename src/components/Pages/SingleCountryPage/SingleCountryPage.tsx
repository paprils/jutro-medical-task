import React from "react";
import useSingleCountryPage from "@/components/Pages/SingleCountryPage/SingleCountryPage.hook";
import Page from "@/components/Pages/Page";
import { country } from "@/interfaces/country";
import SingleCountryTile from "@/components/Elements/SingleCountryTile";

interface SingleCountryPageProps {
  data: Array<country>;
}

const SingleCountryPage = (props: SingleCountryPageProps) => {
  const { data } = props;
  const { activeCountry } = useSingleCountryPage(data);

  return (
    <Page>
      <SingleCountryTile activeCountry={activeCountry} />
    </Page>
  );
};

export default SingleCountryPage;
