import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/jpg20-removebg-preview.png";
import HeaderSocial from "./HeaderSocial";


const Header = ()=>{
    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Shtyra Vadym</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA/>
                <HeaderSocial/>

                <div className="me">
                    <img src={ME} className="avatar" height="300" alt="me avatar" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
