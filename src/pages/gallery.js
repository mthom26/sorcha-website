import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/gallery/Gallery';

const GalleryPage = ({ data }) => {
  return (
    <Layout>
      <Gallery images={data} />
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

  }
`;