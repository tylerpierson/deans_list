import { useState } from 'react';
import styles from './SubjectCollapsible.module.scss';

function SubjectCollapsible() {
    const [selected, setSelected] = useState(null);

    const data = [
        {
            type: 'Math',
            currentAssignments: [
                {
                    title: 'Fractions Assignment #1',
                    subject: 'Math',
                    createdAt: '12/22/2023'
                },
                {
                    title: 'History Essay',
                    subject: 'Social Studies',
                    createdAt: '12/1/2023'
                },
            ],
            completedAssignments: [
                {
                    title: 'Math thing',
                    subject: 'Math',
                    createdAt: '12/1/2023'
                },
            ]
        },
        {
            type: 'Science',
            currentAssignments: [
                {
                    title: 'Weather Patterns',
                    subject: 'Science',
                    createdAt: '11/12/2023'
                },
                {
                    title: 'Harry Potter ch.6',
                    subject: 'Reading',
                    createdAt: '8/17/2023'
                },
            ],
            completedAssignments: [
                {
                    title: 'Science Lab Report',
                    subject: 'Science',
                    createdAt: '10/5/2023'
                },
            ]
        },
        {
            type: 'Reading',
            currentAssignments: [
                {
                    title: 'To Kill a Mockingbird',
                    subject: 'Reading',
                    createdAt: '9/30/2023'
                },
                {
                    title: 'Great Expectations',
                    subject: 'Reading',
                    createdAt: '11/15/2023'
                },
            ],
            completedAssignments: [
                {
                    title: 'Harry Potter and the Philosopher\'s Stone',
                    subject: 'Reading',
                    createdAt: '8/3/2023'
                },
            ]
        },
        // Add other subjects similarly
    ];

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.accordion}>
                <h2 className={styles.header}>Assignments</h2>
                {data.map((item, i) => (
                    <div className={`${styles.item} ${i === 0 ? styles.firstItem : ''} ${i === data.length - 1 ? styles.lastItem : ''}`} key={i}>
                        <div className={`${styles.title} ${i === 0 ? styles.firstTitle : ''} ${i === data.length - 1 ? styles.lastTitle : ''}`} onClick={() => toggle(i)}>
                            <h3>{item.type}</h3>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={`${styles.content} ${selected === i ? styles.show : ''}`}>
                            <div className={styles.contentContainer}>
                                <div className={styles.section}>
                                    <h4>Current Assignments</h4>
                                    <ul>
                                        {item.currentAssignments.map((assignment, index) => (
                                            <li key={index}>
                                                <p>{assignment.title}</p>
                                                <p>{assignment.subject}</p>
                                                <p>{assignment.createdAt}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.section}>
                                    <h4>Completed Assignments</h4>
                                    <ul>
                                        {item.completedAssignments.map((assignment, index) => (
                                            <li key={index}>
                                                <p>{assignment.title}</p>
                                                <p>{assignment.subject}</p>
                                                <p>{assignment.createdAt}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubjectCollapsible;
