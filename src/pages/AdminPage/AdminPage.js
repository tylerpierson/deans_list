import React from 'react'
import styles from './AdminPage.module.scss'
import BarGraph from '../../components/BarGraph/BarGraph'
import AdminReadingTracker from '../../components/AdminReadingTracker/AdminReadingTracker'
import Collapsible from '../../components/Collapsible/Collapsible'

function AdminPage({ user }) {
  return (
    <div className={styles.AdminPage}>
        <h1 className={styles.Header}>Welcome, <span className={styles.span}>{user.firstName}</span>!</h1>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <BarGraph />
            <AdminReadingTracker />
          </div>
          <div className={styles.rightContainer}>
            <Collapsible />
          </div>
        </div>
    </div>
  )
}

export default AdminPage