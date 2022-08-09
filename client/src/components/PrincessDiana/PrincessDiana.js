import React from 'react';

import './PrincessDianaStyle.css';


const PrincessDiana = ({horsePD}) => {
    const {name, distance} = horsePD;


    return (
        <div className={'PrincessDiana'}>
            <div>{name}</div>
            <div>{distance}</div>
        </div>
    );
};

export default PrincessDiana;


