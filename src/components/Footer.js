import React from 'react'
import '../css/footer.css'
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div id="footer">
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 text-center pt-5 pb-5 logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="col-lg-4 text-left pt-5 pb-5 canals">
                        <a class="nav-link"><i className="fa fa-phone"/> 954 779 870</a>
                        <a class="nav-link"><i className="fa fa-envelope"/> proyintereirl@gmail.com</a>
                        <a class="nav-link"><i className="fa fa-map-marker-alt"/> San Gregorio 328, Urb.San Diego, SMP, Lima</a>
                    </div>

                    <div className="col-lg-4 text-center pt-5 pb-5 links">
                        <ul>
                            <li><a href="#">INICIO</a></li>
                            <li><a href="#">NOSOTROS</a></li>
                            <li><a href="#">SERVICIO</a></li>
                            <li><a href="#">CONTÁCTANOS</a></li>
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
