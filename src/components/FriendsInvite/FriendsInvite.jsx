import styles from './FriendsInvite.module.scss';
import './style.css';

function FriendsInvite() {

    return (
        <>
            <div className={styles.friends}>
                <div className={styles.friends__title}>
                    <div className={styles.friends__img}>
                        <img src="/tapalka/friends.png" alt="friends" style={{margin: "auto"}}/>
                    </div>
                    <h1>Invite Friends.</h1>
                    <h1>Earn</h1>
                    <h1>
                        <span>T</span>apalka Points.</h1>
                </div>
                <div className={styles.friends__info}>
                    <div className={styles.friends__info__title}>
                        <h5>How it works</h5>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.timeline__line}>
                            <div className={styles.timeline__line__icon}>
                                <div className={styles.timeline__line__icon__circle}></div>
                                <div className={styles.timeline__line__icon__line_first}></div>
                            </div>
                            <div className={styles.timeline__line__content}>
                                <h5 className={styles.green}>Lorem ipsum dolor sit amet.</h5>
                                <p className={styles.white}>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={styles.timeline__line}>
                            <div className={styles.timeline__line__icon}>
                                <div className={styles.timeline__line__icon__circle}></div>
                                <div className={styles.timeline__line__icon__line}></div>
                            </div>
                            <div className={styles.timeline__line__content}>
                                <h5 className={styles.green}>Lorem ipsum dolor sit amet.</h5>
                                <p className={styles.white}>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={styles.timeline__line}>
                            <div className={styles.timeline__line__icon}>
                                <div className={styles.timeline__line__icon__circle}></div>
                                <div className={styles.timeline__line__icon__line_last}></div>
                            </div>
                            <div className={styles.timeline__line__content}>
                                <h5 className={styles.green}>Lorem ipsum dolor sit amet.</h5>
                                <p className={styles.white}>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}

export {FriendsInvite};