import React from "react";

// IMAGES
import Logo from '../Menu/logo.png';
import Waxom from '../Menu/Waxom.png';
import Icon_cart from '../Menu/icon-cart.png';
import Icon_search from '../Menu/icon-search.png';

// CSS
import '../Menu/Menu.css';
import '../../mobile_version.css';

const Menu = () => {
    return (
        <>
            <div className="container z-index-2">
                    <div className="row grid-columns-header">
                        <div className="logo-place">
                            <img src={Logo} alt="" />
                            <img src={Waxom}  alt="" />
                        </div>
                        <div className="menu-place">
                            <nav className="navigation hidden-menu">
                                <ul className="menuTitle">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Portfolio</a></li>
                                    <li><a href="">Features</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Pricing</a></li>
                                    <li><a href="">Shortcodes</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="back-ground-gamburger-menu">
                                <div className="nav-gamburger-menu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="search-place">
                            <img src={Icon_cart} alt="" />
                            <img src={Icon_search} alt="" />
                        </div>
                    </div>
                </div>
        </>
    )
}



export default Menu