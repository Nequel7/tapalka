import styles from './MiningCard.module.scss'

function MiningCard(props) {
    const {number} = props;
    return (
        <>
            <li className={styles.card}>
                <div className={styles.card__title}>

                    <h5 className="card-title">Miner M-{number}</h5>
                </div>
                <hr/>
                <div className={styles.card__info}>
                    <div className={styles.card__img}>

                        <img src="/tapalka/card.png" className="card-img-top" alt="gpu img"/>
                    </div>
                    <div className={styles.card__desc}>
                        <h6 className="card-text">Generate in Hour: ${number},000</h6>
                        <h6 className="card-text">Time of Work: 25 hour</h6>
                        <h5 className="card-text">Price: ${number}</h5>
                    </div>
                </div>
                {/*<div className={styles.card__btn}>*/}

                {/*</div>*/}
                <a href="#" className={`btn ${styles.card__btn}`}>Buy</a>
            </li>

        </>
    );
}

export {MiningCard};