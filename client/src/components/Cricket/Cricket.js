import React from 'react';

import './CricketStyle.css';


const Cricket = ({horseCricket}) => {
    const {name, distance} = horseCricket;

    return (
        <div className={'Cricket'}>
            <div>{name}</div>
            <div>{distance}</div>
        </div>
    );
};

export default Cricket;