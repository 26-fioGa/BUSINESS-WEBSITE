import React from 'react'
import '../css/servicios.css'
import pozo from '../images/pozo.png'
import limpieza from '../images/limpieza.png'
import building from '../images/building.png'
import building2 from '../images/building2.png'
import mineria from '../images/mineria.svg'
import inmobiliaria from '../images/inmobiliaria.svg'

const Servicios = () => {
    return (
        <div id="servicios">
            <div className="container-fluid">
                <div className="row pl-5 pr-5">
                    <div className="col-lg-12 text-center pb-4 title">
                        <h2>SERVICIOS</h2>
                    </div>
                </div>
                <div className="row mt-3 mb-3 ml-3 mr-3 pl-2 pr-2">
                    <div className="col-lg-6 pt-5 pl-4 pr-4">
                        <div id="carouselExample" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={pozo} alt="First slide"/>
                                </div>
                                <div className="carousel-item ">
                                    <img className="d-block w-100" src={building} alt="Second slide"/>
                                </div>
                                <div className="carousel-item ">
                                    <img className="d-block w-100" src={limpieza} alt="Third slide"/>
                                </div>
                                <div className="carousel-item ">
                                    <img className="d-block w-100" src={building2} alt="Fourth slide"/>
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
                    <div className="col-lg-6 text-center pt-5 pl-3 pr-3 DESC">
                        <div className="desc">
                            <p>La miner??a es un cliente potencial que tiene continuas ampliaciones y construcciones 
                        de campamentos y plantas de procesamiento de mineral. Por ello, es necesario crear 
                        valor en dise??os que involucren la calidad que siempre han exigido, pero que puedan 
                        integrar los planes de contingencia y variabilidad de la carga de trabajo, 
                        cumpliendo con las pol??ticas de seguridad, salud y medio ambiente.</p>
                        </div>
                        <div className="card-deck pl-5 pr-5">
                            <div className="card">
                                <div className="card-body">
                                    <img src={mineria} alt="logoMinera" />
                                    <h5 className="card-title">Miner??a</h5>
                                    <a href="/mineria" className="btn btn-primary">Ver m??s</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img src={inmobiliaria} alt="logoInmo" />
                                    <h5 className="card-title">Inmobiliaria</h5>
                                    <a href="/inmobiliaria" className="btn btn-primary">Ver m??s</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Servicios
