//Import necessary modules and assets
import React, { useState, useEffect } from "react";
import "../styling/About.css";
import ProfilePic from "../assets/logos/Linkedin_ProfilePic.jpeg";

function About() {

    //Array of words for software traits
    const wordsForSoftware = ["creative", "efficient", "innovative", "useful", "impactful", "dynamic"];

    //Array of words for interests
    const wordsForInterests = ["software development", "data science", "software engineering", "machine learning", "mainframe programming"];

    //States to track the current words being displayed
    const [currentSoftwareWord, setCurrentSoftwareWord] = useState(0);
    const [currentInterestsWord, setCurrentInterestsWord] = useState(0);

    useEffect(() => {

        //Automatically cycle through the software words every 8 seconds
        const softwareInterval = setInterval(() => {
            setCurrentSoftwareWord((prev) => (prev + 1) % wordsForSoftware.length);
        }, 8000);

        //Automatically cycle through the interest words every 8 seconds
        const interestInterval = setInterval(() => {
            setCurrentInterestsWord((prev) => (prev + 1) % wordsForInterests.length);
        }, 8000);

        //Function to stop the interval from cycling when it's no longer needed
        return () => {
            clearInterval(softwareInterval)
            clearInterval(interestInterval)
        };
    },[]); //Ensure the effect only runs once

    return (
        <section className="about_section">
            <div className="about_container">
                <div className="about_text">
                    <h1>Hey, I'm Jonathan!</h1>
                    <p>
                        I love building{" "} <span className="changing_word">{wordsForSoftware[currentSoftwareWord]}</span>{" "} <span className="changing_word">software</span> <br />
                        and <br />
                        intrested in{" "}<span className="changing_word">{wordsForInterests[currentInterestsWord]}</span>
                    </p>
                </div>
                <div className="about_profile">
                    <img
                        src={ProfilePic}
                        alt="Profile_Picture"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;