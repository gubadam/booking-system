import React from "react"
import ReactDOM from 'react-dom'
import App from './Components/App'
import Navbar from "./Components/Navbar";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Navbar/>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)