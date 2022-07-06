import React, { useEffect } from 'react';
import Stars from './Stars';
import "./_cards.scss"

const Cards = (props) => {
    const name=props.name;
    const commentaire = props.commentaire;
    const stars = props.stars

    return (
        <>
            <div className="leftContainer">
                <div className="imgContainer"></div>
            </div>
            <div className="rightContainer">
                <h3 className='name'>{name}</h3>
                <p>{commentaire}</p>
                <div className='starsContainer'>
                    <Stars stars={stars} />
                </div>
            </div>
        </>
    );
};

export default Cards;