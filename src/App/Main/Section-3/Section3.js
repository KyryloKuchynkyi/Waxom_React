import React from "react";

// IMAGES

import Icon_play from '../Section-3/icon-play.png';



// CSS
import '../Section-3/Section3.css'
import '../../mobile_version.css';

const Section3 = () => {
    return (
        <>
            <section className="section3">
                <div className="container">
                    <div className="row grid-rows-section3">
                        <img src={Icon_play} alt="" />
                        <h3>Waxom Video Presentation</h3>
                        <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus perferendis numquam incidunt hic.</a>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section3