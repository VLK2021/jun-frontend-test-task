import React from 'react';

import './GingerStyle.css';


const Ginger = ({horseGinger}) => {
    const {name, distance} = horseGinger;

    return (
        <div className={'Ginger'}>
            <div>{name}</div>
            <div>{distance}</div>
        </div>
    );
};

export default Ginger;