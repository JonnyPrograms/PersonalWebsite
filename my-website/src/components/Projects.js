import React from "react";
import "../styling/Projects.css";

function Projects() {
    return (
        <section className="projects_section">
            <div className="projects_container">
                <h2 className="projects_title">Projects</h2>
                <div className="projects_list">
                    <div
                        className="project_1"
                        onClick={() => window.open("https://github.com/JonnyPrograms/portfolio", "_blank")}
                    >
                        <h3>Portfolio Website</h3>
                        <p>My personal portfolio project.</p>
                    </div>
                    <div
                        className="project_2"
                        onClick={() => window.open("https://github.com/JonnyPrograms/quoting-system", "_blank")}
                    >
                        <h3>Quoting System</h3>
                        <p>A system for generating and managing quotes.</p>
                    </div>
                    <div
                        className="project_3"
                        onClick={() => window.open("https://github.com/JonnyPrograms/nba-data", "_blank")}
                    >
                        <h3>NBA Data Project</h3>
                        <p>In progress: analyzing NBA statistics.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;