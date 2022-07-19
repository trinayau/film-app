import React from "react";
import { Outlet, NavLink} from "react-router-dom";

const Layout = () => {
    return<>
    <header>
    <h1> 🍿 Movie Search App</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/search">Search</NavLink>
        </nav>
    </header>
        <Outlet/>
        <footer style={{textAlign: 'center'}}>Open-source with ❤️ by <a href="https://github.com/trinayau/film-app" target="_blank">Trina</a></footer>
    </>
}

export default Layout
