import React from 'react'
import '../../css/campamentos.css'
import campamentoFondo from '../../images/campamentoFondo.png'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'

const Campamento = () => {
    return (
        <>
            <Navbar />
            <div id="campamento">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carouselImg" src={campamentoFondo} alt="First slide"/>
                        </div>
                    </div>
                    <div className="carousel-caption">
                        <h1>CAMPAMENTOS MINEROS</h1>
                    </div>
                </div>
                <div class="container-fluid pt-5">
                    <div className="row ml-3 mr-3 pl-2 pr-2 pb-3">
                        <div className="col-lg-12">
                            <p>Ingeniería y gestión de proyectos, planificación y diseño en función a las necesidades del propósito. <br />Soluciones como creación, ampliación o modificación de proyectos para campamentos mineros.</p>
                            <ul>
                                <li>Identificación de proyecto</li>
                                <li>Preparación de proyecto</li>
                                <li>Evaluación de proyecto</li>
                                <li>Gestión de proyecto</li>
                            </ul>
                            <div className="plus p-2 m-3 text-center">
                                <p><b>EXTRA</b></p>
                                <p>Integración de ingeniería y suministros para proyectos.</p>
                            </div>
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

export default Campamento
