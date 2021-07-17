import React from 'react'
import '../css/nosotros.css'
import objetivos from '../images/objetivos.png'
import business from '../images/business.svg'

const Nosotros = () => {
    return (
        <div id="nosotros">
            <div className="container-fluid">
                <div className="row pl-5 pr-5">
                    <div className="col-lg-12 text-center pb-4 title">
                        <h2>NOSOTROS</h2>
                    </div>
                    
                </div>
                <div className="row m-3 pl-3 pr-3">
                    <div className="col-lg-4 obs mt-3 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={objetivos}  alt="Card image cap"/>
                            <div className="card-body">
                                <h5 class="card-title pb-2">Objetivos</h5>
                                <hr />
                                <p className="card-text pt-2">Ofrecer soluciones integrales de ingeniería para la construcción de campamentos y plantas mineras.</p><p>
                                Innovar en el diseño integrando tecnologías de desarrollo sostenible.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8  misVis mt-5">
                        <div className="card mb-3">
                            <div className="card-body">
                                <img className="reference" src={business} alt="mision image" />
                                <h5 className="card-title pb-2">Misión</h5>
                                <hr />
                                <p className="card-text pt-2">Optimizar el valor de tu proyecto asegurando tu rentabilidad. </p>
                            </div>
                        </div>
                        <div className="card mb-3 mt-4">
                            <div className="card-body">
                                <img className="reference" src={business} alt="vision image" />
                                <h5 className="card-title pb-2">Visión</h5>
                                <hr />
                                <p className="card-text pt-2">Gestionar tus proyectos cumpliendo los estándares dinámicos a lo largo de tu prospectiva de negocios.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Nosotros
