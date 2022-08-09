import React from 'react';


import './LayoutStyle.css';
import {Outlet} from "react-router-dom";


const Layout = () => {

    return (
        <div className={'Layout'}>
            <Outlet/>
        </div>
    );
};

export default Layout;