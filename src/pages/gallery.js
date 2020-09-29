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

// query looks out of order to re order the gallery pictures
export const query = graphql`
  query GalleryQuery {

    top_left: file(relativePath: { eq: "images/gallery_top_left.jpg"}) {
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

    top_right: file(relativePath: { eq: "images/gallery_top_right.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gallery7: file(relativePath: { eq: "images/gallery7.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    gallery8: file(relativePath: { eq: "images/gallery8.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gallery9: file(relativePath: { eq: "images/gallery9.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`;