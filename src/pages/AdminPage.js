import React from 'react';
import { useState, useEffect, createRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {gsap} from 'gsap';
import { showAllProspect } from '../redux/actions/action';

const AdminPage = () => {
    const state = useSelector(state => state )
    const dispatch = useDispatch()
    const title = createRef()

    const navigate = useNavigate()

    
    useEffect(()=>{
        if(!state.isLogin){
            navigate("/*")
        }else{
            dispatch(showAllProspect())
        }
        gsap.from(title.current, {
            opacity: 0,
            x: 120,
            duration: 1,
            ease: 'power4.inOut',
        })
    },[])

    return (
        <div style={{minHeight:"100vh"}}>
            <NavLink to="/" >
                <h1 ref={title}>Hi Nicolas !</h1>
            </NavLink>
        </div>
    );
};

export default AdminPage;