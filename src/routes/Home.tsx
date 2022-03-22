import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <span>Home</span>
            <br />
            <Link to={'/projects'}>Link to projects</Link>
        </div>
    );
}