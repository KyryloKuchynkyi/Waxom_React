import React from 'react'
import box from "../Info-box/box";
import BoxListItem from "../Info-box/boxListItem";

import "../Section6.css"
import '../../../mobile_version.css';


const BoxList = (

) => {
    return (
        <>
            <section className="boxes-section6">
                {
                    box.map(({
                        id,
                        image,
                        info_h3,
                        info_a,
                    }) => (
                        <div className="box-section6" key={id}>
                            <BoxListItem 
                                id={id}
                                image={image}
                                info_h3={info_h3}
                                info_a={info_a}
                            />
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default BoxList