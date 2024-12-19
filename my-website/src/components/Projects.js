import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../styling/Projects.css";
import PortfolioPicture from "../assets/websites/PortfolioWebPic.png";
import QuoteSystemPicture from "../assets/websites/QuotingSystemPic.png";

function Projects() {
    const [animateTitle, setAnimateTitle] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        setAnimateTitle(true);
    }, []);

    const openModal = (imageSrc) => {
        setModalImage(imageSrc)
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <section id= "projects" className="projects_section">
            <div className="projects_container">
            <h2 className={`projects_title ${animateTitle ? "animate" : ""}`}>Projects</h2>
                <div className="projects_list">
                    <div className="project_1"
                        onClick={() => window.open("https://github.com/JonnyPrograms/PersonalWebsite", "_blank")}>
                            <h3>Portfolio Website</h3>
                            <p>My personal portfolio website (this one 😆) built with
                                HTML, React, and CSS to showcase projects, skills,
                                achievements, and updates about myself. </p>
                            <img
                                src={PortfolioPicture}
                                alt="Portfolio Website Screenshot"
                                className="project_image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(PortfolioPicture);
                                }}
                            />
                            <div className="project1_source">
                            <p>
                            Click to view source code on Github{" "}
                            <FaExternalLinkAlt />
                            </p>
                            </div>
                    </div>
                    <div className="project_2"
                        onClick={() => window.open("https://github.com/JonnyPrograms/Quoting-System", "_blank")}>
                            <h3>Quoting System</h3>
                            <p>Full stack quoting system built with HTML, CSS, KendoUI,
                                C#, and .NET. Has many features such as managing/creating
                                assosiates, managing/creating/finalizing quotes, and viewing/inserting
                                additional information to quotes and administrators.
                            </p>
                            <img
                                src={QuoteSystemPicture}
                                alt="Quoting System Website Screenshot"
                                className="project_image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(QuoteSystemPicture)
                                }}
                            />
                            <div className="project2_source">
                            <p>
                            Click to view source code on Github{" "}
                            <FaExternalLinkAlt />
                            </p>
                            </div>
                    </div>
                    <div className="project_3"
                        onClick={() => window.open("NBAProjectLink", "_blank")}>
                            <h3>NBA Data Project</h3>
                            <p>NBA project that holds a lot of data</p>
                    </div>                  
                </div>
            </div>
            {modalImage && (
                <div className="image_modal" onClick={closeModal}>
                    <img src={modalImage} alt="Fullscreen" className="modal_image" />
                </div>
            )}
        </section>
    );
}

export default Projects;