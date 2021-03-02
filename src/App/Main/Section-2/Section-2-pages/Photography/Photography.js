import React from "react";
import PhotographyList from "../Photography/PhotographyList";
import {Link} from "react-router-dom";

const Photography = () => {
    return (
        <>
            <section className="section2">
                <div className="container">
                    <div className="row grid-rows-section2">
                        <div className="text-section2">
                            <h3>Photography</h3>
                        </div>
                        <div className="small-boxes">
                            <Link to="/"><li className="all">Back</li></Link>
                        </div>
                        <div className="box-section2">
                            <PhotographyList/>
                        </div>
                        <button className="load-more">Load More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Photography