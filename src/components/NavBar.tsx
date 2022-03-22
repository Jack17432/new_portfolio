import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <ul className={'container'}>
            <Link to={'/'}>Home</Link>
            <Link to={'projects'}>Projects</Link>
        </ul>
    );
}