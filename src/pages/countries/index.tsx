import CountriesPage from "@/components/Pages/CountriesPage";
import { GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { country } from "@/interfaces/country";

const Index = (props: { data: Array<country> }) => {
  const { data } = props;
  return <CountriesPage data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = "https://countries.trevorblades.com/";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  });

  const countriesList = gql`
    {
      countries {
        name
        code
        emoji
        languages {
          name
        }
      }
    }
  `;

  const data = await graphQLClient.request(countriesList);

  return {
    props: { data: data.countries },
  };
};

export default Index;
