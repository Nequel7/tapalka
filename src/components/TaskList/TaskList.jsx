import styles from './TaskList.module.scss'
import {Tasks} from "../../pages/Tasks";
import {Task} from "../Task";


function TaskList() {
    const tasks = [1, 2, 3];
    return (
        <>
            <div className={styles.tasks}>
                {tasks.map((task) => (
                    <Task key={task} number={task}/>
                ))}

            </div>
        </>
    );
}

export {TaskList};