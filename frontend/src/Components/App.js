import React from "react"
import {Route} from "react-router-dom"
import Login from './LoginManagement/Login'
import Home from './Home'
import '../Style/main.css'
import Register from "./LoginManagement/Register";

const App = () => {
    return(
        <div className="container-fluid fullWidth">
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/login" component={Login}/>
            <Route exact={true} path="/register" component={Register}/>
        </div>
    )
}

export default App