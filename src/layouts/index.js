import React from "react";
import { Outlet, NavLink} from "react-router-dom";

const Layout = () => {
    return<>
    <header>
    <h1>Khari - App</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/search">Search</NavLink>
        </nav>
    </header>
        <Outlet/>
        <footer>Made with ❤️ by Geberu</footer>
    </>
}

export default Layout
