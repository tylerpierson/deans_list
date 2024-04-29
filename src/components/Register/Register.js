import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Register.module.scss'; // Import your CSS module

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/users/admin';

const Register = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const campusNumRef = useRef();
    const roleRef = useRef(); // Ref for role input
    const errRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [campusNum, setCampusNum] = useState('');
    const [role, setRole] = useState('admin'); // State for role

    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [validCampusNum, setValidCampusNum] = useState(false);
    const [validRole, setValidRole] = useState(true); // Always valid for hard-coded role

    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
    const [campusNumFocus, setCampusNumFocus] = useState(false);
    const [roleFocus, setRoleFocus] = useState(false); // State for role focus

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    useEffect(() => {
        setValidFirstName(firstName.trim() !== '');
    }, [firstName]);

    useEffect(() => {
        setValidLastName(lastName.trim() !== '');
    }, [lastName]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    useEffect(() => {
        setValidConfirmPassword(confirmPassword === password);
    }, [confirmPassword, password]);

    useEffect(() => {
        setValidCampusNum(campusNum.trim() !== '');
    }, [campusNum]);

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, password, confirmPassword, campusNum]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword || !validCampusNum) {
            setErrMsg("Invalid Entry");
            return;
        }
    
        try {
            const response = await fetch(REGISTER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    campusNum,
                    role // Include role in the request body
                })
            });
    
            if (!response.ok) {
                throw new Error('Registration Failed');
            }
    
            const responseData = await response.json();
    
            // Save the token in localStorage
            localStorage.setItem('token', responseData.token);
    
            setSuccess(true);
    
            // Clear form fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setCampusNum('');
            // Role is hard-coded, no need to reset
        } catch (err) {
            setErrMsg(err.message || 'Registration Failed');
            errRef.current.focus();
        }
    };        

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        {/* First Name */}
                        <label htmlFor="firstName" className={styles.label}>
                            First Name:
                            <FontAwesomeIcon icon={faCheck} className={validFirstName ? styles.valid : styles.hide} />
                            <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? styles.hide : styles.invalid} />
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            ref={firstNameRef}
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                            aria-invalid={validFirstName ? "false" : "true"}
                            className={styles.input}
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}
                        />
                        <p id="firstNameNote" className={firstNameFocus && !validFirstName ? styles.instructions : styles.offscreen}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Please enter your first name.
                        </p>

                        {/* Last Name */}
                        <label htmlFor="lastName" className={styles.label}>
                            Last Name:
                            <FontAwesomeIcon icon={faCheck} className={validLastName ? styles.valid : styles.hide} />
                            <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? styles.hide : styles.invalid} />
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            ref={lastNameRef}
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                            aria-invalid={validLastName ? "false" : "true"}
                            className={styles.input}
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}
                        />
                        <p id="lastNameNote" className={lastNameFocus && !validLastName ? styles.instructions : styles.offscreen}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Please enter your last name.
                        </p>

                        {/* Email */}
                        <label htmlFor="email" className={styles.label}>
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? styles.valid : styles.hide} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? styles.hide : styles.invalid} />
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            className={styles.input}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="emailNote" className={emailFocus && !validEmail ? styles.instructions : styles.offscreen}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Please enter a valid email address.
                        </p>

                        {/* Password */}
                        <label htmlFor="password" className={styles.label}>
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPassword ? styles.valid : styles.hide} />
                            <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? styles.hide : styles.invalid} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            className={styles.input}
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <p id="passwordNote" className={passwordFocus && !validPassword ? styles.instructions : styles.offscreen}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Password must be 8 to 24 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                        </p>

                        {/* Confirm Password */}
                        <label htmlFor="confirmPassword" className={styles.label}>
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validConfirmPassword ? styles.valid : styles.hide} />
                            <FontAwesomeIcon icon={faTimes} className={validConfirmPassword || !confirmPassword ? styles.hide : styles.invalid} />
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            ref={confirmPasswordRef}
                            autoComplete="off"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            required
                            aria-invalid={validConfirmPassword ? "false" : "true"}
                            className={styles.input}
                            onFocus={() => setConfirmPasswordFocus(true)}
                            onBlur={() => setConfirmPasswordFocus(false)}
                        />
                        <p id="confirmPasswordNote" className={confirmPasswordFocus && !validConfirmPassword ? styles.instructions : styles.offscreen}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Please confirm your password.
                        </p>

                        {/* Campus Number */}
                        <label htmlFor="campusNum" className={styles.label}>
                            Campus Number:
                            <FontAwesomeIcon icon={faCheck} className={validCampusNum ? styles.valid : styles.hide} />
                            <FontAwesomeIcon icon={faTimes} className={validCampusNum || !campusNum ? styles.hide : styles.invalid} />
                        </label>
                        <input
                            type="text"
                            id="campusNum"
                            ref={campusNumRef}
                            autoComplete="off"
                            onChange={(e) => setCampusNum(e.target.value)}
                            value={campusNum}
                            required
                            aria-invalid={validCampusNum ? "false" : "true"}
                            className={styles.input}
                            onFocus={() => setCampusNumFocus(true)}
                            onBlur={() => setCampusNumFocus(false)}
                        />
                        <p id="campusNumNote" className={campusNumFocus && !validCampusNum ? styles.instructions : styles.offscreen}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Please enter your campus number.
                        </p>

                        {/* Role */}
                        <label htmlFor="role" className={styles.label}>
                            Role:
                            <FontAwesomeIcon icon={faCheck} className={styles.valid} /> {/* Always valid */}
                            <input
                                type="text"
                                id="role"
                                ref={roleRef}
                                autoComplete="off"
                                value={role}
                                readOnly
                                className={styles.input}
                                onFocus={() => setRoleFocus(true)}
                                onBlur={() => setRoleFocus(false)}
                            />
                        </label>
                        <p id="roleNote" className={roleFocus ? styles.instructions : styles.offscreen}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Role is set to 'admin'.
                        </p>

                        <button disabled={!validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword || !validCampusNum} className={styles.button}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className={styles.line}>
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
}

export default Register;
