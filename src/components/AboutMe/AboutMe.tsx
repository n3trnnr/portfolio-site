import Logos from '../UI/Logos';
import styles from './index.module.scss'

const AboutMe = () => {
    return (
        <section id='about' className={styles['section']} >
            <div className={styles['section__inner']}>
                <h3 className={styles['section__title']}>
                    Обо мне
                </h3>
                <p data-aos='fade-down' className={styles['section__description']}>
                    Окончил курс по frontend разработке в IT Nordic School, где работал над <span>приложением для организации мероприятий</span>. Изучал <b>React, Redux, Thunk, TypeScript, JavaScript, SASS, CSS, HTML, Webpack, Git</b> и другие технологии.
                </p>

                <p data-aos='fade-down' className={styles['section__description']}>
                    Принимал участие в разработке проекта <span>Гринатом документы</span> на <b>React, TypeScript, MobX, React Router, Axios, CSS</b> в команде из 20 человек для CaseLab. Занимался версткой, стилизацией компонентов, описанием логики взаимодействия клиент-серверной части и управлением состоянием приложения. Реализовывал навигацию, поиск, фильтрацию данных, а также исправлял баги и проводил рефакторинг кода.
                </p>

                <p data-aos='fade-down' className={styles['section__description']}>
                    Разработал практичную и функциональную <span>канбан доску с дашбордом</span> в минималистичном дизайне, используя библиотеки <b>Dnd kit, React, TypeScript, Vite, Tailwind</b>.
                    <br />
                    <br />
                    В настоящее время занимаюсь разработкой <span>таск-менеджера</span> для управления проектами и задачами, где применяю ранее изученные и новые технологии такие как <b>Strapi CMS, React Hook Form</b>. Отвечаю за весь процесс разработки - от дизайна и верстки до настройки серверных контроллеров.
                </p>
                <div className={styles['section__resume-wrapper']}>

                    <div data-aos='fade-down' >
                        <Logos logoName={'download'} styleName={styles['section__resume-pointer']} />
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1Op3d9AQhihDF7h2LqU0M8Q9ZJgPJY_bt/view?usp=sharing"
                        target='_blank'>
                        <button className={styles['section__resume-link']} data-aos='fade-up'>
                            Посмотреть Резюме
                        </button>
                    </a>

                </div>
            </div>
        </section >
    );
}

export default AboutMe;