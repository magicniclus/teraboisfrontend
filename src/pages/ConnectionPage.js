import React from 'react';
import { useSelector } from 'react-redux';
import AdminConnectionFormulaire from '../component/AdminConnectionFormulaire';
import HomeNavigation from '../component/HomeNavigation';
import {useEffect} from 'react';

const ConnectionPage = () => {
    const state = useSelector(state => state)

    useEffect(()=>{
        document.title="TeraBois | Connexion"
    })

    const loader = ()=>{
        return(
            <div className="loader">
                <h2>Loader</h2>
            </div>
        )
    }

    return (
        <>
            {state.isLogin ? loader() : null}
            <header className="homePageHeader">
                <HomeNavigation urlValue='connection' />
            </header>
            <main className="connectionPage" >
                <AdminConnectionFormulaire />
            </main>
        </>
    );
};

export default ConnectionPage;