import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container";

import * as styles from '../styles/post.module.scss';


const blogPosts = ({data, pageContext}) => {
    const {frontmatter, body, excerpt} = data.mdx;
    const {previous, next} = pageContext;

    return (
        <Layout>
            <Seo title={frontmatter.title} description={excerpt} />
            <Container>
                <h1 className={styles.postHeading}>{frontmatter.title}</h1>
                <p className={styles.postDate}>{frontmatter.date}</p>
                <article className={styles.postBody}>
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </article>
                {(previous || next) ? (<h5>More posts:</h5>) : null }
                {previous === false ? null : (
                    <>
                        {previous && (
                            <Link to={previous.fields.slug}>
                                <button className={styles.previousNextButton}>{previous.frontmatter.title}</button>
                            </Link>
                        )}
                    </>
                )}
                {next === false ? null : (
                    <>
                        {next && (
                            <Link to={next.fields.slug}>
                                <button className={styles.previousNextButton}>{next.frontmatter.title}</button>
                            </Link>
                        )}
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default blogPosts

export const pageQuery  = graphql`
    query PostsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "Do MMMM YYYY ")
            }
            excerpt
        }
    }
`