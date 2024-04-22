import { useState } from 'react';
import styles from './TeamCollapsible.module.scss';

function TeamCollapsible() {
    const [selected, setSelected] = useState(null);

    const data = [
        {
            classTitle: 'Mr. Johnson',
            students: [
                {
                    name: 'Johnny'
                },
                {
                    name: 'Sally'
                },
            ]
        },
        {
            classTitle: 'Mrs. Horn',
            students: [
                {
                    name: 'Jimmy'
                },
                {
                    name: 'Susie'
                },
            ]
        },
        {
            classTitle: 'Mrs. Wade',
            students: [
                {
                    name: 'Dylan'
                },
                {
                    name: 'Marie'
                },
            ]
        },
        {
            classTitle: 'Mr. Pierson',
            students: [
                {
                    name: 'Reese'
                },
                {
                    name: 'Dean'
                },
            ]
        },
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
                <h2 className={styles.header}>Team</h2>
                {data.map((item, i) => (
                    <div className={`${styles.item} ${i === 0 ? styles.firstItem : ''} ${i === data.length - 1 ? styles.lastItem : ''}`} key={i}>
                        <div className={`${styles.title} ${i === 0 ? styles.firstTitle : ''} ${i === data.length - 1 ? styles.lastTitle : ''}`} onClick={() => toggle(i)}>
                            <h3>{item.classTitle}</h3>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={`${styles.content} ${selected === i ? styles.show : ''}`}>
                            <div className={styles.contentContainer}>
                                {item.students.map((student, index) => (
                                    <div key={index}>
                                        <p className={styles.studentName}>{student.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamCollapsible;
