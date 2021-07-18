import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import * as styles from '../styles/aboutsidebar.module.scss';

const aboutSidebar = () => {
    return (
        <div>
            <div className={styles.aboutTitle}>
                About me
            </div>
            <StaticImage src='../images/avatar.jpg' alt='About me' className={styles.aboutImg} />
            <div className={styles.aboutDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt.
            </div>
            <div className={styles.aboutSocialWrapper}>
                <a href="/" className={styles.aboutSocialLink} aria-label="Facebook"><FaFacebookSquare/></a>
                <a href="/" className={styles.aboutSocialLink} aria-label="Facebook"><FaTwitterSquare/></a>
                <a href="/" className={styles.aboutSocialLink} aria-label="Facebook"><FaInstagramSquare/></a>
            </div>
        </div>
    )
}

export default aboutSidebar
