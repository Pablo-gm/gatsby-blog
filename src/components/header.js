import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";
import * as styles from '../styles/header.module.scss';

const Header = ({ siteTitle }) => {
  const [moving, setMoving] = React.useState(false);

  React.useEffect( () => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setMoving(window.pageYOffset > 200)
      );
    }
  }, [] );

  return (
    <header className={`${styles.stickyNav} ${moving ? styles.moving : '' }`}>
      <div className={styles.stickyNavWrapper}>
        <Link to="/" className={styles.stickyNavTitle}>{siteTitle}</Link>
        <div>
          <Link to="/" className={styles.stickyNavButton} activeClassName={styles.active}>
            Home
          </Link>
          <Link to="/blog" className={styles.stickyNavButton} activeClassName={styles.active}>
            Blog
          </Link>
          <Link to="/contact" className={styles.stickyNavButton} activeClassName={styles.active}>
            Contact
          </Link>
          <Link to="/about" className={styles.stickyNavButton} activeClassName={styles.active}>
            About
          </Link>
        </div>
      </div>
    </header>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
