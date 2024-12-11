import React, { useEffect, useState } from "react";
import "../styling/Projects.css";

function Projects() {
    const [animateTitle, setAnimateTitle] = useState(false);

    useEffect(() => {
        setAnimateTitle(true);
    }, []);

    return (
        <section className="projects_section">
            <div className="projects_container">
            <h2 className={`projects_title ${animateTitle ? "animate" : ""}`}>Projects</h2>
                <div className="projects_list">
                    <div className="project_1"
                        onClick={() => window.open("https://github.com/JonnyPrograms/portfolio", "_blank")}>
                            <h3>Portfolio Website</h3>
                            <p>My personal Portfolio website</p>
                    </div>
                    <div className="project_2"
                        onClick={() => window.open("Quotesystemlink", "_blank")}>
                            <h3>Quoting System</h3>
                            <p>Administration quoting system</p>
                    </div>
                    <div className="project_3"
                        onClick={() => window.open("NBAProjectLink", "_blank")}>
                            <h3>NBA Data Project</h3>
                            <p>NBA project that holds a lot of data</p>
                    </div>                  
                </div>
            </div>
        </section>
    );
}

export default Projects;