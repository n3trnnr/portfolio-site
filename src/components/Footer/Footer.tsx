import React from "react";
import styles from './index.module.scss'
import Logos from "../UI/Losog";

const Footer = () => {
    return (
        <footer id="contact" className={styles['footer']}>
            <div className={styles['footer__inner']}>
                <h3 className={styles['footer__title']}>
                    Contact
                </h3>
                <p className={styles['footer__description']}>
                    Want to know more or just chat?<br />
                    You are welcome!
                </p>

                <button className={styles['footer__mail-btn']}>
                    <a href="mailto:n3trnnr@gmail.com" target="_top">
                        Send message
                    </a>
                </button>

                <a
                    className={styles['footer__telegram-btn']}
                    href="https://t.me/n3trnnr"
                    target="_blank"
                >
                    <Logos logoName={'tg'} styleName={styles['footer__logo']} />
                </a>
                <span>© Alexey Serdyuk, 2024</span>
            </div>
        </footer>
    );
}

export default Footer;