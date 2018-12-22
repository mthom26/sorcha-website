import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import locales from '../data/locales';

import Layout from '../components/Layout';
import Gigs from '../components/gigs/Gigs';

const GigsPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { localeData } = locales[locale];

  return (
    <Layout localeData={localeData} locale={locale}>
      <Helmet>
        <title>Gigs | Sorcha Thompson</title>
      </Helmet>      
      <Gigs localeData={localeData.gigs} data={data} />
    </Layout>
  );
};

export default GigsPage;

export const query = graphql`
{
  allContentfulGig (filter: { node_locale: { eq: "en-US"}}, sort: { fields: [date], order: DESC}) {
    edges {
      node {
        date(formatString: "DD-MM-YYYY, h:mma")
        address
      }
    }
  }
}
`;

