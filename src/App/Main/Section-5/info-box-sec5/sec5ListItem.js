import React, {Component} from 'react'
import PropTypes from "prop-types";



class sec5ListItem extends Component {
   
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
            <div className="nummbers" key={id}>
                <img src={image} alt="" />
                <h3>{info_h3}</h3>
                <a>{info_a}</a>
                <div className="border_bot"></div>
            </div>
        )
    }
}


sec5ListItem.propTypes = {
    image:PropTypes.string,
    info_h3:PropTypes.string.isRequired,
    info_a:PropTypes.string.isRequired,
}

sec5ListItem.defaultProps = {
    image:"images/noimage.png",
}



export default sec5ListItem