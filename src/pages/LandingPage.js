import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../component/DropDown';
import Formulaire from '../component/formulaire/Formulaire';
import LandingPageNavigation from '../component/LandingPageNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { prospectIsNotValid, removeProspect } from '../redux/actions/action';
import { useState } from 'react';
import { whatPage } from '../utils/titleManager';

const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])

    /* It's a hook that allows you to dispatch actions to the Redux store. */
    const dispatch = useDispatch()

    const [upButtonOne, setUpButtonOne] = useState(false)
    const [upButtonTwo, setUpButtonTwo] = useState(false)
    const [upButtonThree, setUpButtonThree] = useState(false)
    const [upButtonFour, setUpButtonFour] = useState(false)

    /**
     * It dispatches two actions, one to remove the prospect from the store, and the other to set the
     * prospect's validity to false
     */
    const closeModal = () => {
        dispatch(removeProspect())
        dispatch(prospectIsNotValid())
    }

    /* It's a function that allows to change the title of the page depending on the page you are on. */
    whatPage()

    /**
     * It shows a modal when the user clicks on the submit button.
     * @returns The modal is being returned.
     */
    const showModal = () => {
        return (
            <div className="modalValide">
                <div className="Container">
                        <NavLink to="/accueil" className="btnUn"><FontAwesomeIcon icon={faXmark} onClick={closeModal} /></NavLink>
                    <div className='modalContainer'>
                        <h3>Merci, <br /> nous vous contacterons dans les 24/48h.</h3>
                    </div>
                </div>
            </div>
        )
    }

    const handleButtonOne = () => {
        setUpButtonTwo(false)
        setUpButtonThree(false)
        setUpButtonFour(false)
    }

    const handleButtonTwo = () => {
        setUpButtonOne(false)
        setUpButtonThree(false)
        setUpButtonFour(false)
    }

    const handleButtonThree = () => {
        setUpButtonOne(false)
        setUpButtonTwo(false)
        setUpButtonFour(false)
    }

    const handleButtonFour = () => {
        setUpButtonOne(false)
        setUpButtonTwo(false)
        setUpButtonThree(false)
    }

    const state = useSelector(state => state)

    /* It's a hook that allows you to subscribe to Redux store updates. */
    const prospectValid = useSelector(state => state.prospectValid);

    /* It's a function that allows to change the title of the page depending on the page you are on. */
    return (
        <>
            {prospectValid ? showModal() : null}
            <header>
                <LandingPageNavigation />
            </header>
            <main className="landingPage" >
                <div className="globalContainer">
                    <div className="connectionMobile">
                        <p>Déjà un projet avec nous ?</p>
                        <NavLink to="/connection">Connectez-vous</NavLink>
                    </div>
                    <section className="leftContainer">
                        <div className="container">
                            <div className="whereAreMe">
                                <NavLink to="/">Terabois</NavLink>
                                <img src="./img/SVG/chevron-right-black.png" alt="chevron right" />
                                <p>Isolation</p>
                            </div>
                            <div className="textContainer">
                                <div className="title">
                                    <h1>Isolation</h1>
                                    <p>Jusqu'à <span>50000€</span> d'aide</p>
                                    <p>Connaître mon élligibilité aux aides de l'état</p>
                                </div>
                                <div className="question">
                                    <DropDown
                                        question="Pourquoi bien isoler son logement ?"
                                        text="Facture réduite,
                                        Gain en confort,
                                        Maison plus saine,
                                        Participation à l'éffort écologique,
                                        Valorisation du logement, toutes ces raisons rende indispensable une bonne isolation de votre logement.
                                        "
                                        callback={setUpButtonOne}
                                        return={upButtonOne}
                                        arg={handleButtonOne}
                                    />
                                    <DropDown
                                        question="Pourquoi nous faire confiance ? "
                                        text="Nous sommes spécialiste en économie d'énergie de l'habitat depuis plus de 10 ans, TeraBois est avant tout une entreprise familiale et artisanale.
                                        Notre savoir faire nous a permis de nous piositionner comme l'entreprise leader dans son domaine.
                                        Nous proposons un service sur-mesure et clé en main .
                                        "
                                        callback={setUpButtonTwo}
                                        return={upButtonTwo}
                                        arg={handleButtonTwo}
                                    />
                                    <DropDown
                                        question="Quelles sont les aides de l’état ?"
                                        text="Grace au CEE et MaprimeRenov, Eco-PTZ bénéficiez d'aide encadré par l'état pouvant aller Jusqu’à 50000€. *Étant une entreprise certifiée RGE, l’ensemble des aides existantes peuvent vous être proposées."
                                        callback={setUpButtonThree}
                                        return={upButtonThree}
                                        arg={handleButtonThree}
                                    />
                                    <DropDown
                                        question="Quelles solutions de financement ?"
                                        text="Nous pouvons vous proposer plusieurs solutions avec nos différents partenaires, après étude de votre dossier."
                                        callback={setUpButtonFour}
                                        return={upButtonFour}
                                        arg={handleButtonFour}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="rightContainer">
                        <div className="container">
                            <Formulaire />
                            <div className={state.valueOfArray === 6 ? "containerBottom lastContainerBottom": "containerBottom" } >
                                <h3>+ de <span>10</span> ans <br /> d'experience</h3>
                                <h3>RDV en <br /><span>24</span>/<span>48h</span></h3>
                                <h3>+ de <span>3000 </span><br />réalisations</h3>
                            </div>
                        </div>
                    </section>
                    <section className="endContainer">
                        <div className="container">
                            <div className="textContainer">
                                <div className="question">
                                    <DropDown
                                        question="Pourquoi bien isoler son logement ?"
                                        text="Facture réduite,
                                        Gain en confort,
                                        Maison plus saine,
                                        Participation à l'éffort écologique,
                                        Valorisation du logement, toutes ces raisons rende indispensable une bonne isolation de votre logement.
                                        "
                                        callback={setUpButtonOne}
                                        return={upButtonOne}
                                        arg={handleButtonOne}
                                    />
                                    <DropDown
                                        question="Pourquoi nous faire confiance ? "
                                        text="Nous sommes spécialiste en économie d'énergie de l'habitat depuis plus de 10 ans, TeraBois est avant tout une entreprise familiale et artisanale.
                                        Notre savoir faire nous a permis de nous piositionner comme l'entreprise leader dans son domaine.
                                        Nous proposons un service sur-mesure et clé en main .
                                        "
                                        callback={setUpButtonTwo}
                                        return={upButtonTwo}
                                        arg={handleButtonTwo}
                                    />
                                    <DropDown
                                        question="Quelles sont les aides de l’état ?"
                                        text="Grace au CEE et MaprimeRenov, Eco-PTZ bénéficiez d'aide encadré par l'état pouvant aller Jusqu’à 50000€. *Étant une entreprise certifiée RGE, l’ensemble des aides existantes peuvent vous être proposées."
                                        callback={setUpButtonThree}
                                        return={upButtonThree}
                                        arg={handleButtonThree}
                                    />
                                    <DropDown
                                        question="Quelles solutions de financement ?"
                                        text="Nous pouvons vous proposer plusieurs solutions avec nos différents partenaires, après étude de votre dossier."
                                        callback={setUpButtonFour}
                                        return={upButtonFour}
                                        arg={handleButtonFour}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default LandingPage;