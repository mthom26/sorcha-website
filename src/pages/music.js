import React from 'react'
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import locales from '../data/locales';

import Layout from '../components/Layout';
import Music from '../components/music/Music';

const MusicPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { localeData } = locales[locale];
  
  return (
    <Layout localeData={localeData} locale={locale}>
      <Helmet>
        <title>Music | Sorcha Thompson</title>
      </Helmet>
      <Music localeData={localeData.music} data={data} />
    </Layout>
  )
}

export default MusicPage;

export const query = graphql`
query MusicQuery {
  larkinImg: file(relativePath: { eq: "images/gallery3.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  vioLarkinImg: file(relativePath: { eq: "images/gallery2.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
