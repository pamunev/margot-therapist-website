import { Outlet, NavLink } from "react-router-dom"
import Footer from "./footer"

function Root() {
    return (
        <div id="root-component">
            <div id="header">
                <h1>
                    <NavLink to="/">Margot Goralczyk</NavLink>
                </h1> 
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-me">About me</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
            <div id="content"><Outlet /></div>
            <div><Footer /></div>
        </div>
            )
}

export default Root