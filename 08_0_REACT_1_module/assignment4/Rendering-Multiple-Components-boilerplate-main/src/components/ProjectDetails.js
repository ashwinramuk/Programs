import React, {Component, useState} from "react";
const ProjectDetails = (props) => {
    return (
        <div id="project-details">
            <h1 data-ns-test = "project-name">{props.childData.projectName}</h1>
            <p data-ns-test = "project-description">{props.childData.projectDescription}</p>
        </div>
    )
}
export default ProjectDetails;