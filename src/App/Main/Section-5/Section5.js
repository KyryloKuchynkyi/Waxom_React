import React from "react";

// IMAGES

import Icon_clients from '../Section-5/icon_clients.png';
import Icon_cups from '../Section-5/icon_cupps.png';
import Icon_blog from '../Section-5/icon_blogpng.png';
import Icon_likes from '../Section-5/icon_likes.png';
import Icon_launch from '../Section-5/icon_launch.png';


// CSS
import '../Section-5/Section5.css'
import '../../mobile_version.css';

const Section5 = () => {
    return (
        <>
            <section className="section5">
                <div className="container">
                    <div className="row grid-columns-section5">
                        <div className="nummbers">
                            <img src={Icon_clients} alt="" />
                            <h3>3587</h3>
                            <a>CATISFIED CLIENTS</a>
                            <div className="border_bot"></div>
                        </div>
                        <div className="nummbers">
                            <img src={Icon_cups} alt="" />
                            <h3>207</h3>
                            <a>CUPS OF COFFEE</a>
                            <div className="border_bot"></div>
                        </div>
                        <div className="nummbers">
                            <img src={Icon_blog} alt="" />
                            <h3>2500</h3>
                            <a>BLOG POSTS</a>
                            <div className="border_bot"></div>
                        </div>
                        <div className="nummbers">
                            <img src={Icon_likes} alt="" />
                            <h3>873</h3>
                            <a>LIKES</a>
                            <div className="border_bot"></div>
                        </div>
                        <div className="nummbers">
                            <img src={Icon_launch} alt="" />
                            <h3>900</h3>
                            <a>WE LAUNCHED</a>
                            <div className="border_bot"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Section5