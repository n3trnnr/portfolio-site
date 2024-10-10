import React from "react";
import styles from './AboutMe.module.scss'
import photo from '../../assets/photo.png'

//Приветствую! Я фронтенд разработчик и я могу сделать для вас классные программистские штуки, а пока вы думаете можете тут осмотреться.

const AboutMe = () => {
    return (
        <section className={styles.section}>
            <div className={styles['section__inner']}>
                <div className={styles['section__text-content']}>
                    <h1 className={styles['section__headling']}>Alexey Serdyuk <br /> Frontend Developer</h1>
                    <p className={styles['section__description']}>Hello! I'm a frontend developer and I can do cool programming stuff for you, and while you're thinking, you can look around here.</p>
                    {/* <p className={styles['section__description']}>Приветствую! Я фронтенд разработчик и я могу сделать для вас классные программистские штуки, а пока вы думаете можете тут осмотреться.</p> */}
                </div>
                <img className={styles['section__image']} src={photo} alt="" />
            </div>
        </section>
    );
}

export default AboutMe;