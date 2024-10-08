import React from "react";
import styles from './Footer.module.scss'
import tg from '../../assets/icons/telegram.svg'

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
                {/* <button className={styles['footer__mail-btn']}>
                    <a href="mailto:n3trnnr@gmail.com">
                        Send message
                    </a>
                </button> */}
                <a href="https://t.me/n3trnnr" target="_blacnk" className={styles['footer__telegram-btn']}>
                    <img src={tg} alt="" />
                </a>
                <span>2024</span>
            </div>
        </footer>
    );
}

export default Footer;