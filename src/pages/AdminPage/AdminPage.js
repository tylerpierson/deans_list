import React from 'react'
import styles from './AdminPage.module.scss'
import BarGraph from '../../components/BarGraph/BarGraph'
import Collapsible from '../../components/Collapsible/Collapsible'

function AdminPage() {
  return (
    <div className={styles.AdminPage}>
        <h1 className={styles.Header}>Welcome, <span className={styles.span}>Admin</span>!</h1>
        <div className={styles.leftContainer}>
            <BarGraph />
        </div>
        <div className={styles.rightContainer}>
          <Collapsible label="Introduction">
            <h1>introduction</h1>
            <p>
              The collapsible component puts long sections of the information under a
              block enabling users to expand or collapse to access its details.
            </p>
          </Collapsible>
          <hr />
          <Collapsible label="Prerequisite">
            <h1>Prerequisite</h1>
            <p>
              I am going to assume that you know the basics like how a component works,
              how useState works, and how to set up React. I will only focus on building
              the project and though this is for an absolute beginner who would like to
              know how useEffect and useRef work.
            </p>
          </Collapsible>
          <hr />
          <Collapsible label="Goals ">
            <h1>Goals</h1>
            <p>
              This article will teach you more about the useState hook, useRef hook, and
              animation in React; we will make simple React collapsible components, useful
              for all kinds of apps. This collapsible element can be shown or hidden by
              clicking a button.
            </p>
          </Collapsible>
        </div>
    </div>
  )
}

export default AdminPage