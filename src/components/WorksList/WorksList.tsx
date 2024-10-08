import Work from "../Work/Work";
import boards from '../../assets/portfolio/yotabo.png'
import green from '../../assets/portfolio/greenatom.png'
import styles from './WorksList.module.scss'

const worksList = [
    {
        id: 1,
        title: 'Yotabo',
        img: boards,
        url: 'https://github.com/n3trnnr/yotabo-client'
    },
    {
        id: 2,
        title: 'Greenatom',
        img: green,
        url: 'https://greendocatom.web.app'
    },
]

const WorksList = () => {
    return (
        <section id="works" className={styles['works']}>
            <div className={styles["works__works-inner"]}>
                <div className={styles['works__works-list']}>
                    <div className={styles['works__works-title']}>
                        Portfolio
                    </div>
                    {worksList.map((work) => (
                        <Work key={work.id} id={work.id} title={work.title} img={work.img} url={work.url} />
                    ))
                    }
                </div>
            </div>
        </section>
    );
}

export default WorksList;