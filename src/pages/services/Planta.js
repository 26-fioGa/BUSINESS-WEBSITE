import React from 'react'
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
                
            </div>
            <Footer />
        </>
    )
}

export default Planta
