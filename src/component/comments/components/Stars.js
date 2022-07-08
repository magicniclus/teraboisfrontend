import React, { useEffect, useState } from 'react';

const Stars = (props) => {
    const stars = props.stars;
    const starInit = [1, 2, 3, 4, 5];

    const starCheck=(star) =>{
        let index = starInit.indexOf(star);
        if (index + 1 <= stars) return <i key={star} className="fas fa-star check"></i>
        else return <i key={star} className="fas fa-star uncheck"></i>
    }

    return (
        <>
            {
                starInit.map((star) => { return starCheck(star) })
            }
        </>
    );
};

export default Stars;