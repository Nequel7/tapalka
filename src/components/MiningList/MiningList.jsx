import {MiningCard} from "../MiningCard";
import styles from './MiningList.module.scss'

function MiningList() {
    const cards = [1,2,3,4,5];
    return (
        <>
            <ul className={styles.cards}>

                {cards.map((card) => {
                    return <MiningCard key={card} number={card}/>
                })}
            </ul>

        </>
    );
}

export {MiningList};