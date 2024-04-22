import React from 'react'
import styles from './TeacherPage.module.scss'
import BarGraph from '../../components/BarGraph/BarGraph'
import ReadingTracker from '../../components/ReadingTracker/ReadingTracker'
import AssignmentCollapsible from '../../components/AssignmentCollapsible/AssignmentCollapsible'
import ClassCollapsible from '../../components/ClassCollapsible/ClassCollapsible'
import TeamCollapsible from '../../components/TeamCollapsible/TeamCollapsible'

function TeacherPage() {
  return (
    <div className={styles.TeacherPage}>
        <h1 className={styles.Header}>Welcome, <span className={styles.span}>Teacher</span>!</h1>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <BarGraph />
            <ReadingTracker />
          </div>
          <div className={styles.rightContainer}>
            <AssignmentCollapsible />
            <ClassCollapsible />
            <TeamCollapsible />
          </div>
        </div>
    </div>
  )
}

export default TeacherPage