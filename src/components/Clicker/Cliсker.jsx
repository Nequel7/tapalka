import styles from "./Cliсker.module.scss";
import {useEffect, useContext, useState} from "react";
import {TapContext} from "../../context/TapContext";

// import {motion} from "framer-motion";

function Clicker() {
    const {points,handleTap=Function.prototype} = useContext(TapContext);

    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        if (/mobile/i.test(userAgent) || /tablet/i.test(userAgent)) {
            setIsTouch(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('points', points.toString());
    }, [points]);

    const handleClick = (event) => {
        handleTap();
        // handlePauseClick();
        // console.log(event.pageX, event.pageY, 'это клик')
        const box = document.createElement('div');
        box.innerText = '+1';
        const styles = {
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '25px',
            color: 'white',
            position: 'absolute',
            userSelect: null,
            pointerEvents: null,
            left: event.pageX + 'px',
            top: (event.pageY - 100) + 'px',

        };

        box.style.opacity = '1';
        box.style.transition = 'opacity 1s, transform 1s';
        box.style.transform = 'translateY(100px)';

        Object.assign(box.style, styles);
        document.body.appendChild(box);
        event.preventDefault();

        requestAnimationFrame(() => {
            box.style.opacity = '0';
            box.style.transform = 'translateY(0)';
        });
        setTimeout(() => {
            box.remove();
        }, 1000);
    };

    const handleTouchEnd = (event) => {
        handleTap();
        // handlePauseClick();
        const touch = event.changedTouches[0];
        // console.log(touch.pageX, touch.pageY, 'это касание')
        const box = document.createElement('div');
        box.innerText = '+1'
        const styles = {
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '25px',
            color: 'white',
            position: 'absolute',
            userSelect: null,
            pointerEvents: null,
            left: touch.pageX + 'px',
            top: (touch.pageY - 100) + 'px',
        };

        box.style.opacity = '1';
        box.style.transition = 'opacity 1s, transform 1s';
        box.style.transform = 'translateY(100px)';

        Object.assign(box.style, styles);
        document.body.appendChild(box);
        event.preventDefault();

        requestAnimationFrame(() => {
            box.style.opacity = '0';
            box.style.transform = 'translateY(0)';
        });
        setTimeout(() => {
            box.remove();
        }, 1000);
    };


    return (
        <>
            <div className={`${styles.clicker}`}>
                <img src="/tapalka/coin_300.png" alt="Usdt coin"
                     onTouchEnd={isTouch ? handleTouchEnd : undefined} onClick={isTouch ? undefined : handleClick}/>
            </div>
        </>
    );
}

export {Clicker};
