import React from 'react'
import '../../css/campamentos.css'
import campamentoFondo from '../../images/campamentoFondo.png'
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/Footer.js'

const Campamento = () => {
    return (
        <>
            <Navbar />
            <div id="campamento">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carouselImg" src={campamentoFondo} alt="First slide"/>
                        </div>
                    </div>
                    <div className="carousel-caption">
                        <h1>CAMPAMENTOS MINEROS</h1>
                    </div>
                </div>
                <div class="container-fluid pt-5">
                    <div className="row">
                        <div className="col-lg-12 text-center mt-3 p-3 note">
                            <h6>ASESORÍA INTEGRAL EN TODO EL PROCESO</h6>
                            <p><i className="fa fa-phone"/> 954 779 870</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Campamento
