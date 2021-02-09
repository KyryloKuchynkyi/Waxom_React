import React from "react";

// IMAGES


import logo01 from '../Section-7/logo-01.png';
import logo02 from '../Section-7/logo-02.png';
import logo03 from '../Section-7/logo-03.png';
import logo04 from '../Section-7/logo-04.png';


// CSS
import '../Section-7/Section7.css'
import '../../mobile_version.css';

const Section7 = () => {
    return (
        <>
            <section className="section7">
                <div className="container">
                    <div className="row grid-columns-section7">
                        <img src={logo01} alt="" />
                        <img src={logo02} alt="" />
                        <img src={logo03} alt="" />
                        <img src={logo04} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section7