import { Outlet, Link } from "react-router-dom"

function Root() {
    return (
        <div>
            <div id="header">
                <h1>Margot Goralczyk</h1> 
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <div><Outlet /></div>
        </div>
            )
}

export default Root