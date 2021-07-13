import React from 'react'
import '../css/navbar.css'
import logo from '../images/logo.png'
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
    return (
        <>
            <section id="navbar">
                <ul class="nav justify-content-end pr-3" id="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> <i className="fa fa-envelope"/> proyintereirl@gmail.com</a>
                    </li>
                    <span></span>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> <i className="fa fa-phone"/> 954 779 870</a>
                    </li>
                </ul>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand pl-3" href="#"><img src={logo} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link px-3" href="#">INICIO</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-3" href="#">NOSOTROS</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-3" href="#">SERVICIOS</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-3" href="#">CONTÁCTANOS</a>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </section>
            
            
        </>
        
        // <div className="row" id="navbar">
        //     <div className="col-lg-12">
        //         
        //               
        //     </div>
        // </div>
        
    )
}

export default Navbar;
