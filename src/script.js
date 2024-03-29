import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/styles.scss';
import {App} from './components/App.jsx';
import {HashRouter} from "react-router-dom"




const root = createRoot(document.getElementById('app'));


root.render(
    <HashRouter>
        <App />
    </HashRouter>
    )