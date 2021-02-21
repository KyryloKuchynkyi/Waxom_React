import React from "react";
import Sec5List from "../Section-5/info-box-sec5/sec5List";

// IMAGES

// CSS
import '../Section-5/Section5.css'

const Section5 = () => {
    return (
        <>
            <section className="section5">
                <div className="container">
                    <div className="row grid-columns-section5">
                        <Sec5List/>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section5