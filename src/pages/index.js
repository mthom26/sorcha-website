import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import locales from '../data/locales';

import Layout from '../components/Layout';
import Landing from '../components/Home/Landing';
import Bio from '../components/Home/Bio';
import UpcomingGigs from '../components/Home/UpcomingGigs';
import LandingBlogPosts from '../components/Home/LandingBlogPosts';

const Index = ({ data, pageContext }) => {
  // console.log('INDEX PAGE', pageContext);
  const { locale } = pageContext;
  const { localeData } = locales[locale];
  const blogPosts = locale === 'en' ? data.newEnglishBlogPosts : data.newGermanBlogPosts;

  return (
    <Layout localeData={localeData} locale={locale}>
      <Helmet>
        <title>Sorcha Thompson</title>
      </Helmet>
      <Landing localeData={localeData.landing} />
      <Bio localeData={localeData.bio}/>
      <UpcomingGigs />
      <LandingBlogPosts blogPosts={blogPosts.edges} locale={locale} />
    </Layout>
  );
};

export default Index;

export const query = graphql`
query IndexQuery {
  newEnglishBlogPosts: allContentfulBlogPost (filter: { node_locale: { eq: "en-US"}}, sort: { fields: [date], order: DESC}, limit: 3) {
    edges {
      node {
        date(formatString: "DD-MM-YYYY")
        title
        slug
        body {
          childMarkdownRemark {
             excerpt(pruneLength: 150)
         	}
        }
        coverImage {
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }

  newGermanBlogPosts: allContentfulBlogPost (filter: { node_locale: { eq: "de"}}, sort: { fields: [date], order: DESC}, limit: 3) {
    edges {
      node {
        date(formatString: "DD-MM-YYYY")
        title
        slug
        body {
          childMarkdownRemark {
             excerpt(pruneLength: 150)
         	}
        }
        coverImage {
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`;