import React from "react";
import {Link} from "react-router-dom";
import {getProjectData} from "./projects/data";

export const Projects = () => {
    let projects = getProjectData();

    return(
        <div>
            <span>Projects</span>
            <br />
            <span>Link to projects</span>
            <br />
            {projects.map((project) => (
                <div>
                    <Link to={'/projects/' + project.link}>{project.name}</Link>
                    <br />
                </div>
            ))}


            <Link to={'/'}>Home</Link>
        </div>
    )
}