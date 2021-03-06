/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("./src/templates/blogPosts.js");
  const categoryPostTemplate = path.resolve("./src/templates/categoryPosts.js");

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMdx.nodes;
    // create page for each mdx node
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      });

      const categoryPosts = result.data.categories.distinct;

      categoryPosts.forEach(category => {
        createPage({
          path: `/${category}`,
          component: categoryPostTemplate,
          context: {
            category,
          },
        })
      })

    });
  });
};
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};