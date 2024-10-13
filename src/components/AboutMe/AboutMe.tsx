import styles from './index.module.scss'

const AboutMe = () => {
    return (
        <section id='about' className={styles['resume-section']} data-aos='fade-up'>
            <div className={styles['resume-section__inner']}>
                <h3 className={styles['resume-section__title']}>
                    Обо мне
                </h3>
                <p className={styles['resume-section__description']}>
                    Окончил курс по frontend разработке в IT Nordic School, где работал над приложением для организации мероприятий. Изучал React, Redux, Thunk, TS, ES6+, SASS, CSS, HTML, Webpack, Git и другие технологии.
                </p>
                <br />
                <p className={styles['resume-section__description']}>
                    Принимал участие в разработке проекта "Гринатом документы" на React, TS, MobX, React Router, Axios, CSS в команде из 10 человек для CaseLab. Занимался версткой, стилизацией компонентов, описанием логики взаимодействия клиент-серверной части и управлением состоянием приложения. Реализовывал навигацию, поиск, фильтрацию данных, а также исправлял баги и проводил рефакторинг кода.
                </p>
                <br />
                <p className={styles['resume-section__description']}>
                    В настоящее время работаю над разработкой таск-менеджера для управления проектами и задачами, где применяю ранее изученные и новые технологии такие как Vite, Strapi CMS, React Hook Form, Dnd kit. Отвечаю за весь процесс разработки - от дизайна и верстки до настройки серверных контроллеров.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;