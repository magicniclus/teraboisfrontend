import React, { useEffect } from 'react';
import Stars from './Stars';

const Cards = (props) => {
    const name=props.name;
    const commentaire = props.commentaire;
    const stars = props.stars

    return (
        <>
            <h3 className='name'>{name}</h3>
            <p>{commentaire}</p>
            <div className='starsContainer'>
                <Stars stars={stars} />
            </div>
        </>
    );
};

export default Cards;