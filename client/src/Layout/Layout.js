import React from 'react';
import {Outlet} from "react-router-dom";

import './LayoutStyle.css';


const Layout = () => {

    return (
        <div className={'Layout'}>
            Layout
            <Outlet/>
        </div>
    );
};

export default Layout;