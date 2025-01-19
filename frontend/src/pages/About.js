import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>AI Academic Advisor</h1>
                <p className="subheading">University of Illinois Urbana-Champaign</p>
            </header>
            <div className="choices-container">
                <Link to="/build-schedule" className="choice-box">
                    <h2>Build Your Schedule</h2>
                    <p>Create your ideal semester schedule tailored to your preferences.</p>
                </Link>
                <Link to="/pick-major" className="choice-box">
                    <h2>Pick a Major</h2>
                    <p>Get recommendations for a major based on your interests and goals.</p>
                </Link>
                <Link to="/change-major" className="choice-box">
                    <h2>Change Your Major</h2>
                    <p>Explore new majors and update your academic focus.</p>
                </Link>
            </div>
        </div>
    );
}

export default About;
