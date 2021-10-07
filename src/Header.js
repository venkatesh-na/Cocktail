import React from "react"
import {Link} from "react-router-dom"
const Header = ()=>{
    return (
        <header>
            <h1>The<span style = {{color:"green"}}>Cocktail</span>DB</h1>
            <ul>
                <li>
                <Link to = "/">
                    Home
                </Link>
                </li>
                <li>
                <Link to = "/about">
                    About
                </Link>
                </li>
            </ul>
        </header>
    );
}
export default Header;
