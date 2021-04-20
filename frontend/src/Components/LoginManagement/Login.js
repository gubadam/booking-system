import React, {useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Login = () =>{

    const [user, setUser] = useState({login: "", password: ""})

    const loginUserSubmit = (e) =>{
        e.preventDefault()

        const token = btoa(unescape(encodeURIComponent(`${user.login}:${user.password}`)))
        const toHeader = `Basic ${token}`

        axios.get("http://localhost:8080", {
            headers: {
                'Authorization': toHeader
            }
        }).then((res)=>{
            console.log(res.data)
        })

    }

    return(
        <div className={"login-container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <p className={"login-info"}>Logowanie</p>
                </div>
            </div>
            <form onSubmit={(e) => { loginUserSubmit(e)}}>
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
                        <Link to={"/register"} className={"text-link"}><div className={"text-link change-type-login"}>Nie masz konta? Zarejestruj się</div> </Link>
                    </div>
                </div>
                <div className={"row login-button"}>
                    <div className={"col"}>
                        <button type={"submit"} className={"btn btn-primary"}>Zaloguj</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login