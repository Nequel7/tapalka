import {createContext, useState, useRef} from "react";
import {MAX_ENERGY} from "../variables.js";

export const TapContext = createContext();

export const TapContextProvider = (props) => {
    const initialPointsCount = parseInt(localStorage.getItem('points') || '0', 10);
    const initialEnergy = parseInt(localStorage.getItem('energy') || '500', 10);
    const [points, setPoints] = useState(initialPointsCount);
    const [energy, setEnergy] = useState(initialEnergy);


    const handleTap = () => {
        if (energy > 0) {
            setPoints(points + 1);
            setEnergy(energy - 1);
        }
    };


    const value = {
        points, handleTap,
        energy, setEnergy,
    };

    return <TapContext.Provider value={value}>
        {props.children}
    </TapContext.Provider>

}