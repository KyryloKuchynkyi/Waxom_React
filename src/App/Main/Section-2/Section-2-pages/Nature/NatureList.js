import React from "react";
import Sec2 from "../../Info-box-sec2/sec2";
import Sec2ListItem from "../../Info-box-sec2/sec2ListItem";




const NatureList= () => {
    return (
        <>
            {
                Sec2.filter(item => item.category == "Nature").map (({
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

export default NatureList