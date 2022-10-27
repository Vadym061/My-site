import React from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {ImLinkedin} from "react-icons/im";

const Footer = ()=>{
    return(
        <footer>
            <a href="#" className="footer__logo">SV</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#"></a></li>
            </ul>
            <div className="footer__social">
                <a href="https://www.facebook.com/profile.php?id=100008227939102&sk=groups" target="_blank"><FaFacebookF/></a>
                <a href="https://www.instagram.com/s_vadym1927/" target="_blank"><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/vadym-shtyra-52b629225/" target="_blank"><ImLinkedin/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; SV. All right reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;