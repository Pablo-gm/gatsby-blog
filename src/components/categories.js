import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/categories.module.scss';

const Categories = () => {
  const { allMdx: { distinct } } = useStaticQuery(query);

  return (
    <ul className={styles.categories}>
        <li className={styles.categoriesTitle}>Categories</li>
        {distinct.map((category, index) => {
            return (
            <li key={index}>
                <Link to={`/${category}`} activeClassName={styles.active}>
                    {category}
                </Link>
            </li>
            )
        })}
    </ul>
  )
}

export default Categories

export const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`