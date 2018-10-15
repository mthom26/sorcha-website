const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogpost.js');

    resolve(
      graphql(
        `
        {
          allContentfulBlogPost (sort: { fields: [date], order: DESC}) {
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

        result.data.allContentfulBlogPost.edges.forEach(blogPost => {
          createPage({
            path: `/blog/${blogPost.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: blogPost.node.slug
            }
          });
        });
        return;
      })
    )
  })
};