import React from 'react'
import '../../css/planta.css'
import plantaFondo from '../../images/plantaFondo.png'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'

const Planta = () => {
    return (
        <>
            <Navbar />
            <div id="planta">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carouselImg" src={plantaFondo} alt="First slide"/>
                        </div>
                    </div>
                    <div className="carousel-caption">
                        <h1>PLANTAS MINERAS</h1>
                    </div>
                </div>
                <div class="container-fluid pt-5">
                    <div className="row ml-3 mr-3 pl-2 pr-2 pb-3">
                        <div className="col-lg-12">
                            <p>PROYINTER inmobiliaria se enfoca en promover y administrar proyectos de ingeniería en cuanto a infraestructura, tales como:</p>
                            <br />
                            <p>Elaboración de diseños nuevos para condominios, departamentos, casas, etc. Así como también ampliación, modificación o remodelación de cualquier edificación.</p>
                            <ul>
                                <li>Planos civiles</li>
                                <li>Planos arquitectónicos</li>
                                <li>Ampliaciones y remodelaciones en edificaciones</li>
                                <li>Animación 3D</li>
                                <li>Diseño de interiores
                                    <ul>
                                        <li>Acabados</li>
                                        <li>Diseños</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center mt-3 p-3 note">
                            <h6>ASESORÍA INTEGRAL EN TODO EL PROCESO</h6>
                            <p><i className="fa fa-phone"/> 954 779 870</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Planta
