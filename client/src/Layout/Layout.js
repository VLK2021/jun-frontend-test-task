import React, {useEffect, useState} from 'react';

import {io} from "socket.io-client";
import './LayoutStyle.css';


const Layout = () => {

    const [horsePD, setHorsePD] = useState(null);
    const [horseCricket, setHorseCricket] = useState(null);
    const [horseRebel, setHorseRebel] = useState(null);
    const [horseLusy, setHorseLusy] = useState(null);
    const [horseLacey, setHorseLacey] = useState(null);
    const [horseGinger, setHorseGinger] = useState(null);


    useEffect(() => {
        const socket = io('http://localhost:3002/');
        socket.on('connect', () => console.log(socket.connected));
        socket.emit('start')
        socket.on('ticker', function (round) {
            setHorsePD(round[0].distance);
            setHorseCricket(round[1].distance);
            setHorseRebel(round[2].distance);
            setHorseLusy(round[3].distance);
            setHorseLacey(round[4].distance);
            setHorseGinger(round[5].distance);
        });
    }, []);



    return (
        <div className={'Layout'}>
            {<div className={'vid'}>Princess Diana: {horsePD}</div>}
            {<div className={'vid'}>Cricket: {horseCricket}</div>}
            {<div className={'vid'}>Rebel: {horseRebel}</div>}
            {<div className={'vid'}>Lusy: {horseLusy}</div>}
            {<div className={'vid'}>Lacey: {horseLacey}</div>}
            {<div className={'vid'}>Ginger: {horseGinger}</div>}
        </div>
    );
};

export default Layout;