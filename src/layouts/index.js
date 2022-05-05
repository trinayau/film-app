import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return <>
            <header>
                <h1>Khari - App</h1>
                <nav></nav>
            </header>
            <Outlet />
            <footer>Footer stuff</footer>
           </>
}

export default Layout;