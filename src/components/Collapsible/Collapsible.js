import { useState } from 'react'
import styles from './Collapsible.module.scss';

function Collapsible({ user }) {
    const [selected, setSelected] = useState(null)

    const data = [
        {
            gradeLevel: 'Kindergarten',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '1st Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '2nd Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '3rd Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '4th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '5th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '6th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '7th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '8th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '9th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '10th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '11th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        },
        {
            gradeLevel: '12th Grade',
            teachers: 'Teacher 1',
            students: 'Student 1'
        }
    ]

    const toggle = i => {
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.accordion}>
                {data.map((item, i) => (
                    <div className={`${styles.item} ${i === 0 ? styles.firstItem : ''} ${i === data.length - 1 ? styles.lastItem : ''}`} key={i}>
                        <div className={`${styles.title} ${i === 0 ? styles.firstTitle : ''} ${i === data.length - 1 ? styles.lastTitle : ''}`} onClick={() => toggle(i)}>
                            <h3>{item.gradeLevel}</h3>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={`${styles.content} ${selected === i ? styles.show : ''}`}>
                            <p>{item.teachers}</p>
                            <p>{item.students}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collapsible;
