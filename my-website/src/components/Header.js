//Import necessary modules and assets
import React from "react";
import "../styling/Header.css";
import linkedinlogo from "../assets/logos/LinkedIn_logo.png";
import Githublogo from "../assets/logos/Github_logo.png";

function Header() {
    return (
        <>
        <header className="header">
            <div className="header_container">
                <div className="left_side">
                    <h1>&lt;Jonathan Castro&gt;</h1>
                    <a href="https://www.linkedin.com/in/jonathancastro16/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={linkedinlogo}
                            alt="LinkedIn"
                        />
                    </a>
                    <a href="https://github.com/JonnyPrograms/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={Githublogo}
                            alt="Github"
                        />
                    </a>
                </div>
                <nav className="right_side">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#certifications">Certifications</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div className="horizontal_line"></div>
        </>
    );
}

export default Header;