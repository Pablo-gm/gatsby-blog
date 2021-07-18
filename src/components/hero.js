import React from 'react'
import * as styles from '../styles/hero.module.scss'

const hero = () => {
    return (
        <div className={styles.heroBg}>
            <h2>Travel, Tips and Tricks from around the world</h2>
            <p>A blog focused on travel and lifestyle</p>
            <p className={styles.heroName}>By John Doe</p>
        </div>
    )
}

export default hero
