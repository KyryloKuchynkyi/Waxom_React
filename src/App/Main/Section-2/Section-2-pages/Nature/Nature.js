import React from "react";
import NatureList from "../Nature/NatureList";
import {Link} from "react-router-dom";

const Graphic = () => {
    return (
        <>
            <div className="row grid-rows-section2">
                <div className="text-section2">
                    <h3>Graphic</h3>
                </div>
                <div className="small-boxes">
                    <Link to="/"><li className="all">All</li></Link>
                    <Link to="/Graphic"><li className="Graphic_design">Graphic Design</li></Link>
                    <Link to="/Nature"><li className="Nature">Nature</li></Link>
                    <Link to="/Photography"><li className="photography">Photography</li></Link>
                </div>
                <div className="box-section2">
                    <NatureList/>
                </div>
                <button className="load-more">Load More</button>
            </div>
        </>
    )
}

export default Graphic