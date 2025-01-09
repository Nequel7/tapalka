import styles from './ScorePanelr.module.scss';
import {Energy} from '../../components/Energy';
import {Score} from "../../components/Score/index.js";

function ScorePanel() {
    return <>
        <div className={`${styles.panel}`}>
            <div className={styles.panel__wrapper}>
                {/*<Energy/>*/}
                <div className={styles.panel__score}>
                    <Score/>
                </div>
                <div className={styles.panel__in_hour}>
                    <i className="bi bi-plus"></i>
                    <div className={styles.panel__in_hour__content}>
                        <span> 0/hr</span>
                    </div>
                    <i className="bi bi-clock" style={{'paddingLeft': '5px'}}></i>
                </div>
            </div>
        </div>
    </>
}

export {ScorePanel};