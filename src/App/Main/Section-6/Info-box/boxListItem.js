import React, {Component} from 'react'
import PropTypes from "prop-types";

import '../../Section-6/Section6.css'
import '../../../mobile_version.css';



class BoxListItem extends Component {
   
    state = {
        
    }

    render() {

        const {
            id,
            image,
            info_h3,
            info_a,
        } = this.props;

        return (
            <>
                <img src={image} alt={id} />
                <div className="txt-img-section6">
                    <h3>{info_h3}</h3>
                    <a>{info_a}</a>
                    <button>Read More</button>
                </div>
            </>
        )
    }
}


BoxListItem.propTypes = {
    image:PropTypes.string,
    info_h3:PropTypes.string.isRequired,
    info_a:PropTypes.string.isRequired,
}

BoxListItem.defaultProps = {
    image:"images/noimage.png",
}



export default BoxListItem