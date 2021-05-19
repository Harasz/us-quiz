import { GetStaticProps } from "next";
import { Heading } from "../components/Heading";
import { Cards } from "../components/Cards";
import Layout from "../components/Layout";
import { getData } from "../utils/get-data";
import { Question } from "../interfaces";

type Props = {
  data: Question[];
};

const IndexPage = ({ data }: Props) => {
  return (
    <Layout title="UŚ Quiz">
      <Heading data={data} />
      <Cards />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
};

export default IndexPage;
