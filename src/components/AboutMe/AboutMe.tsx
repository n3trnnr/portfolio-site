import styles from './index.module.scss'
import author from '../../assets/author/author.png'
import authorMobile from '../../assets/author/author-mobile.png'

//Приветствую! Я фронтенд разработчик и я могу сделать для вас классные программистские штуки, а пока вы думаете можете тут осмотреться.

const AboutMe = () => {
    return (
        <section id='about' className={styles.section}>
            <div className={styles['section__inner']}>
                <div className={styles['section__text-content']} data-aos="fade-up">
                    <h1 className={styles['section__headling']}>Alexey Serdyuk <br /> <span>Frontend Developer</span></h1>
                    <p className={styles['section__description']}>Hello! I'm a frontend developer and I can do cool programming stuff for you, and while you're thinking, you can look around here.</p>
                </div>
                <picture className={styles['section__image-wrapper']}
                    data-aos="fade-left"
                >
                    {/* <source media="(max-width:768px)" srcSet={authorMobile} /> */}
                    <img className={styles['section__image']} src={author} alt="author" />
                </picture>
            </div>
        </section>
    );
}

export default AboutMe;