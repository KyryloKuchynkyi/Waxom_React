
import React from "react";
import { Component } from "react";
import Sec2List from "../Section-2/Info-box-sec2/sec2List";
import PropTypes from "prop-types";
import {Link, Route} from "react-router-dom";
import Graphic from "./Section-2-pages/Graphic/GraphicList";
import Nature from "./Section-2-pages/Nature/NatureList"
import Photography from './Section-2-pages/Photography/PhotographyList'

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
                            <Route path="/"  exact component={Sec2List}/>
                            <Route path="/Graphic" component={Graphic}/>
                            <Route path="/Nature" component={Nature}/>
                            <Route path="/Photography" component={Photography}/>
                        </div>
                        <button className="load-more">Load More</button>
                    </div>
                </div>
            </section>
        </> 
    )
}




export default Section2