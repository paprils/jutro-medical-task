import SingleCountryPage from "@/components/Pages/SingleCountryPage/SingleCountryPage";
import { GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { country } from "@/interfaces/country";

const SingleCountry = (props: { data: Array<country> }) => {
  const { data } = props;
  return <SingleCountryPage data={data} />;
};

export async function getStaticPaths() {
  const paths: string[] = [];
  return { paths, fallback: "blocking" };
}

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

export default SingleCountry;
