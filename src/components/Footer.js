import React from 'react'
import '../css/footer.css'
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div id="footer">
            <footer className="container-fluid">
                <div className="row pt-2 pb-2">
                    <div className="col-lg-4 pt-3 pb-3 text-center logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="col-lg-4 pt-3 pb-3 text-left canals">
                        <a class="nav-link"><i className="fa fa-phone"/> 954 779 870</a>
                        <a class="nav-link"><i className="fa fa-envelope"/> proyintereirl@gmail.com</a>
                        <a class="nav-link"><i className="fa fa-map-marker-alt"/> San Gregorio 328, Urb.San Diego, SMP, Lima</a>
                    </div>

                    <div className="col-lg-4 pt-3 pb-3 text-center links">
                        <ul>
                            <li><a href="https://proyinter.herokuapp.com/#home">INICIO</a></li>
                            <li><a href="https://proyinter.herokuapp.com/#nosotros">NOSOTROS</a></li>
                            <li><a href="https://proyinter.herokuapp.com/#servicios">SERVICIO</a></li>
                            <li><a href="https://proyinter.herokuapp.com/#contacto">CONTÁCTANOS</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row" id="close">
                </div>
            </footer>
        </div>
    )
}

export default Footer
