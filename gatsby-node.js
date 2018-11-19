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

        const posts = result.data.allContentfulBlogPost.edges;

        posts.forEach((blogPost, index) => {
          createPage({
            path: `/blog/${blogPost.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: blogPost.node.slug,
              prev: index === 0 ? posts[posts.length -1].node : posts[index-1].node,
              prevSlug: index === 0 ? posts[posts.length -1].node.slug : posts[index-1].node.slug,
              next: index === (posts.length - 1) ? posts[0].node : posts[index+1].node,
              nextSlug: index === (posts.length - 1) ? posts[0].node.slug : posts[index+1].node.slug
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
          locale: lang
        }
      });
    });
    resolve();
  })
};