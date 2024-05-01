import React from 'react'
import styles from './TeacherPage.module.scss'
import BarGraph from '../../components/BarGraph/BarGraph'
import TeacherReadingTracker from '../../components/TeacherReadingTracker/TeacherReadingTracker'
import AssignmentCollapsible from '../../components/AssignmentCollapsible/AssignmentCollapsible'
import ClassCollapsible from '../../components/ClassCollapsible/ClassCollapsible'
import TeamCollapsible from '../../components/TeamCollapsible/TeamCollapsible'

function TeacherPage({ user }) {
  return (
    <div className={styles.TeacherPage}>
        <h1 className={styles.Header}>Welcome, <span className={styles.span}>{user.firstName}</span>!</h1>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <BarGraph />
            <TeacherReadingTracker />
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