
import React from "react";

import Sec2List from "../Section-2/Info-box-sec2/sec2List";

import {Link, Route} from "react-router-dom";


// IMAGES


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
                            <Link to="/"><li className="all">All</li></Link>
                            <Link to="/Graphic"><li className="Graphic_design">Graphic Design</li></Link>
                            <Link to="/Nature"><li className="Nature">Nature</li></Link>
                            <Link to="/Photography"><li className="photography">Photography</li></Link>
                        </div>
                        <div className="box-section2">
                            <Sec2List/>
                        </div>
                        <button className="load-more">Load More</button>
                    </div>
                </div>
            </section>
        </> 
    )
}




export default Section2