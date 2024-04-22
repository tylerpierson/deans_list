import React from 'react'
import styles from './ReadingTracker.module.scss'

function ReadingTracker() {
  return (
    <div className={styles.ReadingTracker}>
        <div className={styles.headerContainer}>
            <h3 className={styles.header}>Reading Levels</h3>
        </div>
        <div className={styles.scoringContainer}>

        </div>
        <div className={styles.teacherSelector}>

        </div>
    </div>
  )
}

export default ReadingTracker