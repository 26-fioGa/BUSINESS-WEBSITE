import React from 'react'
import '../css/contacto.css'
import credentials from '../credentials/credentials.js'
import Map from '../components/Map'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

const Contacto = () => {
    return (
        <div id="contacto">
            <div className="container-fluid">
                <div className="row pl-5 pr-5">
                    <div className="col-lg-12 text-center pb-4 title">
                        <h2>CONTÁCTANOS</h2>
                    </div>
                    
                </div>
                <div className="row m-3 pl-3 pr-3">
                    <div className="col-lg-4 mt-3 mb-4 canalColumn">
                        <div className="card canals">
                            <div className="card-body">
                                <a class="nav-link"> <i className="fa fa-envelope"/>  Email: proyintereirl@gmail.com</a>
                                <a class="nav-link"> <i className="fa fa-phone"/>  Teléfono: 954 779 870</a>
                                <a class="nav-link"> <i className="fa fa-map-marker-alt"/>  Dirección: San Gregorio 328, Urb.San Diego, SMP, Lima</a>
                                <Map 
                                    googleMapURL = {mapURL}   
                                    containerElement = {<div className="contenedor-mapa"/>}
                                    mapElement = {<div className="mapa"/>}
                                    loadingElement = {<p>Cargando...</p>}       
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3 mb-4 ">
                        <div className="card formulario">
                            <div className="card-body">
                                <form className="p-3">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="nombre">Nombre</label>
                                            <input type="text" className="form-control" id="nombre" placeholder="José Pérez"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="ejemplo@email.com"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="asunto">Asunto</label>
                                        <input type="text" className="form-control" id="asunto" placeholder="Puede colocar cualquier texto."/>
                                    </div>
                                    <div className="form-group">
                                        <label for="mensaje">Mensaje</label>
                                        <textarea type="text" className="form-control" id="mensaje"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contacto
