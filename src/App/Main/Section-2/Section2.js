import React from "react";

// IMAGES

import Photo1 from '../Section-2/photo1.png';
import Photo2 from '../Section-2/photo2.png';
import Photo3 from '../Section-2/photo3.png';
import Photo4 from '../Section-2/photo4.png';
import Photo5 from '../Section-2/photo5.png';
import Photo6 from '../Section-2/photo6.png';


// CSS
import '../Section-2/Section2.css'

const Section2 = () => {
    return (
        <>
            <section className="section2">
                <div className="container">
                    <div className="row grid-rows-section2">
                        <div className="text-section2">
                            <h3>Our Latest Projects.</h3>
                            <a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis pariatur iusto, dolores consequatur rem quo excepturi eum omnis reiciendis!</a>
                        </div>
                        <div className="small-boxes">
                            <button className="all">All</button>
                            <button className="web_design">Web Design</button>
                            <button className="mobile_app">Mobile App</button>
                            <button className="illustration">Illustration</button>
                            <button className="photography">Photography</button>
                        </div>
                        <div className="box-section2">
                            <div className="image_box">
                                <img src={Photo1} alt="" />
                                <div className="text_for_image">
                                    <h3>Claritas Etiam Processus</h3>
                                    <div className="search-txt">
                                        <a>Photography,</a>
                                        <a>Nature</a>
                                    </div>
                                </div>
                            </div>
                            <div className="image_box">
                                <img src={Photo2} alt="" />
                                <div className="text_for_image">
                                    <h3>Claritas Etiam Processus</h3>
                                    <div className="search-txt">
                                        <a>Graphic Design,</a>
                                        <a>Mock-up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="image_box">
                                <img src={Photo3} alt="" />
                                <div className="text_for_image">
                                    <h3>Claritas Etiam Processus</h3>
                                    <div className="search-txt">
                                        <a>Photography,</a>
                                        <a>Holiday</a>
                                    </div>
                                </div>
                            </div>
                            <div className="image_box">
                                <img src={Photo4} alt="" />
                                <div className="text_for_image">
                                    <h3>Claritas Etiam Processus</h3>
                                    <div className="search-txt">
                                        <a>Photography,</a>
                                        <a>Nature</a>
                                    </div>
                                </div>
                            </div>
                            <div className="image_box">
                                <img src={Photo5} alt="" />
                                <div className="text_for_image">
                                    <h3>Claritas Etiam Processus</h3>
                                    <div className="search-txt">
                                        <a>Graphic Design,</a>
                                        <a>Mock-up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="image_box">
                                <img src={Photo6} alt="" />
                                <div className="text_for_image">
                                    <h3>Claritas Etiam Processus</h3>
                                    <div className="search-txt">
                                        <a>Photography,</a>
                                        <a>Holiday</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more">Load More</button>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section2