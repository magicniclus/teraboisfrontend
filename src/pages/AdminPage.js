import React from 'react';
import { useState, useEffect, createRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {gsap} from 'gsap';
import { showAllProspect } from '../redux/actions/action';
import ProspectArray from '../component/prospectArray/ProspectArray'
import AddPropsectInAdminPage from '../component/AddPropsectInAdminPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import AdminPageNavigation from '../component/AdminPageNavigation';
import "../style/pages/_adminPage.scss"

/**
 * It's a function that returns a div that contains a NavLink to the home page, a h1 that contains a
 * greeting to the admin and a ProspectArray component
 */
const AdminPage = () => {
    /* It's a hook that allows us to access the state of the store. */
    const state = useSelector(state => state )
    
    /* It's a hook that allows us to dispatch an action to the store. */
    const dispatch = useDispatch()
    
    /* It's a hook that allows us to create a reference to a DOM element. */
    const title = createRef()
    
    /* It's a hook that allows us to navigate to a specific page. */
    const navigate = useNavigate()
    
    /* It's a hook that allows us to create a state variable. */
    const [refreshPage, setRefreshPage] = useState(false)
    
    /* It's a hook that allows us to create a state variable. */
    const [showAddProspectInAdminPage, setShowAddProspectInAdminPage] = useState(false)

    /* It's a hook that allows us to perform side effects in a functional component. */
    useEffect(()=>{ 
        document.title = `TeraBois | Tableau de bord`;
        whatDoIDo()
        gsap.from(title.current, {
            opacity: 0,
            x: 120,
            duration: 1,
            ease: 'power4.inOut',
        })
    },[])

    /**
     * If the user is not logged in, he is redirected to the home page, otherwise, the function
     * showAllProspect is called
     */
    const whatDoIDo = () => {
        if(!state.isLogin){
            navigate("/accueil")
        }else{
            dispatch(showAllProspect())
        }
    }

    /**
     * It sets the state of the showAddProspectInAdminPage to true
     */
    const showAddProspectModal = ()=>{
        setShowAddProspectInAdminPage(true);
    }

    /* It's a function that returns a div that contains a NavLink to the home page, a h1 that contains
    a
    greeting to the admin and a ProspectArray component */
    return (
        <>
            <div className={!state.isLogin? "showLoaderTwo" : "hiddenLoaderTwo"}>
                <img src="./img/spinner.gif" alt="spinner" />
            </div>
            <header className='aminPageHeader'>
                <AdminPageNavigation />
            </header>
            <main className="adminPage">
                {showAddProspectInAdminPage ? <AddPropsectInAdminPage callBack={setShowAddProspectInAdminPage} returnValue={setRefreshPage}/>:null}
                <div className='topContainer'>
                    <div className='addPropsectImg'>
                        <h2 onClick={()=>showAddProspectModal()}>Ajouter un contact</h2>
                        <FontAwesomeIcon icon={faPlus} onClick={()=>showAddProspectModal()}/> 
                    </div>
                </div>
                <ProspectArray refreshPage={refreshPage} setRefreshPage={setRefreshPage} />
            </main>
        </>
    );
};

export default AdminPage;