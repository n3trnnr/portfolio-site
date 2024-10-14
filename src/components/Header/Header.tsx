import { useEffect, useState } from 'react';
import styles from './index.module.scss'
import logo from '../../assets/logo.svg'


const Header = () => {

    const [active, setActive] = useState<boolean>(false)
    const [size, setSize] = useState<number | null>(null)

    const [activeScroll, setActiveScroll] = useState<boolean>(false)
    const [scroll, setScroll] = useState<number | null>(null)

    useEffect(() => {
        const updateSize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateSize)

        setActive(false)
    }, [size])

    useEffect(() => {
        const updateScroll = () => {
            setScroll(window.scrollY)
        }

        window.addEventListener('scroll', updateScroll)

        if (scroll !== null && scroll >= 100) {
            setActiveScroll(true)
        } else if (scroll !== null && scroll === 0) {
            setActiveScroll(false)
        }
    }, [scroll])

    return (
        <header className={`${styles['header']} ${activeScroll && !active && styles['header__active']}`}>
            <div className={styles["header__inner"]}>
                <a href="#home" className={styles["header__logo"]} data-aos="fade-down">
                    <img src={logo} alt="logo" />
                </a>
                <nav className={`${styles["header__menu"]} ${active && styles['header__menu__active']}`}>
                    <ul className={styles["header__menu-list"]}>
                        <li onClick={() => setActive(!active)}>
                            <a className={styles["header__menu-item"]} href="#home">Главная</a>
                        </li>
                        <li onClick={() => setActive(!active)}>
                            <a className={styles["header__menu-item"]} href="#about">Обо мне</a>
                        </li>
                        <li onClick={() => setActive(!active)}>
                            <a className={styles["header__menu-item"]} href="#skills">Навыки</a>
                        </li>
                        <li onClick={() => setActive(!active)}>
                            <a className={styles["header__menu-item"]} href='#works'>Портфолио</a>
                        </li>
                        <li onClick={() => setActive(!active)}>
                            <a className={styles["header__menu-item"]} href='#contact'>Контакты</a>
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