//Import necessary modules and assets
import React from "react";
import "../styling/Skills.css";
import CppImage from "../assets/skills/C++.jpg";
import CSharpImage from "../assets/skills/Csharp.png";
import CssImage from "../assets/skills/CSS.jpg";
import HtmlImage from "../assets/skills/HTML.jpg";
import JavaImage from "../assets/skills/java.png";
import ReactImage from "../assets/skills/react.png";
import PythonImage from "../assets/skills/python.jpg";
import SwiftImage from "../assets/skills/swift.jpg";

//Array of skill images
const skills = [
    { name: "C++", image: CppImage },
    { name: "C#", image: CSharpImage },
    { name: "CSS", image: CssImage },
    { name: "HTML", image: HtmlImage },
    { name: "Java", image: JavaImage },
    { name: "React", image: ReactImage },
    { name: "Python", image: PythonImage },
    { name: "Swift", image: SwiftImage },
];

function Skills() {
    return (
        <section id="skills" className="skills_section">
            <h2 className="skills_title">Technical Skills</h2>
            <div className="skills_grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill_card">
                        <img src={skill.image} alt={`${skill.name} logo`} className="skill_image" />
                        <div className="skill_name">{skill.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;