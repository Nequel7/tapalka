import styles from './WalletConnection.module.scss'

function WalletConnection() {
    return (
        <>
            <div className={styles.connect}>
                <h3 className={styles.connect__title}>
                    This you can connect wallet
                </h3>
                <h3 className={styles.connect__title}>
                    to earn crypto.
                </h3>
                <a href="#" className={`btn ${styles.connect__btn}`}>Connect wallet</a>
            </div>
        </>
    );
}

export {WalletConnection};