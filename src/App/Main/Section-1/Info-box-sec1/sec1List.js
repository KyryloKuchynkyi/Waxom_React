import React from "react"
import Sec1 from "./sec1";
import Sec1ListItem from '../Info-box-sec1/sec1ListItem';

const sec1List = (

    ) => {
        return (
            <>
                <>
                    {
                        Sec1.map(({
                            id,
                            Icon,
                            info_h3,
                            info_a,
                        }) => (
                            <>
                                <Sec1ListItem
                                    id={id}
                                    Icon={Icon}
                                    info_h3={info_h3}
                                    info_a={info_a}
                                />
                            </>
                        ))
                    }
                </>
            </>
        )
    }
    
export default sec1List