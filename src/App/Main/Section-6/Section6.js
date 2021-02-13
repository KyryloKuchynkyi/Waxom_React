import React from "react";
import BoxList from "../Section-6/Info-box/boxList"

// IMAGES


// CSS
import '../Section-6/Section6.css'

const Section6 = () => {
    return (
        <>
            <section className="section6">
                <div className="container">
                    <div className="row grid-rows-section6">
                        <h3>Recent Posts.</h3>
                        <a>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit aut quo. Nesciunt quisquam id maiores soluta magni ipsam!</a>
                        <BoxList/>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section6