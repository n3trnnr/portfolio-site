import styles from './index.module.scss'
import { Iwork } from "./Work.props";

const Work = ({ title, img, url }: Iwork) => {

    return (
        <div className={styles['work']} data-aos="flip-up">
            <a className={styles["work__work-title"]} href={url} target="_blank">
                {title}
            </a>
            {/* <picture> */}
            {/* <source media="(max-width: 900px)" srcSet={imgMobile} /> */}
            <img className={styles['work__work-image']} src={img} />
            {/* </picture> */}
        </div>
    );
}

export default Work;