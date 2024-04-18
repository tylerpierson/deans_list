import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss' // Make sure the path is correct

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <img className={styles.Logo} src="/img/deans_logo2.png"/>
      <ul className={styles.navList}> {/* Use styles.navList */}
        <Link className={styles.Link} to="/"><div className={styles.iconContainer}><img className={styles.homeIcon} src="/img/home-logo-navy.png"/><img className={styles.outerIcon} src="/img/outer-circle.png"/></div></Link>
        <Link className={styles.Link} to="/profile"><div className={styles.iconContainer}><img className={styles.homeIcon} src="/img/profile-logo-navy.png"/><img className={styles.outerIcon} src="/img/outer-circle.png"/></div></Link>
        <Link className={styles.Link} to="/data"><div className={styles.iconContainer}><img className={styles.homeIcon} src="/img/data-logo-navy.png"/><img className={styles.outerIcon} src="/img/outer-circle.png"/></div></Link>
      </ul>
    </div>
  )
}

export default NavBar
