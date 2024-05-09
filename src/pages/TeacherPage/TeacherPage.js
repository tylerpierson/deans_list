import { useState } from 'react'
import styles from './TeacherPage.module.scss'
import BarGraph from '../../components/BarGraph/BarGraph'
import TeacherReadingTracker from '../../components/TeacherReadingTracker/TeacherReadingTracker'
import AssignmentCollapsible from '../../components/AssignmentCollapsible/AssignmentCollapsible'
import ClassCollapsible from '../../components/ClassCollapsible/ClassCollapsible'
import TeamCollapsible from '../../components/TeamCollapsible/TeamCollapsible'

import ParentCreateForm from '../../components/ParentCreateForm/ParentCreateForm'
import StudentCreateForm from '../../components/StudentCreateForm/StudentCreateForm'

function TeacherPage({ 
    user, 
    setShowParentCreateForm, 
    showParentCreateForm,
    setShowStudentCreateForm,
    showStudentCreateForm
  }) {
  const toggleParentCreateForm = () => {
    setShowParentCreateForm(prevState => !prevState);
    setShowStudentCreateForm(false)
  };

  const toggleStudentCreateForm = () => {
    setShowStudentCreateForm(prevState => !prevState);
    setShowParentCreateForm(false)
  };

  return (
    <div className={styles.TeacherPage}>
        {showStudentCreateForm && (
          <div className={styles.createForm}>
            <StudentCreateForm user={user} setShowStudentCreateForm={setShowStudentCreateForm} />
          </div>
        )}
        {showParentCreateForm && (
          <div className={styles.createForm}>
            <ParentCreateForm user={user} setShowParentCreateForm={setShowParentCreateForm} />
          </div>
        )}
        <h1 className={styles.Header}>Welcome, <span className={styles.span}>{user.firstName}</span>!</h1>
        <div className={styles.addBtnContainer}>
          <button className={styles.addBtn} onClick={toggleStudentCreateForm}>Add Student</button>
          <button className={styles.addBtn} onClick={toggleParentCreateForm}>Add Parent</button>
        </div>
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