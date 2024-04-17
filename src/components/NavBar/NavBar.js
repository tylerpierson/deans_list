import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss' // Make sure the path is correct

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <ul className={styles.navList}> {/* Use styles.navList */}
        <li className={styles.navItem}><Link className={styles.Link} to="/">Home</Link></li> {/* Use styles.navItem */}
        <li className={styles.navItem}><Link className={styles.Link} to="/profile">Profile</Link></li> {/* Use styles.navItem */}
        <li className={styles.navItem}><Link className={styles.Link} to="/data">Data</Link></li> {/* Use styles.navItem */}
      </ul>
    </div>
  )
}

export default NavBar
