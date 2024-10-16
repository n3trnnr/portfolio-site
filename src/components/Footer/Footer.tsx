import styles from './index.module.scss'
import Logos from "../UI/Logos";

interface IFooter {
    myRef: React.RefObject<HTMLElement>
}

const Footer = ({ myRef }: IFooter) => {
    return (
        <footer ref={myRef} id="contact" className={styles['footer']} >
            <div className={styles['footer__inner']}>
                <h3 className={styles['footer__title']}>
                    Контакты
                </h3>

                <p className={styles['footer__description']} data-aos="fade-down">
                    Хотите узнать больше или просто пообщаться?<br />
                    Добро пожаловать!
                </p>

                <a href="mailto:n3trnnr@gmail.com" target="_top">
                    <button className={styles['footer__mail-btn']} data-aos="fade-down">
                        Отправить сообщение
                    </button>
                </a>

                <div className={styles['footer__contacts-list']} data-aos="fade-up">
                    <a
                        className={styles['footer__contact-btn']}
                        href="https://t.me/n3trnnr"
                        target="_blank"
                    >
                        <div>
                            <Logos logoName={'tg'} styleName={styles['footer__logo']} />
                        </div>
                    </a>
                    <a
                        className={styles['footer__contact-btn']}
                        href="https://api.whatsapp.com/send?phone=79019029013"
                        target="_blank"
                    >
                        <div>
                            <Logos logoName={'whatsApp'} styleName={styles['footer__logo']} />
                        </div>
                    </a>
                    <a
                        className={styles['footer__contact-btn']}
                        href="https://github.com/n3trnnr"
                        target="_blank"
                    >
                        <div>
                            <Logos logoName={'gitHub'} styleName={styles['footer__logo']} />
                        </div>
                    </a>
                </div>

                <span >© 2024 Алексей Сердюк</span>
            </div>
        </footer>
    );
}

export default Footer;