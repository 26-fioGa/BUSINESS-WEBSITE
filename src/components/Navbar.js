import React from 'react'
import '../css/navbar.css'
import logo from '../images/logo.png'


const Navbar = () => {
    return (
        <>
            <section id="navbar">
                <nav className="nav justify-content-end pr-3" id="nav">
                    <li className="nav-item">
                        <a className="nav-link"> <i className="fa fa-envelope"/> proyintereirl@gmail.com</a>
                    </li>
                    <span></span>
                    <li className="nav-item">
                        <a className="nav-link"> <i className="fa fa-phone"/> 954 779 870</a>
                    </li>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand pl-3" href="https://proyinter.herokuapp.com/#home"><img src={logo} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link px-3" href="https://proyinter.herokuapp.com/#home">INICIO</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-3" href="https://proyinter.herokuapp.com/#nosotros">NOSOTROS</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle dropdown-toggle-split px-3" href="https://proyinter.herokuapp.com/#servicios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SERVICIOS
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="https://proyinter.herokuapp.com/#servicios">General</a>
                                    <a className="dropdown-item" href="/mineria">Minería</a>
                                    <a className="dropdown-item" href="/inmobiliaria">Inmobiliaria</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-3" href="https://proyinter.herokuapp.com/#contacto">CONTÁCTANOS</a>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </section>
            
            
        </>
        
    )
}

export default Navbar;
