import React from "react";
import styles from './Work.module.scss'
import { Iwork } from "./Work.props";

const Work = ({ id, title, img, url }: Iwork) => {
    return (
        <div className={styles['work']}>
            <a className={styles["work__work-title"]} href={url} target="_blank">
                {title}
            </a>
            <img className={styles['work__work-image']} src={img} />
        </div>
    );
}

export default Work;