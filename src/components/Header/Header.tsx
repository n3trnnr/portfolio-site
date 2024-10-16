import { useEffect, useState } from 'react';
import styles from './index.module.scss'
import logo from '../../assets/logo/logo.svg'
import logoMobile from '../../assets/logo/logo-mobile.svg'

const Header = () => {

    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false)
    const [width, setWidth] = useState<number | null>(null)

    const [activeScroll, setActiveScroll] = useState<boolean>(false)
    const [scroll, setScroll] = useState<number>(0)

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)

        setShowBurgerMenu(false)
    }, [width])

    useEffect(() => {
        const updateScroll = () => {
            setScroll(Math.round(window.scrollY))
        }

        window.addEventListener('scroll', updateScroll)

        if (scroll > 0) {
            setActiveScroll(true)
        } else {
            setActiveScroll(false)
        }
    }, [scroll])

    return (
        <header className={`${styles['header']} ${activeScroll && !showBurgerMenu && styles['header__active']}`}>
            <div className={styles["header__inner"]}>

                <a href="#home" className={styles["header__logo"]} data-aos="fade-down" data-aos-once='true'>
                    <picture>
                        <source media="(max-width:799px)" srcSet={logoMobile} />
                        <img src={logo} alt="logo" />
                    </picture>
                </a>

                <nav className={`${styles["header__menu"]} ${showBurgerMenu && styles['header__menu__active']}`}>
                    <ul className={styles["header__menu-list"]}>
                        <li onClick={() => setShowBurgerMenu(false)}>
                            <a className={styles["header__menu-item"]} href="#home">Главная</a>
                        </li>
                        <li onClick={() => setShowBurgerMenu(false)}>
                            <a className={styles["header__menu-item"]} href="#about">Обо мне</a>
                        </li>
                        <li onClick={() => setShowBurgerMenu(false)}>
                            <a className={styles["header__menu-item"]} href="#skills">Навыки</a>
                        </li>
                        <li onClick={() => setShowBurgerMenu(false)}>
                            <a className={styles["header__menu-item"]} href='#works'>Портфолио</a>
                        </li>
                        <li onClick={() => setShowBurgerMenu(false)}>
                            <a className={styles["header__menu-item"]}
                                href='#contact'>Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div onClick={() => setShowBurgerMenu(!showBurgerMenu)} className={styles['burger-menu']}>
                    <div className={`${styles['burger-menu__item']} ${showBurgerMenu && styles['burger-menu__item__active']}`}></div>
                    <div className={`${styles['burger-menu__item']} ${showBurgerMenu && styles['burger-menu__item__active']}`}></div>
                    <div className={`${styles['burger-menu__item']} ${showBurgerMenu && styles['burger-menu__item__active']}`}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;