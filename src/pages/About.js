import React, { createRef, useEffect } from 'react';
import HomeNavigation from '../component/HomeNavigation';
import TitleAndText from '../component/TitleAndText';
import ImageAndText from '../component/ImageAndText';
import Button from '../component/Button';
import { NavLink } from 'react-router-dom'; 
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

                <TitleAndText title="Nos Préstations" text="Toutes nos prestations sont réalisées par des équipes qualifiées spécifiquement dans leur domaine. Cette qualité de travail nous a permis d'être certifié par des organismes reconnus et encadrés par l'État. Comme pour toutes nos prestations, Terabois propose une réalisation sur mesure et clé en main. " />

                {/* <Button link="/nous-contacter" value="En savoir plus"/> */}
    
                <ImageAndText img="./img/isolationint.jpg" alt="Isolation murs Intérieurs" title="Isolation murs interieurs" text="Il est primordial d’isoler les murs de votre habitation afin d’améliorer votre confort thermique. Étant la partie de votre maison la plus en contact avec l’extérieur, si les murs ne sont pas isolés, cela cause des transferts de chaleur entre l’extérieur et l’intérieur du logement. "  sens="left"/>

                <ImageAndText img="./img/ext-two.jpg" alt="Isolation " title="Isolation murs interieurs" text="L’isolation des murs extérieurs limite les échanges thermiques avec l’extérieur vous procurent un meilleur confort intérieur. Mais pas que … Pas de perte d’espace pour votre maison, limitation des ponts thermiques, déphasage optimisé et une nette amélioration des nuisances sonores. "  sens="right"/>

                <ImageAndText img="./img/isolationcombles.jpg" alt="Isolation Des Combles" title="Isolation Des Combles" text="Pour les combles perdus, l’absence d’isolation dans ces zones est la première cause de déperdition thermique de votre maison. En effet jusqu’à 
                30% de la chaleur d’une habitation s’échappe par vos combles. Ce travail demande minutie, et professionnalisme pour qu’elle reste efficace dans le temps.
                "  sens="left"/>

                <ImageAndText img="./img/photo-iti.jpg" alt="Isolation De la toiture" title="Isolation de la toiture (sous-rampant)" text="Comme pour les combles perdus, l’isolation sous-rampant permet d’optimiser la déperdition énergétique de votre maison, mais permet également d’aménager vos combles. "  sens="right"/>
                
                <Button link="/nous-contacter" addClass="new" value="Isoler mon logement"/>
                <NavLink to="/" className="first">Accueil</NavLink>
            </main>
        </>
    );
};

export default About;