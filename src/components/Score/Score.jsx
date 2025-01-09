import styles from './Score.module.scss';
import {useContext} from "react";
import {TapContext} from "../../context/TapContext";

function Score() {
    const {points} = useContext(TapContext);
    return (
        <>
            <div className={styles.score}>
                <h1 className={`${styles.score__amount}`}>
                    <img src="/tapalka/coin_250.png" alt="coin"/>
                    <span>{points}</span>
                </h1>
            </div>
        </>
    );
}

export {Score};