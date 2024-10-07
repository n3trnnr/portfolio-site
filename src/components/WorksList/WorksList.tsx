import Work from "../Work/Work";
import boards from '../../assets/img/boards.png'
import styles from './WorksList.module.scss'

const worksList = [
    {
        id: 1,
        title: 'Yotabo',
        img: boards
    }
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
                        <Work title={work.title} img={work.img} />
                    ))
                    }
                </div>
            </div>
        </section>
    );
}

export default WorksList;