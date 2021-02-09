import React from "react";

import Header from "../App/Header/Header"
import Main from "../App/Main/Main"
import Footer from "../App/Footer/Footer"

// CSS

import '../common/style/reset.css'
import '../common/style/grid.css'
import './header.css'
import './slider.css'
import '../App/Main/main.css'
import '../App/Footer/Footer.css'
import './mobile_version.css'




const App = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App