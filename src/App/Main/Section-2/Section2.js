import React from "react";
import Sec2List from "../Section-2/Info-box-sec2/sec2List";

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
                            <button className="all">All</button>
                            <button className="web_design">Web Design</button>
                            <button className="mobile_app">Mobile App</button>
                            <button className="illustration">Illustration</button>
                            <button className="photography">Photography</button>
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