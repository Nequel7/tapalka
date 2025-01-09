import {TaskList} from "../../components/TaskList";
import styles from "../../pages/Tasks/Tasks.module.scss";

function Tasks() {
    return (
        <>
            <div className={styles.tasks}>
                <div className={styles.tasks__title}>
                    <h1>‍📝</h1>
                    <h1>Earn more</h1>
                    <h1>
                        <span>T</span>ether Points.</h1>
                </div>
                <div className={styles.tasks__info}>
                    <div className={styles.tasks__info__title}>
                        <h5>List of tasks</h5>
                    </div>
                </div>
            </div>
            <TaskList/>
        </>
    );
}

export {Tasks};