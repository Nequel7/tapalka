import styles from './MedalList.module.scss'
import {Medal} from "../Medal";
import {TapContext} from "../../context/TapContext";
import {useContext, useEffect} from "react";
import {AnimatePresence, motion} from 'framer-motion';


export const MedalList = (props) => {
    const medals = [
        {id: 1, path: 'bronze-medal', title: 'Bronze lvl', medalPoints: 1000, desc: '+1 on click | +10 in hour'},
        {id: 2, path: 'silver-medal', title: 'Silver lvl', medalPoints: 2000, desc: '+2 on click | +20 in hour'},
        {id: 3, path: 'gold-medal', title: 'Gold lvl', medalPoints: 4000, desc: '+4 on click | +40 in hour'}
    ];
    const {points} = useContext(TapContext);
    const {medalListIsShow, handleMedalListShow = Function.prototype} = props;


    return (
        <>
            <AnimatePresence>
                {
                    medalListIsShow && <motion.ul
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        transition={{duration: 0.12}}
                        className={styles.medals} onClick={handleMedalListShow} onTouchStart={handleMedalListShow}>
                    <div className={styles.line}></div>
                        {medals.map((medal) => {
                            return <Medal key={medal.id} medal={medal} points={points}/>
                        })}
                    </motion.ul>
                }
            </AnimatePresence>
        </>
    );
};
