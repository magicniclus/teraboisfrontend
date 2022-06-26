import React, { createRef, useEffect } from 'react';
import HomeNavigation from '../component/HomeNavigation';
import { NavLink } from 'react-router-dom';
import Button from "../component/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../component/DropDown';
import TitleAndText from '../component/TitleAndText';
import ImageAndText from '../component/ImageAndText';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Comments from '../component/comments/Comments';

gsap.registerPlugin(ScrollTrigger);
/**
 * It's a function that returns a JSX element
 * @returns The HomePage component is being returned.
 */
const HomePage = () => {

    /* It's a hook that allows us to create a reference to a DOM element. */
    const navBar = createRef()

    ScrollTrigger.defaults({
        // start: "top center",
        toggleActions: "play none none reverse",
    })
    // let t1 = gsap.timeline({delay: 0.3})

    /* It's a hook that allows you to perform side effects in function components. */
    useEffect(() => {
        document.title = "TeraBois | Accueil"
        window.scrollTo(0, 0); 
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
            }
        })
        gsap.fromTo(".titleAndText", {x: 3000}, {duration:1, x: 0, clearProps: "x", ease: "back.out(0.3)"})
        gsap.fromTo(".specialiste", {opacity: 0}, { duration: 1, delay:0.7, opacity: 1, clearProps:'x', ease: "back.out"})
        gsap.fromTo(".homePageHeader", {opacity: 0}, {delay:0.5, duration:1, opacity: 1, ease: "back.out(0.3)"})
        gsap.fromTo(".bottomContainerTitle", {x: 3000}, {duration:1, x: 0, clearProps: "x", ease: "back.out(0.3)"})
        gsap.fromTo(".avantageContainer", {x: 3000}, {duration:1, x: 0, clearProps: "x", ease: "back.out(0.3)"})
    }, [])



   /* It's a function that returns a JSX element */
    return (
        <>
            <header className="homePageHeader">
                <HomeNavigation urlValue='accueil' />
            </header>
            <main className="homePage">
                <div className='headerFixed' ref={navBar}>
                    <HomeNavigation visibility={false} gsap={true} />
                </div>
                <div className="containerTop">
                    <p className="littleConnect">Déjà un projet avec nous ? <br/> <NavLink to='/connection'>Connectez-vous</NavLink></p>
                    <TitleAndText title="Maison TeraBois" text='“Notre savoir-faire au service de votre bien-être”' img="" />
                        <Button value="Isoler mon logement" link="/nous-contacter"/>
                    <section className="specialiste">
                        <ImageAndText addClass="imageAndText" sens="left" img="./img/test/isolation/isolationQuatre.jpeg" alt="isolation interieur" title="Spécialiste de l’économie d’énergie " text= "TeraBois, spécialiste en économie d'énergie de l'habitat depuis plus de 10 ans, TeraBois est avant tout une entreprise familiale et artisanale. Notre savoir faire nous a permis de nous piositionner comme l'entreprise leader dans son domaine." /> 
                    </section>
                    <NavLink to="/about" className="btnUn">En savoir plus</NavLink>
                </div>    
                <section className="smallBottomContainer">
                    <DropDown question="Pourquoi bien isoler son logement ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Les aides de l'état " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Comment ça fonctionne ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <DropDown question="Qui sommes-nous ? " text="Lorem ipsum dolor sit amet. Aut nesciunt distinctio ab quasi ipsam non voluptatem inventore aut explicabo modi eum porro beatae. Est commodi officiis et fugiat nemo sit minus voluptatum. Sed porro error aut inventore minima vel architecto velit ea accusantium officiis."/>
                    <div className="btnContainer">
                        <Button value="Isoler mon logement" link="/nous-contacter"/>
                    </div>
                </section>
                <section className="bottomContainer">
                    <h2 className='bottomContainerTitle'>Pourquoi bien faire isoler son logement ?</h2>
                    <div className="avantageContainer">
                        <div className="aidesContainer">
                            <h3 className='aides'>Jusqu'à <br/> 50 000€ d'aîde</h3>
                        </div>
                        <div className="checkUn check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Facture réduite</span>
                        </div>
                        <div className="checkDeux check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Gain en confort</span>
                        </div>
                        <div className="checkTrois check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Maison plus saine</span>
                        </div>
                        <div className="checkQuatre check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Participation à l'éffort écologique</span>
                        </div>
                        <div className="checkQuatre check">
                            <FontAwesomeIcon icon={faCircleCheck} /> 
                            <span>Strict respect des normes de l'État</span>
                        </div>
                            <div className="endContainer"><NavLink to="/nous-contacter" className="btnUn">Isoler mon <br/>logement</NavLink></div>
                    </div>
                    <div className="garantiesContainer">
                        <div className="garanties">
                            <img src="./img/SVG/1x/shield.png" alt="shield"/>
                            <p>Garantie décénale</p>
                        </div>
                        <div className="garanties">
                            <img src="./img/SVG/1x/hand.png" alt="hand"/>
                            <p>Devis gratuit <br/> en 24/48h</p>
                        </div>
                        <div className="garanties">
                            <img src="./img/SVG/1x/feather.png" alt="hand"/>
                            <p>Données 100% <br/> sécurisées</p>
                        </div>
                        <div className="garanties">
                            <img src="./img/SVG/1x/phone.png" alt="hand"/>
                            <p>SAV 7/7j</p>
                        </div>
                    </div>
                </section>
                {/* <section className='showComments'>
                    <Comments />
                </section> */}
            </main>
        </>
    );
};

export default HomePage;