import React from "react";
import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            ToolBar, <Link to={'/'}>Home</Link>
            <br />
            <Outlet/>
        </div>
    );
}