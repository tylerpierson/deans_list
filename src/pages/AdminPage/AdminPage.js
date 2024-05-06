import React, { useState } from 'react';
import styles from './AdminPage.module.scss';
import BarGraph from '../../components/BarGraph/BarGraph';
import AdminReadingTracker from '../../components/AdminReadingTracker/AdminReadingTracker';
import Collapsible from '../../components/Collapsible/Collapsible';

import AdminCreateForm from '../../components/AdminCreateForm/AdminCreateForm'
import TeacherCreateForm from '../../components/TeacherCreateForm/TeacherCreateForm'
import ParentCreateForm from '../../components/ParentCreateForm/ParentCreateForm'
import StudentCreateForm from '../../components/StudentCreateForm/StudentCreateForm'

function AdminPage({ user }) {
  const [showAdminCreateForm, setShowAdminCreateForm] = useState(false);
  const [showTeacherCreateForm, setShowTeacherCreateForm] = useState(false);
  const [showParentCreateForm, setShowParentCreateForm] = useState(false);
  const [showStudentCreateForm, setShowStudentCreateForm] = useState(false);

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
      <h1 className={styles.Header}>
        Welcome, <span className={styles.span}>{user.firstName}</span>!
      </h1>
      <button onClick={toggleAdminCreateForm}>Add Admin</button>
      <button onClick={toggleTeacherCreateForm}>Add Teacher</button>
      <button onClick={toggleParentCreateForm}>Add Parent</button>
      <button onClick={toggleStudentCreateForm}>Add Student</button>
      {showAdminCreateForm && (
        <div className={styles.createForm}>
          <AdminCreateForm user={user} setShowAdminCreateForm={setShowAdminCreateForm} />
        </div>
      )}
      {showTeacherCreateForm && (
        <div className={styles.createForm}>
          <TeacherCreateForm />
        </div>
      )}
      {showParentCreateForm && (
        <div className={styles.createForm}>
          <ParentCreateForm />
        </div>
      )}
      {showStudentCreateForm && (
        <div className={styles.createForm}>
          <StudentCreateForm />
        </div>
      )}
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