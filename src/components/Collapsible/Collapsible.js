import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Collapsible.module.scss';

function Collapsible({ user, token }) {
    const [selected, setSelected] = useState(null);

    const REGISTER_URL = '/api/users';

    // Check if user and user.teachers are properly initialized
    if (!user || !user.teachers || !user.students) {
        return null; // or render a loading indicator, an error message, or handle this condition as needed
    }

    // Extract unique grade levels from all teachers
    let gradeLevels = Array.from(new Set(user.teachers.map(teacher => teacher.gradeLevel)));

    // Sort grade levels
    gradeLevels.sort((a, b) => {
        if (a === "Pre-K") {
            return -1; // "Pre-K" should come first
        } else if (b === "Pre-K") {
            return 1; // "Pre-K" should come first
        } else if (a === "K" && b !== "Pre-K") {
            return -1; // "K" should come after "Pre-K"
        } else if (b === "K" && a !== "Pre-K") {
            return 1; // "K" should come after "Pre-K"
        } else {
            // Sort numerically for other grade levels
            const numericA = parseInt(a.match(/\d+/)[0]);
            const numericB = parseInt(b.match(/\d+/)[0]);
            return numericA - numericB;
        }
    });

    // Organize data based on grade levels
    const data = gradeLevels.map(gradeLevel => {
        const teachersInGradeLevel = user.teachers.filter(teacher => teacher.gradeLevel === gradeLevel);
        const studentsInGradeLevel = user.students.filter(student =>
            teachersInGradeLevel.some(teacher => student.teachers.includes(teacher._id))
        );
        const teachersWithStudents = teachersInGradeLevel.map(teacher => {
            const students = studentsInGradeLevel.filter(student => student.teachers.includes(teacher._id));
            const studentsNames = students.map(student => `${student.firstName} ${student.lastName}`);
            return {
                ...teacher,
                students: students
            };
        });
        return { gradeLevel, teachers: teachersWithStudents };
    });

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${REGISTER_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Deletion Failed');
            }
            // Handle success, e.g., update UI, refresh data
        } catch (err) {
            console.error(err); // Log the error to the console
            // Handle error, e.g., display error message to user
        }
    };

    const toggle = i => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.accordion}>
                {data.map((gradeData, i) => (
                    <div className={`${styles.item} ${i === 0 ? styles.firstItem : ''} ${i === data.length - 1 ? styles.lastItem : ''}`} key={i}>
                        <div className={`${styles.title} ${i === 0 ? styles.firstTitle : ''} ${i === data.length - 1 ? styles.lastTitle : ''}`} onClick={() => toggle(i)}>
                            <h3>{gradeData.gradeLevel}</h3>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={`${styles.content} ${selected === i ? styles.show : ''}`}>
                            {gradeData.teachers.map((teacher, j) => (
                                <div key={j}>
                                    <p>
                                        <Link to={`/teachers/${teacher._id}`}>
                                            {`${teacher.firstName} ${teacher.lastName}`}
                                        </Link>
                                        <button onClick={() => handleDelete(teacher._id)}>Delete Teacher</button>
                                    </p>
                                    <ul>
                                        {teacher.students.map((student, k) => (
                                            <li key={k}>
                                                {student.firstName} {student.lastName}
                                                <button onClick={() => handleDelete(student._id)}>Delete Student</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collapsible;
