import React from "react";
import styles from './index.module.scss'
import { Iwork } from "./Work.props";

const Work = ({ id, title, description, imgDesktop, imgMobile, url }: Iwork) => {
    return (
        <div className={styles['work']}>
            <a className={styles["work__work-title"]} href={url} target="_blank">
                {title}
            </a>
            {/* <picture> */}
            {/* <source media="(max-width: 900px)" srcSet={imgMobile} /> */}
            <img className={styles['work__work-image']} src={imgDesktop} />
            {/* </picture> */}
        </div>
    );
}

export default Work;