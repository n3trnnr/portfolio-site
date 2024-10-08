import React from 'react';
import styles from './Header.module.scss'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles["header__inner"]}>
                <a href="#!" className={styles["header__logo"]}>
                    SRDK
                </a>
                <nav className={styles["header__menu"]}>
                    <ul className={styles["header__menu-list"]}>
                        <li className={styles["header__menu-item"]}>
                            About Me
                        </li>
                        <li >
                            <a className={styles["header__menu-item"]} href='#works'>Works</a>
                        </li>
                        <li className={styles["header__menu-item"]}>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;