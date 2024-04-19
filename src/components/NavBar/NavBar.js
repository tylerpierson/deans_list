import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar() {
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
                            <h2 className={styles.logoTitle}>Dean's</h2>
                            <img className={styles.Logo} src="/img/deans_logo2.png" alt="Dean's Logo" />
                            <h2 className={styles.logoTitle}>List</h2>
                        </div>
                        <p className={styles.p}>Response to Intervention</p>
                    </div>
                </Link>
                <ul className={styles.navList}>
                    <Link className={styles.Link} to="/">
                        <div className={styles.iconContainer}>
                            <img className={styles.homeIcon} src="/img/home-logo-navy.png" alt="Home Icon" />
                            <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                        </div>
                    </Link>
                    <Link className={styles.Link} to="/profile">
                        <div className={styles.iconContainer}>
                            <img className={styles.homeIcon} src="/img/profile-logo-navy.png" alt="Profile Icon" />
                            <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                        </div>
                    </Link>
                    <Link className={styles.Link} to="/data">
                        <div className={styles.iconContainer}>
                            <img className={styles.homeIcon} src="/img/data-logo-navy.png" alt="Data Icon" />
                            <img className={styles.outerIcon} src="/img/outer-circle.png" alt="Outer Circle" />
                        </div>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;

