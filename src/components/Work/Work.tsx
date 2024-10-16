import styles from './index.module.scss'
import { Iwork } from "./Work.props";

const Work = ({ title, description, img, url }: Iwork) => {

    return (
        <div className={styles['work']} >
            <div className={styles['work__inner']}>
                <p data-aos='fade-down' className={styles['work__description']}>{description}</p>
                <a data-aos='flip-up' href={url} target='_blank'>
                    <img className={styles['work__work-image']} src={img} />
                </a>
                <a data-aos='fade-up' className={styles["work__work-title"]} href={url} target="_blank">
                    {title}
                </a>
            </div>
        </div>
    );
}

export default Work;