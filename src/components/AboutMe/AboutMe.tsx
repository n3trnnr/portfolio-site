import styles from './index.module.scss'

const AboutMe = () => {
    return (
        <section id='about' className={styles['resume-section']} >
            <div className={styles['section__inner']}>
                <h3 className={styles['section__title']}>
                    Обо мне
                </h3>
                <p data-aos='fade-down' className={styles['section__description']}>
                    Окончил курс по frontend разработке в IT Nordic School, где работал над <u>приложением для организации мероприятий</u>. Изучал <b>React, Redux, Thunk, TypeScript, JavaScript, SASS, CSS, HTML, Webpack, Git</b> и другие технологии.
                </p>

                <p data-aos='fade-down' className={styles['section__description']}>
                    Принимал участие в разработке проекта <u>Гринатом документы</u> на <b>React, TypeScript, MobX, React Router, Axios, CSS</b> в команде из 10 человек для CaseLab. Занимался версткой, стилизацией компонентов, описанием логики взаимодействия клиент-серверной части и управлением состоянием приложения. Реализовывал навигацию, поиск, фильтрацию данных, а также исправлял баги и проводил рефакторинг кода.
                </p>

                <p data-aos='fade-down' className={styles['section__description']}>
                    В настоящее время работаю над разработкой <u>таск-менеджера</u> для управления проектами и задачами, где применяю ранее изученные и новые технологии такие как <b>Vite, Strapi CMS, React Hook Form, Dnd kit</b>. Отвечаю за весь процесс разработки - от дизайна и верстки до настройки серверных контроллеров.
                </p>
                <div className={styles['section__resume-wrapper']}>
                    <div data-aos='fade-up' className={styles['section__resume-pointer']} />
                    <a
                        data-aos='fade-up'
                        className={styles['section__resume-link']}
                        href="https://drive.google.com/file/d/16vLtSy0Bt43-_NLHpB_HLf1Zx5Ms1MwX/view?usp=drive_link" target='_blank'><u>Скачать Резюме</u></a>
                </div>
            </div>
        </section >
    );
}

export default AboutMe;