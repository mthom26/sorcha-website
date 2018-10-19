import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Gigs from '../components/gigs/Gigs';

const GigsPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Gigs | Sorcha Thompson</title>
      </Helmet>      
      <Gigs data={data} />
    </Layout>
  );
};

export default GigsPage;

export const query = graphql`
{
  allContentfulGig (sort: { fields: [date], order: DESC}) {
    edges {
      node {
        date(formatString: "DD-MM-YYYY, h:mma")
        address
      }
    }
  }
}
`;

