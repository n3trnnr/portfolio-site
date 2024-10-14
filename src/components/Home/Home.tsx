import styles from './index.module.scss'
import author from '../../assets/author/author.webp'
// import authorMobile from '../../assets/author/author-mobile.png'

const Home = () => {
    return (
        <section className={styles.section}>
            <div className={styles['section__inner']}>
                <div className={styles['section__text-content']} data-aos="fade-up">
                    <h1 className={styles['section__headling']}>Алексей Сердюк <br /> <span>Frontend Developer</span></h1>
                    <p className={styles['section__description']}>Приветствую! Я фронтенд разработчик и могу сделать для вас классные программистские штуки, а пока вы думаете можете тут осмотреться.</p>
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

export default Home;