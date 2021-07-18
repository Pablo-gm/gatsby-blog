import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import Container from "../components/container";
import Card from '../components/card'
import Categories from "../components/categories"
import { graphql } from 'gatsby'

const categoryPosts = props => {
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props

  return (
    <Layout>
      <Seo title={category} />
      <Container>
        <h1 className="text-gray-5">{category}</h1>
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

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        slug
        frontmatter {
          title
          category
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

export default categoryPosts