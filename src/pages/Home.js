import React from 'react'
import '../css/home.css'
import fondo2 from '../images/fondo2.jpg'
import fondo3 from '../images/fondo3.jpg'
import home1 from '../images/home1.jpg'
import home2 from '../images/home2.jpg'

const Home = () => {
    return (
        <div id="home">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={fondo3} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={fondo2} alt="Second slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

                <div className="carousel-caption">
                    <div className="row">
                        <div className="col-lg-6 d-none d-md-block">
                            <img className="home2" src={home2} alt="" />
                            <img className="home1" src={home1} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-10 text-right d-none d-md-block">
                            <h1>PROYECTOS DE INGENIERÍA PARA MINERÍA E INMOBILIARIA</h1>
                            <br />
                            <button className="btn" href="#">CONOCE MÁS</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Home
