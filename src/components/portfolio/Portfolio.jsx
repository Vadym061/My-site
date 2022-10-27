import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Forkio.png";
import IMG2 from "../../assets/Главная — Venom 2.png";
import IMG3 from "../../assets/TheHam.png";
import IMG4 from "../../assets/Funiro.png";


const data =[
    {
        id: 1,
        image: IMG1,
        title: "Forkio",
        github: 'https://github.com/Vadym061/Forkio',
        demo: 'https://comforting-kashata-59afc3.netlify.app/',
        description: 'The project was created according to the layout, during training at DAN.IT adaptive layout and burger menu.'
    },
    {
        id: 2,
        image: IMG2,
        title: "VENOM-2",
        github: 'https://github.com/Vadym061/Venom2',
        demo: 'https://nifty-boyd-c4864e.netlify.app/',
        description: 'Layout according to the layout, VENOM movie trailer, adaptive layout.'
    },
    {
        id: 3,
        image: IMG3,
        title: "TheHam",
        github: 'https://github.com/Vadym061/TheHam-',
        demo: 'https://heartfelt-squirrel-534f64.netlify.app/',
        description: 'Layout according to the layout, not adaptive. But very interesting, the menu, tabs, slider, JavaScript and jQuery are involved'
    },
    {
        id: 4,
        image: IMG4,
        title: "Funiro",
        github: 'https://github.com/Vadym061/Funiro',
        demo: 'https://soft-entremet-f1aff8.netlify.app/',
        description: 'adaptive layout of a furniture store. Interesting sliders, adding a product to the cart and editions, forms, etc.'
    },
]

const Portfolio = ()=>{
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo, description})=>{
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="box portfolio__item-image">
                                    <img src={image} height="250" alt={title} />
                                    <p>{description}</p>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            
            </div>
        </section>
    )
}

export default Portfolio;