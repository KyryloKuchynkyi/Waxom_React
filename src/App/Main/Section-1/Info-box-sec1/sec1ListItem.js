import React, {Component} from 'react'
import PropTypes from "prop-types";



class sec1ListItem extends Component {
   
    state = {
        
    }

    render() {

        const {
            id,
            Icon,
            info_h3,
            info_a,
        } = this.props;

        return (
            <div className="section1-box" key={id}>
                <img src={Icon} alt="" />
                <h3>{info_h3}</h3>
                <a>{info_a}.</a>
                <div className="section1-box-bottom-border"></div>
            </div>
        )
    }
}


sec1ListItem.propTypes = {
    image:PropTypes.string,
    info_h3:PropTypes.string.isRequired,
    info_a:PropTypes.string.isRequired,
}

sec1ListItem.defaultProps = {
    image:"images/noimage.png",
}



export default sec1ListItem