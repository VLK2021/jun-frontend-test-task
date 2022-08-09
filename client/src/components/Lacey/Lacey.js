import React from 'react';

import './LaceyStyle.css';


const Lacey = ({horseLacey}) => {
    const {name, distance} = horseLacey;

    return (
        <div className={'Lacey'}>
            <div>{name}</div>
            <div>{distance}</div>
        </div>
    );
};

export default Lacey;