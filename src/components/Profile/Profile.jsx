import styles from './Profile.module.scss'

export const Profile = (props) => {
    const {handleMedalListShow = Function.prototype, medalListIsShow, setMedalListIsShow = Function.prototype} = props;

    return (
        <>
            <div className={styles.profile}>
                <div className={styles.profile__info}>
                    <div className={styles.profile__info__avatar}>
                        <img src="/tapalka/user.png" alt="user photo"/>
                    </div>
                    <div className={styles.profile__info__username}>
                        <h1>
                            <b>Username</b>
                        </h1>
                    </div>
                </div>
                <div className={styles.profile__icon} onClick={handleMedalListShow}>
                    <img src="/tapalka/bronze-medal.png" alt="bronze medal"/>
                    <span style={{paddingBottom: '2px'}}>
                        <b>Bronze</b>
                    </span>
                    {
                        medalListIsShow ? <i className="bi bi-chevron-down"></i> :
                            <i className="bi bi-chevron-compact-right"></i>
                    }
                </div>
            </div>
        </>
    );
}

// export {Profile};