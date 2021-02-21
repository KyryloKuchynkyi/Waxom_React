import React,{Component} from "react";
import Sec5 from "./sec5";
import Sec5ListItem from "../info-box-sec5/sec5ListItem";



class Sec5List extends Component {

    state = {
        
    }



    render() {
        return (
            <>
                {
                    Sec5.map (({
                        id,
                        image,
                        info_h3,
                        info_a,
                    }) => (
                        <>
                            <Sec5ListItem
                                id={id}
                                image={image}
                                info_h3={info_h3}
                                info_a={info_a}
                            />
                        </>
                    ))
                }
            </>
        )
    }
}

export default Sec5List