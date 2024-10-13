import Work from "../Work/Work";
import styles from './WorksList.module.scss'
import { worksList } from "./WorksListData";

const WorksList = () => {
    return (
        <section id="works" className={styles['works']}>
            <div className={styles["works__works-inner"]}>
                <div className={styles['works__works-list']}>
                    <div className={styles['works__works-title']}>
                        Портфолио
                    </div>
                    {worksList.map((work) => (
                        <Work
                            key={work.id}
                            title={work.title}
                            description={work.description}
                            img={work.img}
                            url={work.url}
                        />
                    ))
                    }
                </div>
            </div>
        </section>
    );
}

export default WorksList;