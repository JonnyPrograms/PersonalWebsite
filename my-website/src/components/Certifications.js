//Import necessary modules and assets
import React from "react";
import "../styling/Certifications.css";
import AdvancedBadge from "../assets/certs/AdvancedCert.png";
import ASDegree from "../assets/certs/ASDegree.png";
import ConceptsBadge from "../assets/certs/ConceptsCert.png";

//Array of certifications with details
const certifications = [
    {
        title: "Assosiates Degree in Science", //Name of the certification
        date: "July 2023", //Date that the certification was obtained
        image: ASDegree, //Image of the certification
        link: "https://www.parchment.com/u/award/edd5d6fed71e6cc1e70f2a04b2975573", //Link to view the certification
    },
    {
        title: "IBM Z Xplore Concepts Badge",
        date: "September 2024",
        image: ConceptsBadge,
        link: "https://www.credly.com/badges/d8f19992-5316-41e4-93a6-b70ab46f7826",
    },
    {
        title: "IBM Z Xplore Advanced Badge",
        date: "December 2024",
        image: AdvancedBadge,
        link: "https://www.credly.com/earner/earned/badge/f0e90aee-b1aa-4f33-acea-0fe27e5dcd75",
    }
];

function Certifications() {
    return(
        <section id="certifications" className="certifications_section">
            <h2 className="certifications_title">Certifications</h2>
            <div className="timeline">
                {certifications.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline_item"
                    >
                        <div className="timeline_content">
                            <img
                                src={cert.image}
                                alt={`${cert.title} logo`}
                                className="certification_image"
                            />
                            <h3 className="certification_name">{cert.title}</h3>
                            <p className="certification_date">{cert.date}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Certifications;