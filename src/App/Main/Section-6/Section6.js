import React from "react";

// IMAGES

import Photo_recent1 from '../Section-6/photo_recent1.png';
import Photo_recent2 from '../Section-6/photo_recent2.png';
import Photo_recent3 from '../Section-6/photo_recent3.png';


// CSS
import '../Section-6/Section6.css'
import '../../mobile_version.css';

const Section6 = () => {
    return (
        <>
            <section className="section6">
                <div className="container">
                    <div className="row grid-rows-section6">
                        <h3>Recent Posts.</h3>
                        <a>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit aut quo. Nesciunt quisquam id maiores soluta magni ipsam!</a>
                        <div className="boxes-section6">
                            <div className="box-section6">
                                <img src={Photo_recent1} alt="" />
                                <div className="txt-img-section6">
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat hic repellendus, eligendi similique reprehenderit odit quod vitae laboriosam cumque.</a>
                                    <button>Read More</button>
                                </div>
                            </div>
                            <div className="box-section6">
                                <img src={Photo_recent2} alt="" />
                                <div className="txt-img-section6">
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat hic repellendus, eligendi similique reprehenderit odit quod vitae laboriosam cumque.</a>
                                    <button>Read More</button>
                                </div>
                            </div>
                            <div className="box-section6">
                                <img src={Photo_recent3} alt="" />
                                <div className="txt-img-section6">
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat hic repellendus, eligendi similique reprehenderit odit quod vitae laboriosam cumque.</a>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section6