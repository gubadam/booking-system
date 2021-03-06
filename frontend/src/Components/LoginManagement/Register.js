import React, {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const Register = () => {

    const [user, setUser] = useState({login: "", password: ""})

    const registerUserSubmit = (e) =>{
        e.preventDefault()

        axios
            .post("", {}, {
                auth:{
                    login: user.login,
                    password: user.password
                }
            }).then(res => {
                console.log(res)
        }).catch(() => {
            console.log("Jakis blad")
        })
    }

    return(
        <div>
            <div className={"login-container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <p className={"login-info"}>Zarejestruj się</p>
                    </div>
                </div>
                <form onSubmit={(e) => { registerUserSubmit(e)}}>
                    <div className={"row input"}>
                        <div className={"col"}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={user.login}
                                    onChange={(e) => {setUser({...user, login: e.target.value})}}
                                    placeholder={"Login"}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"row input"}>
                        <div className={"col"}>
                            <div className="input-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={user.password}
                                    onChange={(e) => {setUser({...user, password: e.target.value})}}
                                    placeholder={"Hasło"}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                            <Link to={"/login"} className={"text-link"}><div className={"text-link change-type-login"}>Masz konto? Zaloguj się</div> </Link>
                        </div>
                    </div>
                    <div className={"row login-button"}>
                        <div className={"col"}>
                            <button type={"submit"} className={"btn btn btn-primary"}>Zarejestruj</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register