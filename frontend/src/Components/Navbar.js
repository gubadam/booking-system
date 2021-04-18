import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Booking System</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className={"nav-item nav-link active"}><div className="textLink">Home</div> </Link>
                        <Link to="/login" className={"nav-item nav-link my-auto"}><div className='textLink'>Zaloguj się</div></Link>
                        <Link to="/register" className={"nav-item nav-link my-auto"}><div className='textLink'>Zarejestruj się</div> </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar