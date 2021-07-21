import React from 'react'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'
import '../../css/mineria.css'
import MineriaVector from '../../images/mineriaVector4.png'
import mineriaService from '../../images/mineriaService.png'
import mineriaService2 from '../../images/mineriaService2.png'


const Mineria = () => {
    return (
        <>
            <Navbar />
            <div id="mineria">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carouselImg" src={MineriaVector} alt="First slide"/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pb-5 pt-5">
                    <div className="row ml-3 mr-3 pl-2 pr-2">
                        <div className="col-lg-6 text-left pt-2 pl-4 pr-4 services">
                            <p>Servicios de mantenimiento o mejora de infraestructura para diversos proyectos o campamentos mineros, tales como:</p>
                            <ul>
                                <li>Implementación e insalación de kits de emergencia.</li>
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Mineria
