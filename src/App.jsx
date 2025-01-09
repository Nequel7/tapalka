import {Routes, Route} from 'react-router-dom';

import {Footer} from "./Layout/Footer";
import {Home} from './pages/Home'
import {Mining} from "./pages/Mining";
import {Withdraw} from "./pages/Withdraw";
import {Friends} from "./pages/Friends";
import {Tasks} from "./pages/Tasks";

function App() {

    return (
        <>
            <main className='container content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/mining' element={<Mining/>}/>
                    <Route path='/withdraw' element={<Withdraw/>}/>
                    <Route path='/tasks' element={<Tasks/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
