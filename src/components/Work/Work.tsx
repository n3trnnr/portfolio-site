import styles from './index.module.scss'
import { Iwork } from "./Work.props";

const Work = ({ title, description, img, url }: Iwork) => {

    return (
        <div className={styles['work']} data-aos="flip-up">
            <p className={styles['work__description']}>{description}</p>

            <a href={url} target='_blank'>
                <img className={styles['work__work-image']} src={img} />
            </a>
            <a className={styles["work__work-title"]} href={url} target="_blank">
                {title}
            </a>
        </div>
    );
}

export default Work;