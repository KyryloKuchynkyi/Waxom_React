import React from "react";
import Sec2 from "./sec2";
import Sec2ListItem from "../Info-box-sec2/sec2ListItem";



const Sec2List = () => {
    return (
        <>
            {
                Sec2.map (({
                    id,
                    image,
                    info_h3,
                    category,
                }) => (
                    <>
                        <Sec2ListItem
                            id={id}
                            image={image}
                            info_h3={info_h3}
                            category={category}
                        />
                    </>
                ))
            }
        </>
    )
}

export default Sec2List