import React from "react";


import Sec1List from '../Section-1/Info-box-sec1/sec1List'
// CSS
import '../../../common/style/grid.css'
import './Section1.css'


const Section1 = () => {
    return (
        <>
            <section className="section1">
                <div className="container">
                    <div className="row grid-columns-section1">
                        <Sec1List/>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section1