import React from "react";
import styles from './AboutMe.module.scss'
import photo from '../../assets/photo.png'

const AboutMe = () => {
    return (
        <section className={styles.section}>
            <div className={styles['section__inner']}>
                <div className={styles['section__text-content']}>
                    <h1 className={styles['section__headling']}>Alexey Serdyuk <br /> Frontend Developer</h1>
                    <div className={styles['section__description']}>I'm a frontend react programmer</div>
                </div>
                <img className={styles['section__image']} src={photo} alt="" />
            </div>
        </section>
    );
}

export default AboutMe;