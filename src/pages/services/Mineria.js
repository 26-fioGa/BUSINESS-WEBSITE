import React from 'react'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'
import '../../css/mineria.css'
import mineriaFondo from '../../images/mineriaFondo.png'
import plantaMinera from '../../images/plantaMinera.png'
import campaMinero from '../../images/campaMinero.png'


const Mineria = () => {
    return (
        <>
            <Navbar />
            <div id="mineria">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carouselImg" src={mineriaFondo} alt="First slide"/>
                        </div>
                    </div>
                    <div className="carousel-caption">
                        <h1>MINERÍA</h1>
                    </div>
                </div>
                <div class="container-fluid pb-5 pt-5">
                    <div className="row ml-3 mr-3 pl-2 pr-2">
                        <div className="col-lg-12">
                            <p>Realizamos diversos proyectos de ingeniería con enfoque hacia plantas y campamentos mineros, para etapas de surgimiento, modificación o ampliación.
                            Puede encontrar mayor especificación en los elementos siguientes:</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row ml-3 mr-3 pl-2 pr-2">
                        <div className="col-lg-6 text-left pb-4 pt-4 services">
                            <div class="card text-white">
                                <img class="card-img" src={plantaMinera} alt="Card image"/>
                                <div class="card-img-overlay text-center">
                                    <h5 class="card-title">Proyectos de ingeniería para plantas mineras</h5>
                                    <a href="/planta" className="btn btn-primary">Ver más</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-left pt-4 pt-4 services">
                            <div class="card text-white">
                                <img class="card-img" src={campaMinero} alt="Card image"/>
                                <div class="card-img-overlay text-center">
                                    <h5 class="card-title">Proyectos de ingeniería para campamentos mineros</h5>
                                    <a href="/campamento" className="btn btn-primary">Ver más</a>
                                </div>
                            </div>
                        </div>
                    </div>    

                </div>
                {/* <div className="container-fluid pb-5 pt-5">
                    <div className="row ml-3 mr-3 pl-2 pr-2">
                        <div className="col-lg-6 text-left pt-2 pl-4 pr-4 services">
                            <p>Servicios de mantenimiento o mejora de infraestructura para diversos proyectos o campamentos mineros, tales como:</p>
                            <ul>
                                <li>Implementación e instalación de kits de emergencia.</li>
                                <li>Instalación de estantes para organización de herramientas y demás.</li>
                                <li>Mantenimiento de equipos, bombas peristáticas, bombas electrónicas, etc.</li>
                                <li>Construcción de infraestructura como paredes para necesidades determinadas.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-2 pl-4 pr-4 text-center">
                            <img className="w-75" src={mineriaService2} alt="servicio" />
                        </div>
                    </div>
                    <div className="row mt-2 ml-3 mr-3 pl-2 pr-2">
                        <div className="col-lg-6 mb-2 mt-2 pl-4 pr-4 text-center">
                            <img className="w-50" src={mineriaService} alt="servicio" />
                        </div>
                        <div className="col-lg-6 text-left pl-4 pr-4 services">
                            <ul>
                                <li>Instalación de dispositivos de seguridad para delimitación de áreas.</li>
                                <li>Correctivos como soldaduras de puertas o relacionados.</li>
                                <li>Limpieza y monitoreo de zonas perimetrales, y cualquier otro servicio relacionado con los puntos anteriores.</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    )
}

export default Mineria
