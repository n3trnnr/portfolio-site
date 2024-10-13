import styles from './index.module.scss'
import Logos from "../UI/Logos";

const Skills = () => {
    return (
        <section className={styles['section']}>
            <div className={styles['section__inner']}>
                <h3 className={styles['section__title']}>
                    Навыки
                </h3>
                <div className={styles['section__logos-list']} data-aos="zoom-in" >
                    <Logos />
                </div>
            </div>
        </section>
    );
}

export default Skills;