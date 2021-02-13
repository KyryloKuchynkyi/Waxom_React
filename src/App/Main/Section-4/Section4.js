import React from "react";

// IMAGES

import Iphone_in_hand from '../Section-4/iPhone in hand.png';
import O4 from '../Section-4/04.png';

// CSS
import '../../../common/style/grid.css'
import '../Section-4/Section4.css'

const Section4 = () => {
    return (
        <>
            <section className="section4">
                <div className="container">
                    <div className="row grid-columns-section4">
                        <img src={Iphone_in_hand} alt="" />
                        <div className="text-section4">
                            <h3>Excellent for Mobile Devices.</h3>
                            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem soluta porro! Quisquam error debitis est non mollitia fugit aspernatur cum iure odio nostrum earum, expedita obcaecati assumenda commodi culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime praesentium laboriosam animi voluptates blanditiis minima est ab deleniti. Cupiditate est suscipit reprehenderit id alias! Dolore assumenda cupiditate quisquam esse!</a>
                            <div className="exept">
                                <div className="arrow">
                                    <img src={O4} alt="" />
                                    <a>Lorem ipsum dolor sit, amet consectetur adipisicing.</a>
                                </div>
                                <div className="arrow">
                                    <img src={O4} alt="" />
                                    <a>Lorem ipsum dolor sit, amet consectetur adipisicing.</a>
                                </div>
                                <div className="arrow">
                                    <img src={O4} alt="" />
                                    <a>Lorem ipsum dolor sit, amet consectetur adipisicing.</a>
                                </div>
                                <div className="arrow">
                                    <img src={O4} alt="" />
                                    <a>Lorem ipsum dolor sit, amet consectetur adipisicing.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section4