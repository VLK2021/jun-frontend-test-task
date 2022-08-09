import React from 'react';

import './RebelStyly.css';


const Rebel = ({horseRebel}) => {
    const {name, distance} = horseRebel;

    return (
        <div className={'Rebel'}>
            <div>{name}</div>
            <div>{distance}</div>
        </div>
    );
};

export default Rebel;