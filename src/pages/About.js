import React, { createRef, useEffect } from 'react';
import HomeNavigation from '../component/HomeNavigation';
import TitleAndText from '../component/TitleAndText';
import ImageAndText from '../component/ImageAndText';
import Button from '../component/Button';
import { NavLink } from 'react-router-dom'; 
import {mpl} from 'my-personnal-library';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * It's a function that returns a JSX element.
 * @returns It's a function that returns a JSX element.
 */
const About = () => {

    /* It's a hook that allows us to create a reference to a DOM element. */
    const navBar = createRef()

    ScrollTrigger.defaults({
        toggleActions: "play none none reverse",
    })

    /* It's a function from my personnal library. It's a function that return the sum of two numbers. */
    mpl(2, 3)

    /* It's a function from react that allow to change the title of the page. */
    useEffect (()=>{
        document.title = "TeraBois | Nos Préstations"    
        window.scrollTo(0, 0);   /* It's a hook that allows you to perform side effects in function components. */
        gsap.to(navBar.current, {
            duration: 0.3,
            y: 0,
            autoAlpha: 1,
            display: "flex",
            height: "4.5rem",
            ease: "back.out(0.3)",
            scrollTrigger: {
                trigger: ".titleAndText",
                start: "bottom top+=76"
                // markers: true
            }
        })
    }, [])

    /* It's a function that returns a JSX element. */
    return (
        <>
            <header className="aboutHeader">
                <HomeNavigation urlValue='about' />
            </header>
            <main className="about">
                <div className='headerFixed' ref={navBar}>
                    <HomeNavigation visibility={false} gsap={true} />
                </div>
                <p className="littleConnect">Déjà un projet avec nous ? <br/> <NavLink to='/connection'>Connectez-vous</NavLink></p>

                <TitleAndText title="Nos Préstations" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi." />

                {/* <Button link="/nous-contacter" value="En savoir plus"/> */}
    
                <ImageAndText img="./img/photo-iti.jpg" alt="Isolation Exterieur" title="Isolation exterieur" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi."  sens="left"/>

                <ImageAndText img="./img/photo-iti.jpg" alt="Isolation Interieur" title="Isolation Interieur" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi."  sens="right"/>

                <ImageAndText img="./img/photo-iti.jpg" alt="Isolation Des Combles" title="Isolation Des Combles" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi."  sens="left"/>

                <ImageAndText img="./img/photo-iti.jpg" alt="Isolation De la toiture" title="Isolation De la toiture" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi."  sens="right"/>
                
                <Button link="/nous-contacter" addClass="new" value="Isoler mon logement"/>
                <NavLink to="/" className="first">Accueil</NavLink>
            </main>
        </>
    );
};

export default About;