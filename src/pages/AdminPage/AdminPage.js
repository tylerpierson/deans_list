import React, { useState } from 'react';
import styles from './AdminPage.module.scss';
import BarGraph from '../../components/BarGraph/BarGraph';
import AdminReadingTracker from '../../components/AdminReadingTracker/AdminReadingTracker';
import Collapsible from '../../components/Collapsible/Collapsible';

import AdminCreateForm from '../../components/AdminCreateForm/AdminCreateForm'
import TeacherCreateForm from '../../components/TeacherCreateForm/TeacherCreateForm'
import ParentCreateForm from '../../components/ParentCreateForm/ParentCreateForm'
import StudentCreateForm from '../../components/StudentCreateForm/StudentCreateForm'

function AdminPage({ 
    user, 
    setShowAdminCreateForm, 
    showAdminCreateForm,
    setShowParentCreateForm, 
    showParentCreateForm,
    setShowStudentCreateForm, 
    showStudentCreateForm,
    setShowTeacherCreateForm,
    showTeacherCreateForm
   }) {
  const toggleAdminCreateForm = () => {
    setShowAdminCreateForm(prevState => !prevState);
    setShowTeacherCreateForm(false)
    setShowParentCreateForm(false)
    setShowStudentCreateForm(false)
  };

  const toggleTeacherCreateForm = () => {
    setShowTeacherCreateForm(prevState => !prevState);
    setShowAdminCreateForm(false)
    setShowParentCreateForm(false)
    setShowStudentCreateForm(false)
  };

  const toggleParentCreateForm = () => {
    setShowParentCreateForm(prevState => !prevState);
    setShowTeacherCreateForm(false)
    setShowAdminCreateForm(false)
    setShowStudentCreateForm(false)
  };

  const toggleStudentCreateForm = () => {
    setShowStudentCreateForm(prevState => !prevState);
    setShowTeacherCreateForm(false)
    setShowParentCreateForm(false)
    setShowAdminCreateForm(false)
  };

  return (
    <div className={styles.AdminPage}>
      {showAdminCreateForm && (
        <div className={styles.createForm}>
          <AdminCreateForm user={user} setShowAdminCreateForm={setShowAdminCreateForm} />
        </div>
      )}
      {showTeacherCreateForm && (
        <div className={styles.createForm}>
          <TeacherCreateForm user={user} setShowTeacherCreateForm={setShowTeacherCreateForm} />
        </div>
      )}
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
      <h1 className={styles.Header}>
        Welcome, <span className={styles.span}>{user.firstName}</span>!
      </h1>
      <div className={styles.addBtnContainer}>
        <button className={styles.addBtn} onClick={toggleAdminCreateForm}>Add Admin</button>
        <button className={styles.addBtn} onClick={toggleTeacherCreateForm}>Add Teacher</button>
        <button className={styles.addBtn} onClick={toggleStudentCreateForm}>Add Student</button>
        <button className={styles.addBtn} onClick={toggleParentCreateForm}>Add Parent</button>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <BarGraph />
          <AdminReadingTracker />
        </div>
        <div className={styles.rightContainer}>
          <Collapsible user={user} />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;