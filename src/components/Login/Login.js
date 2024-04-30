import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Login.module.scss';

const LOGIN_URL = '/api/users/login';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = ({ toggleLoginForm, setUser }) => {
    const navigateTo = useNavigate()
    const emailRef = useRef();
    const passwordRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!EMAIL_REGEX.test(email)) {
            setErrMsg('Please enter a valid email address.');
            return;
        }
    
        try {
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });
    
            if (!response.ok) {
                throw new Error('Login Failed');
            }
    
            const responseData = await response.json();
            const accessToken = responseData?.token;
    
            // Save the token in localStorage
            localStorage.setItem('token', accessToken);
    
            // Fetch user data based on email
            const userResponse = await fetch(`/api/users?email=${email}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
    
            if (!userResponse.ok) {
                throw new Error('Failed to fetch user data');
            }
    
            const userData = await userResponse.json();
    
            // Set user data
            setUser({
                firstName: userData.firstName,
                email: userData.email,
                // Add other user data properties if needed
            });
    
            // Log the user data
            console.log(userData);
    
            // Navigate to the home page
            navigateTo('/');
    
            // Handle authentication logic here
            setSuccess(true);
        } catch (err) {
            setErrMsg(err.message || 'Login Failed');
            errRef.current.focus();
        }        
    };
    
    
    

    return (
        <>
            {success ? (
                <section className={styles.section}>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a className={styles.a} href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className={styles.section}>
                    <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className={styles.input}
                        />
                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className={styles.input}
                        />
                        <button className={styles.button}>Sign In</button>
                    </form>
                    <p className={styles.togglePara}>
                        Need an Account?<br />
                        <span className={styles.line} onClick={toggleLoginForm}>
                            {/*put router link here*/}
                            <a className={styles.a} href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default Login;
