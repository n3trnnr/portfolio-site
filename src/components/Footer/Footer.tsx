import styles from './index.module.scss'
import Logos from "../UI/Logos";

const Footer = () => {
    return (
        <footer id="contact" className={styles['footer']}>
            <div className={styles['footer__inner']}>
                <h3 className={styles['footer__title']}>
                    Контакты
                </h3>

                <p className={styles['footer__description']} data-aos="fade-down">
                    Хотите узнать больше или просто пообщаться?<br />
                    Добро пожаловать!
                </p>

                <button className={styles['footer__mail-btn']} data-aos="fade-down">
                    <a href="mailto:n3trnnr@gmail.com" target="_top">
                        Отправить сообщение
                    </a>
                </button>

                <a
                    className={styles['footer__telegram-btn']}
                    href="https://t.me/n3trnnr"
                    target="_blank"
                >
                    <div data-aos="fade-up">
                        <Logos logoName={'tg'} styleName={styles['footer__logo']} />
                    </div>
                </a>

                <span >© Alexey Serdyuk, 2024</span>
            </div>
        </footer>
    );
}

export default Footer;