import React from 'react'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'
import plano1 from '../../images/plano1.png'
import plano2 from '../../images/plano2.png'
import InmoFondo from '../../images/inmobiliariaFondo.png'
import '../../css/inmobiliaria.css'

const Inmobiliaria = () => {
    return (
        <>
            <Navbar />
            {/* Modal */}
            <div class="modal fade bd-example-modal-lg galeria" id="galeria" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Galería</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="carouselExample" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-50" src={plano1} alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-75" src={plano2} alt="Second slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal */}
            
            <div id="inmobiliaria">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carouselImg" src={InmoFondo} alt="First slide"/>
                        </div>
                    </div>
                    <div className="carousel-caption">
                        <h1>INMOBILIARIA</h1>
                    </div>
                </div>
                <div class="container-fluid pt-5">
                    <div className="row ml-3 mr-3 pl-2 pr-2 pb-3">
                        <div className="col-lg-8">
                            <p>PROYINTER inmobiliaria se enfoca en promover y administrar proyectos de ingeniería en cuanto a infraestructura, tales como:</p>
                            <br />
                            <p>Elaboración de diseños nuevos para condominios, departamentos, casas, etc. Así como también ampliación, modificación o remodelación de vivienda.</p>
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
                        <div className="col-lg-4 p-3 text-center">
                            <button className="btn btn-primary"  data-toggle="modal" data-target="#galeria">Ver galería</button>
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

export default Inmobiliaria
