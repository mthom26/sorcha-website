import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Gigs from '../components/gigs/Gigs';

const GigsPage = ({ data }) => {
  return (
    <Layout>      
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

