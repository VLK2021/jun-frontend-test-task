import React, {useEffect, useState} from 'react';
import {io} from "socket.io-client";

import './HorsesStyle.css';
import PrincessDiana from "../../components/PrincessDiana/PrincessDiana";
import Cricket from "../../components/Cricket/Cricket";
import Rebel from "../../components/Rebel/Rebel";
import Lusy from "../../components/Lusy/Lusy";
import Lacey from "../../components/Lacey/Lacey";
import Ginger from "../../components/Ginger/Ginger";


const Horses = () => {
    const [horsePD, setHorsePD] = useState({});
    const [horseCricket, setHorseCricket] = useState({});
    const [horseRebel, setHorseRebel] = useState({});
    const [horseLusy, setHorseLusy] = useState({});
    const [horseLacey, setHorseLacey] = useState({});
    const [horseGinger, setHorseGinger] = useState({});


    useEffect(() => {
        const socket = io('http://localhost:3002/');
        socket.on('connect', () => console.log(socket.connected));
        socket.emit('start')
        socket.on('ticker', function (round) {
            setHorsePD(round[0]);
            setHorseCricket(round[1]);
            setHorseRebel(round[2]);
            setHorseLusy(round[3]);
            setHorseLacey(round[4]);
            setHorseGinger(round[5]);
        });
    }, []);


    return (
        <div className={'Horses'}>
            <PrincessDiana horsePD={horsePD}/>
            <Cricket horseCricket={horseCricket}/>
            <Rebel horseRebel={horseRebel}/>
            <Lusy horseLusy={horseLusy}/>
            <Lacey horseLacey={horseLacey}/>
            <Ginger horseGinger={horseGinger}/>
        </div>
    );
};

export default Horses;