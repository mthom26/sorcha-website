import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Gigs from '../components/gigs/Gigs';

const GigsPage = ({ data }) => {
  return (
    <Layout>
      <div style={{height: '300px', border: '1px solid red'}}>
        <h1>Gigs Header</h1>
      </div>
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

