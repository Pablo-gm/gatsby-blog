import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import Card from "../components/card"
import Categories from "../components/categories"

const Blog = ({data}) => {

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Seo title="Blog" />
      <Container>
        <h1 className="text-gray-5">Blog</h1>
        <div className="grid grid-posts">
          <div>
            {posts.map((post) => {
              const title = post.frontmatter.title || post.fields.slug;

              return (
                <Card post={post} title={title} key={post.id} />
              );
            })}
          </div>
          <div className="grid-sidebar">
            <Categories/>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery  = graphql`
{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      slug
      excerpt
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        preview {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
}

`
