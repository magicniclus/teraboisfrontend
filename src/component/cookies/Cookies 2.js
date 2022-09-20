import React from 'react';
import "./_cookies.scss"
import { useState } from 'react';
import Redirect from 'react-router-dom'

const Cookies = () => {

    console.log(localStorage);

    const [isOk, setIsOk] = useState(false);

    const handleOk = ()=>{
        setIsOk(true)
        localStorage.setItem("cookies", "true");
    }

    const ifIsNotOk = ()=>{
        setIsOk(false);
        window.location.assign('http://google.com');
        localStorage.setItem("cookies", "false");
    }

    return (
        <div className={isOk? 'cookiesBar isOk': 'cookiesBar'}>
            <h2>Nous utilison des cookies pour améliorer l'expérience utilisateur.</h2>
            <div className="btnContainer">
                <button onClick={handleOk}  className="validation">J'accepte</button>
                <button onClick={ifIsNotOk} className="refusal">Je refuse</button>
            </div>
        </div>
    );
};

export default Cookies;