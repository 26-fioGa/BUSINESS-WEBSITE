import React from 'react'
import '../css/contacto.css'
import credentials from '../credentials/credentials.js'
import Map from '../components/Map'
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

const Contacto = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ym14awh', 'template_jmhn0n3', e.target, 'user_HuaaZKrrL3CavoCy8t2eW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        swal({
            title: 'MENSAJE ENVIADO',
            text: '¡Gracias por contactarnos!',
            icon: 'success',
            button: 'Aceptar'
        })
    }
    return (
        <div id="contacto">
            <div className="container-fluid">
                <div className="row pl-5 pr-5">
                    <div className="col-lg-12 text-center pb-4 title">
                        <h2>CONTÁCTANOS</h2>
                    </div>
                    
                </div>
                <div className="row pt-4 m-3 pl-3 pr-3">
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
                                <form className="p-3" onSubmit={sendEmail}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="fullName">Nombre</label>
                                            <input name="fullName" type="text" className="form-control" id="fullName" placeholder="José Pérez" required/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="email">Email</label>
                                            <input name="email" type="email" className="form-control" id="email" placeholder="ejemplo@email.com" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="phone">Número de celular</label>
                                        <input name="phone" type="tel" className="form-control" id="phone" placeholder="999999999" required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Mensaje</label>
                                        <textarea name="message" type="text" className="form-control" id="message" required/>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value="Enviar"/>
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
