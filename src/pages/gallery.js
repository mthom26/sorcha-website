import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import locales from '../data/locales';

import Layout from '../components/Layout';
import Gallery from '../components/gallery/Gallery';

const GalleryPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { localeData } = locales[locale];
  
  return (
    <Layout localeData={localeData} locale={locale}>
      <Helmet>
        <title>Gallery | Sorcha Thompson</title>
      </Helmet> 
      <Gallery localeData={localeData.gallery} images={data} />
    </Layout>
  );
};

export default GalleryPage;

export const query = graphql`
  query GalleryQuery {
    gallery1: file(relativePath: { eq: "images/gallery1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gallery2: file(relativePath: { eq: "images/gallery2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gallery3: file(relativePath: { eq: "images/gallery3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gallery4: file(relativePath: { eq: "images/gallery4.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gallery5: file(relativePath: { eq: "images/gallery5.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gallery6: file(relativePath: { eq: "images/gallery6.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`;