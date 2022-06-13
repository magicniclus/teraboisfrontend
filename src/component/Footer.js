import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

/**
 * It returns a footer with a div with a class of footerContainer, which contains a div with a class of
 * footerContainerLeft, which contains a NavLink to the conditions générales de vente, a NavLink to the
 * politiques de confidentialité, and a NavLink to the espace client, which contains an img and a p
 * @returns A footer with a div with a class of footerContainer. Inside the footerContainer div, there
 * is a div with a class of footerContainerLeft. Inside the footerContainerLeft div, there are three
 * NavLinks. The first NavLink has a to attribute of "/". The second NavLink has a to attribute of "/".
 * The third NavLink has a to attribute of "/
 */
const Footer = () => {
    const tel = "0649231380";

    const showPhone = ()=>{
        return(
            <div className='phoneContainer'>
                <a title="Appeler" href={"tel:"+tel}>
                    <FontAwesomeIcon icon={faPhone} color="lime"/>
                    <span>{tel}</span>
                </a>
            </div>
        )
    }

    /* Returning a footer with a div with a class of footerContainer, which contains a div with a class
    of
     * footerContainerLeft, which contains a NavLink to the conditions générales de vente, a NavLink
    to the
     * politiques de confidentialité, and a NavLink to the espace client, which contains an img and
    a p */
    return (
        <footer>
            <div className="footerContainer">
                <div className='footerContainerLeft'>
                    <NavLink to="/">Conditions générales de vente</NavLink>
                    <NavLink to="/politique-de-confidentialite">Politiques de confidentialité</NavLink>
                    <NavLink to="/" className="signIn">
                        <div className="imgContainer">
                            <img src="./img/SVG/login.svg" alt="connection" />   
                        </div>
                        <p>espace client</p>
                    </NavLink>
                </div>
                <div className='footerContainerRight'>
                    <NavLink to="/"><img src="./img/logo.png" alt="logo" /></NavLink>
                {
                    tel !== undefined ? showPhone() : null
                }
                </div>
            </div>
        </footer>
    );
};

export default Footer;