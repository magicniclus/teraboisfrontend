import React from 'react';
import "./_modaleRGPD.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

const ModaleRGPD = () => {
    return (
        <div className='modaleRGPD'>
            <div className='modale'>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
        </div>
    );
};

export default ModaleRGPD;