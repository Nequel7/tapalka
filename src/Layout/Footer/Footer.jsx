import styles from "../Footer/Footer.module.scss";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

function Footer() {
    const {pathname} = useLocation();


    return <>
        <div className={`${styles.footer}`}>
            <div className={styles.footer__wrapper}>
                <Link to='/' className={`${styles.footer__item} 
                    ${String(pathname) === '/' ? styles.footer__active : styles.footer__disable}`}>
                    <i className="bi bi-house-door"></i>
                    Home
                </Link>
                <Link to='/mining' className={`${styles.footer__item}
                ${String(pathname) === '/mining' ? styles.footer__active : styles.footer__disable}`}>
                    <i className="bi bi-cpu"></i>
                    Mining
                </Link>
                <Link to='/withdraw' className={`${styles.footer__item} 
                ${String(pathname) === '/withdraw' ? styles.footer__active : styles.footer__disable}`}>
                    <i className="bi bi-wallet2"></i>
                    Withdraw
                </Link>
                <Link to='/tasks' className={`${styles.footer__item} 
                ${String(pathname) === '/tasks' ? styles.footer__active : styles.footer__disable}`}>
                    <i className="bi bi-list-task"></i>
                    Tasks
                </Link>
                <Link to='/friends' className={`${styles.footer__item} 
                ${String(pathname) === '/friends' ? styles.footer__active : styles.footer__disable}`}>
                    <i className="bi bi-people"></i>
                    Friends
                </Link>
            </div>
        </div>
    </>
}

export {Footer};