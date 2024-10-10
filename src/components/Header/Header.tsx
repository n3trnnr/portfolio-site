import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'


const Header = () => {

    const [active, setActive] = useState<boolean>(false)
    const [size, setSize] = useState<number | null>(null)

    useEffect(() => {
        const updateSize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateSize)

        if (size !== null && size >= 1230) {
            setActive(false)
        }
    }, [size])

    return (
        <header className={styles['header']}>
            <div className={styles["header__inner"]}>
                <a href="#!" className={styles["header__logo"]}>
                    SRDK
                </a>
                <nav className={`${styles["header__menu"]} ${active && styles['header__menu__active']}`}>
                    <ul className={styles["header__menu-list"]}>
                        <li onClick={() => setActive(!active)}>
                            <a className={styles["header__menu-item"]} href="#me">About Me</a>
                        </li>
                        <li onClick={() => setActive(!active)}>
                            <a className={styles["header__menu-item"]} href='#works'>Works</a>
                        </li>
                        <li onClick={() => setActive(!active)}>
                            <a className={styles["header__menu-item"]} href='#contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div onClick={() => setActive(!active)} className={styles['burger-menu']}>
                    <div className={`${styles['burger-menu__item']} ${active && styles['burger-menu__item__active']}`}></div>
                    <div className={`${styles['burger-menu__item']} ${active && styles['burger-menu__item__active']}`}></div>
                    <div className={`${styles['burger-menu__item']} ${active && styles['burger-menu__item__active']}`}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;