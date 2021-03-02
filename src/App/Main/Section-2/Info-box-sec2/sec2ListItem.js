import React, {Component} from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom"



class sec2ListItem extends Component {
   
    state = {
        
    }

    render() {

        const {
            id,
            image,
            info_h3,
            category,
        } = this.props;

        return (
            <div className="image_box" key={id}>
                <img src={image} alt="" />
                <div className="text_for_image">
                    <h3>{info_h3}</h3>
                    <div className="search-txt">
                        <Link to={category}>{category}</Link>
                    </div>
                    <Link to={`/about-photo/${id}`}><button>Read more</button></Link>
                </div>
            </div>
        )
    }
}


sec2ListItem.propTypes = {
    image:PropTypes.string,
    info_h3:PropTypes.string.isRequired,
    info_a:PropTypes.string.isRequired,
}

sec2ListItem.defaultProps = {
    image:"images/noimage.png",
}



export default sec2ListItem