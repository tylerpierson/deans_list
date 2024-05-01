import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.scss';
import * as userService from '../../utilities/users-service';

function NavBar({ user, setUser }) { // Combine all props into a single object
    const navigateTo = useNavigate()

    useEffect(() => {
        const navbar = document.querySelector(`.${styles.NavBar}`);

        let lastScrollTop = 0;

        const handleScroll = () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                navbar.classList.add(styles.scrollDown);
            } else {
                navbar.classList.remove(styles.scrollDown);
            }

            lastScrollTop = scrollTop < 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleLogOut() {
        userService.logOut();
        setUser(null)
        navigateTo('/')
    }

    console.log(user)

    return (
        <div className={styles.NavBar}>
            <div className={styles.innerNav}>
                <label className={styles.label}>
                    Search
                    <input className={styles.search} type="text" />
                </label>
                <Link className={styles.LogoLink} to="/">
                    <div className={styles.LogoContainer}>
                        <div className={styles.LogoInnerContainer}>
                            <img className={styles.Logo} src="/img/logo.jpg" alt="Dean's Logo" />
                        </div>
                    </div>
                </Link>
                <ul className={styles.navList}>
                    <Link className={styles.Link} to="/">
                        <div className={styles.iconContainer}>
                            <img className={styles.homeIcon} src="/img/home-logo-navy.png" alt="Home Icon" />
                            <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                        </div>
                    </Link>
                    {
                        user && user.role === 'admin' ? 
                        <Link className={styles.Link} to="/admin">
                            <div className={styles.iconContainer}>
                                <img className={styles.homeIcon} src="/img/profile-logo-navy.png" alt="Profile Icon" />
                                <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                            </div>
                        </Link> : 
                        user && user.role === 'teacher' ? 
                        <Link className={styles.Link} to="/teacher">
                            <div className={styles.iconContainer}>
                                <img className={styles.homeIcon} src="/img/profile-logo-navy.png" alt="Profile Icon" />
                                <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                            </div>
                        </Link> : 
                        user && user.role === 'parent' ? 
                        <Link className={styles.Link} to="/parent">
                            <div className={styles.iconContainer}>
                                <img className={styles.homeIcon} src="/img/profile-logo-navy.png" alt="Profile Icon" />
                                <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                            </div>
                        </Link> :
                        user && user.role === 'student' ? 
                        <Link className={styles.Link} to="/student">
                            <div className={styles.iconContainer}>
                                <img className={styles.homeIcon} src="/img/profile-logo-navy.png" alt="Profile Icon" />
                                <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                            </div>
                        </Link> : ''                     
                    }
                    { !user ? '' :                    
                        <Link className={styles.Link} to="/data">
                            <div className={styles.iconContainer}>
                                <img className={styles.homeIcon} src="/img/data-logo-navy.png" alt="Data Icon" />
                                <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                            </div>
                        </Link>
                    }
                    { !user ? 
                        <Link className={styles.Link} to="/auth">
                            <div className={styles.iconContainer}>
                                <img className={styles.homeIcon} src="/img/login-navy.png" alt="Login Icon" />
                                <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                            </div>
                        </Link> : 
                    <>        
                        <Link className={styles.Link} to="/" onClick={handleLogOut}>
                            <div className={styles.iconContainer}>
                                <img className={styles.homeIcon} src="/img/logout-navy.png" alt="Login Icon" />
                                <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                            </div>
                        </Link>            
                        <div className={styles.userInfo}>
                            <div className={styles.name}>{user.firstName} {user.lastName}</div>
                            <div className={styles.email}>{user.role}</div>
                        </div>
                    </>
                    }
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
