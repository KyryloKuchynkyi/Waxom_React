import React from "react";
import GraphicList from "../Graphic/GraphicList";
import {Link} from "react-router-dom";
import Section2 from "../../Section2";

const Graphic = () => {
    return (
        <>
        <section className="section2">
            <div className="container">
                <div className="row grid-rows-section2">
                    <div className="text-section2">
                        <h3>Graphic</h3>
                    </div>
                    <div className="small-boxes">
                        <Link to="/"><li className="all">Back</li></Link>
                    </div>
                    <div className="box-section2">
                        <GraphicList/>
                    </div>
                    <button className="load-more">Load More</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Graphic