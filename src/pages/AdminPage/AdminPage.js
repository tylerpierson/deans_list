import React from 'react'
import styles from './AdminPage.module.scss'

function AdminPage() {
  return (
    <div className={styles.AdminPage}>
        <h1 className={styles.Header}>Welcome, <span className={styles.span}>Admin</span>!</h1>
        <div className={styles.leftContainer}>
            <div className={styles.graphContainer}>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>KG</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>1st</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>2nd</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>3rd</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>4th</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>5th</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>6th</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>7th</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>8th</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>9th</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>10th</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>11th</p>
                </div>
                <div className={styles.gradeContainer}>
                    <div className={styles.bar}>
                        <div className={styles.barColor}></div>
                    </div>
                    <p className={styles.grade}>12th</p>
                </div>
            </div>
        </div>
        <div className={styles.rightContainer}>

        </div>
    </div>
  )
}

export default AdminPage