import {useEffect} from "react";
import styles from './Alert.module.scss'
import { motion } from 'framer-motion';

export const Alert = (props) => {
    const {title = '', closeAlert = Function.prototype} = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }

    }, [title]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`alert alert-primary position-absolute ${styles.alert}`}
                 style={{width: '100%'}} role="alert">
                <div className='flex-row'>
                    <i className={`bi bi-check-circle ${styles.alert__icon}`} style={{marginRight:'5px'}}></i>
                    {title}
                </div>


            </motion.div>
        </>
    );
};