import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import Hero from "../components/hero"
import Card from "../components/card"
import AboutSidebar from "../components/aboutSidebar"
import Categories from "../components/categories"

const Home = ({data}) => {

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <Hero/>
        <h1 className="text-gray-5">Featured Posts</h1>
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
            <AboutSidebar/>
            <Categories/>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Home

export const pageQuery  = graphql`
{
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {featured: {eq: true}}}
  ) {
    nodes {
      slug
      excerpt
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        category
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
