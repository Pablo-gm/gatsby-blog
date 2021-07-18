import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import * as styles from '../styles/card.module.scss'

 const Card = ({post, title}) => {
    return (
        <article className={styles.card}>
            <GatsbyImage image={getImage(post.frontmatter.preview)} alt={title} className="img" />
            <div className={styles.cardInfo}>
                <div>
                    <h4 className={styles.cardTitle}>{title}</h4>
                    <p className={styles.cardDate}>{post.frontmatter.date} &bull; <span className={styles.cardTag}>{post.frontmatter.category}</span></p>
                    <p className={styles.cardDescription}>{post.frontmatter.description}</p>
                </div>
                <div>
                    <Link className={styles.cardLink} to={`/${post.slug}`}>
                        Read more
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Card