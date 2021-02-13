import React from 'react'
import box from "../Info-box/box";
import BoxListItem from "../Info-box/boxListItem";


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
                        <>
                            <BoxListItem 
                                id={id}
                                image={image}
                                info_h3={info_h3}
                                info_a={info_a}
                            />
                        </>
                    ))
                }
            </section>
        </>
    )
}

export default BoxList