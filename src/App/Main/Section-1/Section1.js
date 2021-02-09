import React from "react";

// IMAGES

import Icon1 from '../Section-1/icon.png';
import Icon2 from '../Section-1/icon2.png';
import Icon3 from '../Section-1/icon3.png';
import Icon4 from '../Section-1/icon4.png';

// CSS
import './Section1.css'
import '../../mobile_version.css';

const Section1 = () => {
    return (
        <>
            <section className="section1">
                <div className="container">
                    <div className="row grid-columns-section1">
                        <div className="section1-box">
                            <img src={Icon1} alt="" />
                            <h3>Web and App Design</h3>
                            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam tempore nesciunt maxime magni minima.</a>
                            <div className="section1-box-bottom-border"></div>
                        </div>
                        <div className="section1-box">
                            <img src={Icon2} alt="" />
                            <h3>Development</h3>
                            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam tempore nesciunt maxime magni minima.</a>
                            <div className="section1-box-bottom-border"></div>
                        </div>
                        <div className="section1-box">
                            <img src={Icon3} alt="" />
                            <h3>Customization</h3>
                            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam tempore nesciunt maxime magni minima.</a>
                            <div className="section1-box-bottom-border"></div>
                        </div>
                        <div className="section1-box">
                            <img src={Icon4} alt="" />
                            <h3>Marketing</h3>
                            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam tempore nesciunt maxime magni minima.</a>
                            <div className="section1-box-bottom-border"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section1