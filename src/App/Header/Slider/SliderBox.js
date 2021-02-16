import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import Background from '../../../common/images/Background.png' 
import Adventure from '../../../common/images/adventure.png'
import Bg2 from '../../../common/images/bg2.png'



const SliderBox = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Background}
                    alt="background"
                />
                <Carousel.Caption>
                    <div className="row grid-rows-slider">
                        <h2>First slide</h2>
                        <h3>Portfolio PSD Template</h3>
                        <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio ea velit animi nemo nisi saepe amet! At, laboriosam!</a>
                        <button>GET STARTED</button>
                    </div> 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Adventure}
                    alt="background"
                />
                <Carousel.Caption>
                    <div className="row grid-rows-slider">
                        <h2>Second slide</h2>
                        <h3>Portfolio PSD Template</h3>
                        <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio ea velit animi nemo nisi saepe amet! At, laboriosam!</a>
                        <button>GET STARTED</button>
                    </div> 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bg2}
                    alt="background"
                />
                <Carousel.Caption>
                    <div className="row grid-rows-slider">
                        <h2>Third slide</h2>
                        <h3>Portfolio PSD Template</h3>
                        <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio ea velit animi nemo nisi saepe amet! At, laboriosam!</a>
                        <button>GET STARTED</button>
                    </div> 
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default SliderBox