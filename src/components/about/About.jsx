import React from "react";
import "./about.css";
import ME from '../../assets/jpg19-bgPrev.png';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = ()=>{
    return(
        <section id="about">
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} height='400' alt="My photo" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Project</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>
                    <p>
                    My whole life is connected with computer technologies. But I began to deal with them more professionally two years ago, 
                    when I began to acquire a specialty in the field of Front-End development. I realized that this is my passion, I want to improve and develop further 
                    in the direction I have chosen. Yes, in a year I see myself as a mid-level Front-End developer, and I also have a desire to create projects to meet the 
                    needs of customers.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;