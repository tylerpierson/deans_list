import { useRef, useState, useEffect } from 'react';
import styles from './Login.module.scss';

const LOGIN_URL = '/api/users/login';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
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
            const accessToken = responseData?.token; // Assuming the token key is 'token'
            
            // Save the token in localStorage
            localStorage.setItem('token', accessToken);
    
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
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
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
                        <label htmlFor="password">Password:</label>
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
                    <p>
                        Need an Account?<br />
                        <span className={styles.line}>
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default Login;
