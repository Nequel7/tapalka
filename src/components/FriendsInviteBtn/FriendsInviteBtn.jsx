import styles from "./FriendsInviteBtn.module.scss";

function FriendsInviteBtn(props) {
    const {copyLink=Function.prototype}= props;
    return (
        <>
            <div className={styles.btn_wrapper}>

                <button className={`btn ${styles.invite__btn}`}>
                    <h3>
                        <b>Invite friend </b><i className="bi bi-person-add"></i>
                    </h3>
                </button>
                <button className={`btn ${styles.invite__btn} ${styles.copy}`} onClick={copyLink}>
                    <h3>
                        <i className="bi bi-copy"></i>

                    </h3>
                </button>
            </div>
        </>
    );
}

export {FriendsInviteBtn};