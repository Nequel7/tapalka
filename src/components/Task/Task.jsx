import styles from './Task.module.scss'

function Task(props) {
    const {number} = props;

    return (
        <>
            <div className={styles.task}>
                <div className={styles.task__info}>
                    <div className={styles.task__icon}>
                        <i className="bi bi-award"></i>
                    </div>
                    <div className={styles.task__desc}>
                        <h6 className="card-text">Lorem ipsum dolor sit amet.</h6>
                        <div className={styles.task__desc__profit}>
                            <h5 className="card-title">+{number*100}</h5>
                            <h5 className="card-title">
                                <span>T</span>P
                            </h5>

                        </div>
                    </div>
                    <a href="#" className={`btn ${styles.task__btn}`}>
                        <span>
                            Start
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export {Task};