import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import './Bio.css';

const Bio = () => {
  return (

      <div className="bio">
        <div className="bioImage">
          <StaticQuery
            query={graphql`
              query BioQuery {
                file(relativePath: { eq: "images/bio.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => (
              <div className="bioImageContainer">
                <Img
                  sizes={data.file.childImageSharp.fluid}
                />
              </div>
            )}
          />
        </div>
        <div className="bioContent">
          <div>
            <h2>About</h2>
            <hr />
            <p>Blah blah blah....</p>
          </div>
        </div>
      </div>
  );
};

export default Bio;