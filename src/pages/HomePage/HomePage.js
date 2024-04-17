import React from 'react'
import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <h2>The next step forward in <span>RTI</span></h2>
      <p>Response to Intervention (RTI) is a multi-tiered approach to identify and support students who are
          struggling academically or behaviorally. It focuses on early intervention, data-driven decision-making,
          and targeted support to improve student outcomes.</p>
      <p>At Dean's List, we leverage the power of data collection and analysis to enhance RTI implementation. By
          centralizing student data, tracking progress, and generating actionable insights, we empower educators,
          administrators, and parents to make informed decisions and provide personalized interventions.</p>
      <p>Our platform simplifies the process of data collection, allows for easy monitoring of student
          performance, and enables collaboration among stakeholders for effective intervention planning and
          implementation.</p>
    </div>
  )
}

export default HomePage