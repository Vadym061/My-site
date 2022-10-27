import React from "react";
import "./experience.css";
import {ImHtmlFive} from "react-icons/im";
import {SiCss3} from "react-icons/si";
import {TbBrandJavascript} from "react-icons/tb";
import {DiJqueryLogo} from "react-icons/di";
import {FaBootstrap} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {SiReact} from "react-icons/si";
import {IoLogoSass} from "react-icons/io";
import {FaGulp} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {FaNodeJs} from "react-icons/fa";
import {SiMongodb} from "react-icons/si";
import {VscJson} from "react-icons/vsc";
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = ()=>{
    return(
        <section id="experience">
            <h5>The Skills I Have</h5>
            <h2>My Experience</h2>

            <div className=" container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <ImHtmlFive className="html"/>
                            <div className="section__html">
                            <h4>HTML</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiCss3 className="css"/>
                            <div className="section__css">
                            <h4>CSS</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <IoLogoSass className="sass"/>
                            <div className="section__sass">
                            <h4>Sass</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <TbBrandJavascript className="js"/>
                            <div className="section__js">
                            <h4>JavaScript</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiJqueryLogo className="jquery"/>
                            <div className="section__jquery">
                            <h4>jQuery</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaBootstrap className="bootstrap"/>
                            <div className="section__bootstrap">
                            <h4>Bootstrap</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiTailwindcss className="tailwind"/>
                            <div className="section__tailwind">
                            <h4>Tailwind</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiReact className="react"/>
                            <div className="section__react">
                            <h4>React</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaGulp className="gulp"/>
                            <div className="section__gulp">
                            <h4>Gulp</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsGithub className="git"/>
                            <div className="section__git">
                            <h4>GIT</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaNodeJs className="node"/>
                            <div className="section__node">
                            <h4>Node.js</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMongodb className="mongo"/>
                            <div className="section__mongo">
                            <h4>MongoDB</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <VscJson className="json"/>
                            <div className="section__json">
                            <h4>JSON</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="bem"/>
                            <div className="section__bem">
                            <h4>BEM</h4>
                            <ul>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle circle-bg"></span></li>
                                <li><span className="circle"></span></li>
                            </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;