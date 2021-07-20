import React from 'react'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'
import '../../css/mineria.css'
import MineriaVector from '../../images/mineriaVector4.png'

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
            </div>
            <Footer />
        </>
    )
}

export default Mineria
