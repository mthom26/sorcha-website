const path = require('path');

const locales = require('./src/data/locales');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogpost.js');

    resolve(
      graphql(
        `
        {
          englishBlogPosts: allContentfulBlogPost (filter: { node_locale: { eq: "en-US"}}, sort: { fields: [date], order: DESC}) {
            edges {
              node {
                title
                slug
                date(formatString: "DD-MM-YYYY")
              }
            }
          }
          germanBlogPosts: allContentfulBlogPost (filter: { node_locale: { eq: "de"}}, sort: { fields: [date], order: DESC}) {
            edges {
              node {
                title
                slug
                date(formatString: "DD-MM-YYYY")
              }
            }
          }
        }
        `
      ).then(result => {
        if(result.errors) {
          reject(result.errors);
        }

        const englishPosts = result.data.englishBlogPosts.edges;
        const germanPosts = result.data.germanBlogPosts.edges;

        englishPosts.forEach((blogPost, index) => {
          createPage({
            path: `/blog/${blogPost.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: blogPost.node.slug,
              prev: index === 0 ? englishPosts[englishPosts.length -1].node : englishPosts[index-1].node,
              prevSlug: index === 0 ? englishPosts[englishPosts.length -1].node.slug : englishPosts[index-1].node.slug,
              next: index === (englishPosts.length - 1) ? englishPosts[0].node : englishPosts[index+1].node,
              nextSlug: index === (englishPosts.length - 1) ? englishPosts[0].node.slug : englishPosts[index+1].node.slug,
              locale: 'en'
            }
          });
        });
        germanPosts.forEach((blogPost, index) => {
          createPage({
            path: `/de/blog/${blogPost.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: blogPost.node.slug,
              prev: index === 0 ? germanPosts[germanPosts.length -1].node : germanPosts[index-1].node,
              prevSlug: index === 0 ? germanPosts[germanPosts.length -1].node.slug : germanPosts[index-1].node.slug,
              next: index === (germanPosts.length - 1) ? germanPosts[0].node : germanPosts[index+1].node,
              nextSlug: index === (germanPosts.length - 1) ? germanPosts[0].node.slug : germanPosts[index+1].node.slug,
              locale: 'de'
            }
          });
        });

        return;
      })
    )
  })
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
      const localePath = locales[lang].default ? page.path : locales[lang].path + page.path;
      
      return createPage({
        ...page,
        path: localePath,
        context: {
          ...page.context,
          locale: lang
        }
      });
    });
    resolve();
  })
};