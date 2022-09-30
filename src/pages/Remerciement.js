import React, { useEffect } from 'react';
import HomeNavigation from '../component/HomeNavigation';
import "../style/pages/_remerciement.scss";

const Remerciement = () => {
    return (
        <>
            <header className='homePageHeader'>
                <HomeNavigation visibility={false} gsap={false} />
            </header>
            <main className='remerciement'>
                <div className="container">
                    <h1>Merci !</h1>
                    <p>
                        Nous vous recontacterons dans les 24/48h.
                    </p>
                </div>
            </main>
        </>
    );
};

export default Remerciement;