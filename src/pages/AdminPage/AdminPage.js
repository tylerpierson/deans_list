import React from 'react'
import styles from './AdminPage.module.scss'
import BarGraph from '../../components/BarGraph/BarGraph'
import Collapsible from '../../components/Collapsible/Collapsible'

function AdminPage() {
  return (
    <div className={styles.AdminPage}>
        <h1 className={styles.Header}>Welcome, <span className={styles.span}>Admin</span>!</h1>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
              <BarGraph />
          </div>
          <div className={styles.rightContainer}>
            <Collapsible />
          </div>
        </div>
    </div>
  )
}

export default AdminPage