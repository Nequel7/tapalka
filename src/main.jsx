import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <HashRouter>
        <App/>
    </HashRouter>
    //</StrictMode>
)
