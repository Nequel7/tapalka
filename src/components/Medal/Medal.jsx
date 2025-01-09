import styles from './Medal.module.scss'


export const Medal = (props) => {
    const {medal, points} = props;
    return (
        <>
            <div className={styles.wrapper}>
                <li className={styles.medal}>
                    <img src={`/tapalka/${medal.path}.png`} alt=""/>
                    <div style={{marginRight: '5px'}}>
                        <h1>{medal.title}</h1>
                        <h2>{medal.desc}</h2>
                        <h3>{points}/{medal.medalPoints}</h3>
                    </div>
                </li>
                <div style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '10px'}}>
                    <div className="progress" role="progressbar"
                         aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar"
                             style={{
                                 width: `${Math.round((points / medal.medalPoints) * 100)}%`,
                                 'backgroundColor': '#75F1B0'
                             }}
                        ></div>
                    </div>
                </div>
            </div>

        </>
    );
}

