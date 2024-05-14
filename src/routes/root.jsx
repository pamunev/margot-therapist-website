import { Outlet, NavLink } from "react-router-dom"

function Root() {
    return (
        <div>
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
        </div>
            )
}

export default Root