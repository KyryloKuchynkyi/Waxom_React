import React, {Component} from 'react'
import PropTypes from "prop-types";



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
            <div className="box-section6" key={id}>
                <img src={image} alt={id} />
                <div className="txt-img-section6">
                    <h3>{info_h3}</h3>
                    <a>{info_a}</a>
                    <button>Read More</button>
                </div>
            </div>
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