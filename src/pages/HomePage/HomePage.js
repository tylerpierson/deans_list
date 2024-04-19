import React from 'react'
import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div class={styles.introContainer}>
        <h2 className={styles.heading}>The next step forward in <span className={styles.span}>RTI</span></h2>
        <div className={styles.introAndImgContainer}>
          <p className={styles.intro}>Welcome to <span className={styles.titleSpan}>Dean's List</span>! We are a dedicated team passionate about transforming Response to Intervention (RTI) and improving educational outcomes for all students.
          At Dean's List, we believe in the power of data-driven decision-making and personalized interventions to support students who are struggling academically or behaviorally. Our mission is to provide educators, administrators, and parents with an intuitive platform that simplifies the RTI process and empowers them to make informed choices.
          By centralizing student data, tracking progress, and generating actionable insights, we aim to revolutionize RTI implementation. Our platform streamlines data collection, facilitates easy monitoring of student performance, and promotes collaboration among stakeholders for effective intervention planning and implementation.
          We understand the challenges faced by educators and the importance of timely, targeted interventions. With Dean's List, you can access a comprehensive toolkit to identify at-risk students, monitor their progress, and implement evidence-based strategies to unlock their full potential.
          Join us on this journey as we work together to create a supportive and inclusive learning environment where every student can thrive. Together, we can make a lasting impact in education through the power of RTI.</p>
          <img className={styles.owlImage} src="/img/owl-image-prime.png"/>
        </div>
        <button className={styles.button}>Request Access TODAY!</button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textImageContainer}>
          <p className={styles.p}>Response to Intervention (RTI) is a multi-tiered approach to identify and support students who are
              struggling academically or behaviorally. It focuses on early intervention, data-driven decision-making,
              and targeted support to improve student outcomes.
          </p>
          <img className={styles.image} src='/img/class.jpg' alt="class image"/>
        </div>
        <div className={styles.textImageContainer}>
          <p className={styles.p}>At Dean's List, we leverage the power of data collection and analysis to enhance RTI implementation. By
              centralizing student data, tracking progress, and generating actionable insights, we empower educators,
              administrators, and parents to make informed decisions and provide personalized interventions.
          </p>
          <img className={styles.image} src="/img/student_one.jpg"/>
        </div>
        <div className={styles.textImageContainer}>
          <p className={styles.p}>Our platform simplifies the process of data collection, allows for easy monitoring of student
              performance, and enables collaboration among stakeholders for effective intervention planning and
              implementation.
          </p>
          <img className={styles.image} src="/img/student_two.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default HomePage