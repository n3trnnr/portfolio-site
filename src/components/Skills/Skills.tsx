import React from "react";
import styles from './Skills.module.scss'
import Logos from "../UI/Losog";

const Skills = () => {
    return (
        <section className={styles['section']}>
            <div className={styles['section__inner']}>
                <div className={styles['section__title']}>
                    Skills
                </div>
                <div className={styles['section__logos-list']}>
                    <Logos />
                </div>
            </div>
        </section>
    );
}

export default Skills;