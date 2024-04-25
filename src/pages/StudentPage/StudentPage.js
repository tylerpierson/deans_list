import React from 'react'
import styles from './StudentPage.module.scss'
import SubjectCollapsible from '../../components/SubjectCollapsible/SubjectCollapsible'

function StudentPage() {
  return (
    <div className={styles.StudentPage}>
        <h1 className={styles.Header}>Welcome, <span className={styles.span}>Student</span>!</h1>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <SubjectCollapsible />
          </div>
          <div className={styles.rightContainer}>

          </div>
        </div>
    </div>
  )
}

export default StudentPage