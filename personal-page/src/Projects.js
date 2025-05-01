import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div class="projects">
            <div class="banner">
                <img src="header.jpg" alt="Code"/>
                <div class="banner_text">
                    <p style={{"top": "10%", "left":"10%", "color":"black"}}> Computer Science </p>
                    <p style={{"top": "10%", "left":"55%",}}> Software Engineering </p>
                    <p style={{"top": "40%", "left":"10%", "color":"#1BAD98"}}> Artificial Intelligence </p>
                    <p style={{"top": "40%", "left":"55%", "color":"#BE9C5F"}}> and Robotics </p>
                </div>
            </div>
            <div class="project_list">
            </div>
        </div>
    );
}

export default Projects;