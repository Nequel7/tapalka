import styles from './Farming.module.scss';
import {motion} from "framer-motion";

function Farming() {




    return (
        <>
            <div className={`${styles.farming}`}>
                <motion.button className={`${styles.farming__btn}`}>
                    <i className="bi bi-lightning-charge"></i>
                    Start Farming
                </motion.button>
            </div>
        </>
    );
}

export {Farming};