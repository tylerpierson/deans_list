import { useState } from 'react';
import styles from './AssignmentCollapsible.module.scss';

function AssignmentCollapsible() {
    const [selected, setSelected] = useState(null);

    const data = [
        {
            type: 'In Progress',
            assignments: [
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
            ]
        },
        {
            type: 'Completed',
            assignments: [
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
            ]
        }
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
                                {item.type === 'In Progress' && item.assignments.map((assignment, index) => (
                                    <>
                                    <div className={styles.innerContent} key={index}>
                                        <div className={styles.text}>
                                            <p className={styles.assignmentTitle}>{assignment.title}</p>
                                            <p className={styles.subject}>{assignment.subject}</p>
                                        </div>
                                        <p className={styles.date}>{assignment.createdAt}</p>
                                    </div>
                                    </>
                                ))}
                                {item.type !== 'In Progress' && item.assignments.map((assignment, index) => (
                                    <>
                                    <div className={styles.innerContent} key={index}>
                                        <div className={styles.text}>
                                            <p className={styles.assignmentTitle}>{assignment.title}</p>
                                            <p className={styles.subject}>{assignment.subject}</p>
                                        </div>
                                        <p className={styles.date}>{assignment.createdAt}</p>
                                    </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AssignmentCollapsible;
