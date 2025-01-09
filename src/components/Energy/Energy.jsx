import styles from './Energy.module.scss'
import {useEffect, useContext} from "react";
import {TapContext} from "../../context/TapContext.jsx";
import {MAX_ENERGY} from "../../variables.js";

function Energy() {
    const {
        points,energy, setEnergy=Function.prototype,
    } = useContext(TapContext);


    useEffect(() => {
        let timeoutId;
        if (energy < MAX_ENERGY) {
            timeoutId = setTimeout(() => {
                setEnergy(prevEnergy => prevEnergy + 1);
            }, 7000);
        }
        return () => clearTimeout(timeoutId);
    }, [energy]);

    // Эффекты для сохранения данных в localStorage
    useEffect(() => {
        localStorage.setItem('energy', energy.toString());
    }, [energy]);


    return <>
        <div className={styles.energy}>

            <div className={styles.energy__icon}>
                <i className="bi bi-lightning " style={{'fontSize': '30px'}}></i>
            </div>

            <div className={styles.energy__info}>
                <div className={styles.energy__amount}>
                    {energy}
                </div>
                <div className={styles.energy__progress_bar}>
                    <div className="progress" role="progressbar"
                         aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar"
                             style={{
                                 width: `${Math.round((energy / MAX_ENERGY) * 100)}%`,
                                 'backgroundColor': '#75F1B0'
                             }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export {Energy};