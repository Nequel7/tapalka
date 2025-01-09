import {TapContextProvider} from "../../context/TapContext.jsx";
import {Farming} from "../../components/Farming";
import {Clicker} from "../../components/Clicker";
import {ScorePanel} from "../../Layout/ScorePanel";
import {Profile} from "../../components/Profile";
import {Energy} from "../../components/Energy";
import {MedalList} from "../../components/MedalList";
import {useEffect, useRef, useState} from "react";


function Home() {
    const [medalListIsShow, setMedalListIsShow] = useState(false);
    const profileRef = useRef(null);

    const handleMedalListShow = () => {
        setMedalListIsShow(!medalListIsShow);
    };

    return (
        <>
            <TapContextProvider>
                {medalListIsShow &&
                    <MedalList handleMedalListShow={handleMedalListShow}
                               medalListIsShow={medalListIsShow}
                              />}
                <Profile handleMedalListShow={handleMedalListShow}
                         medalListIsShow={medalListIsShow}
                         setMedalListIsShow={setMedalListIsShow}/>
                <ScorePanel/>
                <Clicker/>
                <Energy/>
                <Farming/>
            </TapContextProvider>
        </>
    );
}

export {Home};