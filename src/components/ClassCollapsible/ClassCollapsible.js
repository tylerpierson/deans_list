import { useState } from 'react';
import styles from './ClassCollapsible.module.scss';

function ClassCollapsible({ user, token }) {
    const [selected, setSelected] = useState(null);

    // Create a new data array with the first item as "Homeroom" containing all students
    const data = [
        {
            classTitle: 'Homeroom',
            students: user ? user.students : []
        },
        ...(user && user.switchPartners ? user.switchPartners.map((teacher, index) => ({
            classTitle: `${teacher.lastName}'s Homeroom (Switch Class)`, // corrected line
            students: teacher ? teacher.students.map((student, index) => ({
                firstName: student.firstName // Assigning student's first name to a key
            })) : []            
        })) : [])
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
                <h2 className={styles.header}>Classes</h2>
                {data.map((item, i) => (
                    <div className={`${styles.item} ${i === 0 ? styles.firstItem : ''} ${i === data.length - 1 ? styles.lastItem : ''}`} key={i}>
                        <div className={`${styles.title} ${i === 0 ? styles.firstTitle : ''} ${i === data.length - 1 ? styles.lastTitle : ''}`} onClick={() => toggle(i)}>
                            <h3>{item.classTitle}</h3>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={`${styles.content} ${selected === i ? styles.show : ''}`}>
                            <div className={styles.contentContainer}>
                            {item.students && Array.isArray(item.students) && (
                                <ul>
                                    {item.students.sort((a, b) => (a.lastName || '').localeCompare(b.lastName || '')).map((student, k) => {
                                        // Check if the student belongs to the homeroom teacher
                                        const belongsToHomeroom = item.classTitle === 'Homeroom' || item.classTitle.startsWith(student.lastName);
                                        
                                        return (
                                            <li key={student._id}>
                                                {belongsToHomeroom ? 
                                                    `${student.lastName}, ${student.firstName}` : // Render as usual if it's Homeroom or switch class
                                                    // Render switch class with student from the respective teacher's students array
                                                    item.students.map((switchStudent, index) => {
                                                        if (switchStudent && switchStudent.firstName) {
                                                            `${switchStudent.firstName}`
                                                        } else {
                                                            return null; // Return null for undefined values
                                                        }
                                                    })
                                                }
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClassCollapsible;
