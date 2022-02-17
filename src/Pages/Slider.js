import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="images/slides/slider-mainbg-001.jpg" alt="First slide"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>asasasasasas</h2>
                        <p>grat!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="images/slides/slider-mainbg-002.jpg" alt="Second slide"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>AHI</h2>
                        <p>ffff</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="images/slides/slider-mainbg-001.jpg" alt="Third slide"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>AHi</h5>
                        <p>ghghgh</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )

}

export default Slider