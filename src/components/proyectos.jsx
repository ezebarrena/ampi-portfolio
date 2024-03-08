import Foto from "../assets/pictures/Eze.png"
import vivunifami from "../assets/proyectos/VivUniFam.png"
function proyectos() {
    return (
        <div class="container" id="dp">
            
            <div className="row">
                <div className="col"></div>    
                <div className="col-6">         
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={vivunifami} class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Vivienda Unifamiliar</h5>
                                    <p>Proyecto Arquitectura 3</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={Foto} class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={Foto} class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                            
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
                <div className="col"></div>  
            </div>
            
              
        </div>
    )
}

export default proyectos;