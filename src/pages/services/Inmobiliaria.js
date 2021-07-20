import React from 'react'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'
import InmoVector from '../../images/inmobiliariaVector.jpg'
import '../../css/inmobiliaria.css'

const Inmobiliaria = () => {
    return (
        <>
            <Navbar />
            <div id="inmobiliaria">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carouselImg" src={InmoVector} alt="First slide"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inmobiliaria
