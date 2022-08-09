import React from 'react';

import './LusyStyle.css';

const Lusy = ({horseLusy}) => {
    const {name, distance} = horseLusy;


    return (
        <div className={'Lusy'}>
            <div>{name}</div>
            <div>{distance}</div>
        </div>
    );
};

export default Lusy;