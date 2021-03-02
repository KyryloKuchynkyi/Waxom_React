import React from "react";
import NatureList from "../Nature/NatureList";
import {Link} from "react-router-dom";

const Nature = () => {
    return (
        <>
            <section className="section2">
                <div className="container">
                    <div className="row grid-rows-section2">
                        <div className="text-section2">
                            <h3>Nature</h3>
                        </div>
                        <div className="small-boxes">
                            <Link to="/"><li className="all">Back</li></Link>
                        </div>
                        <div className="box-section2">
                            <NatureList/>
                        </div>
                        <button className="load-more">Load More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nature