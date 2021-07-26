import React from 'react'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'
import InmoFondo from '../../images/inmobiliariaFondo.png'
import '../../css/inmobiliaria.css'

const Inmobiliaria = () => {
    return (
        <>
            <Navbar />
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
            </div>
            <Footer />
        </>
    )
}

export default Inmobiliaria
