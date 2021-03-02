import React from "react";
import {Link} from 'react-router-dom'

import "../../Header/Menu/menu.css";
import sec2, { getProductsObject } from "../Section-2/Info-box-sec2/sec2";
import "../photoPage/photoPage.css"
import Testimonials from "../../Components/Testimonials/Testimonials";

const photoPage = ({
    match,
    photosObject = getProductsObject(sec2),
}) => {
    console.log(match)
    const id = match.params.id
    return(
        <>
            <main>
                <section className="section2">
                    <div className="container margin">
                        <div className="row grid-rows-section2">
                            <Link to="/"><li className="all">To the main</li></Link>
                            <div className="text-section2">
                                <h3>About Project: {photosObject[id].id}</h3>
                            </div>
                            <div className="full-desc">
                                {photosObject[id].fullDescription}
                            </div>  
                        </div>
                    </div>
                    <Testimonials />
                </section>
            </main>
        </>
    )
}

export default photoPage