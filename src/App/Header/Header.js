import React from "react";
import Menu from "../Header/Menu/Menu";
import Slider from "../Header/Slider/Slider"


// CSS
import './Header.css'





const Header = () => {
    return (
        <>
            <header className="header">
                <Menu/>
                <Slider/>
            </header>
        </>
    )
}



export default Header