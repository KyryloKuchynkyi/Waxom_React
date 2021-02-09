import React from "react";

// IMAGES


// CSS
import '../Footer/Footer.css'
import '../mobile_version.css'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row grid-columns-footer">
                        <div className="box-footer">
                            <div className="text-footer"><a href="">Copiright @2015 Waxom </a></div>
                            <div className="text-footer"><a href="">Privacy Policy</a></div>
                            <div className="text-footer"><a href="" className="faq">FAQ</a></div>
                            <div className="text-footer"><a href="">Support</a></div>
                        </div>
                        <div className="box-footer">
                            <div className="text-footer"><a href="">Designed by ThemeFire</a></div>
                            <div className="text-footer"><a href="">Only on envanto Market</a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}



export default Footer