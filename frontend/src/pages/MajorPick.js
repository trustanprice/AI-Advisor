import React from 'react';
import Layout from '../components/Layout';

function MajorPick() {
    return (
        <div className="layout-container">
            <header className="layout-header">
                <h1>AI Academic Advisor</h1>
                <nav className="layout-nav">
                    <a href="/">Home</a>
                    <a href="/build-schedule">Build Schedule</a>
                    <a href="/pick-major">Pick Major</a>
                    <a href="/change-major">Change Major</a>
                </nav>
            </header>

            <main className="layout-main">
                <div className="form-container">
                    <h2>Pick a Major</h2>
                    <form>
                        <label htmlFor="interests">What are your main academic interests?</label>
                        <input
                            type="text"
                            id="interests"
                            className="input-field"
                            placeholder="E.g., Science, Arts, Technology"
                        />

                        <label htmlFor="skills">What skills do you excel in?</label>
                        <input
                            type="text"
                            id="skills"
                            className="input-field"
                            placeholder="E.g., Problem-solving, Communication"
                        />

                        <label htmlFor="career">What career goals do you have in mind?</label>
                        <input
                            type="text"
                            id="career"
                            className="input-field"
                            placeholder="E.g., Engineer, Teacher, Data Scientist"
                        />

                        <label htmlFor="hobbies">What are your hobbies or extracurricular activities?</label>
                        <input
                            type="text"
                            id="hobbies"
                            className="input-field"
                            placeholder="E.g., Writing, Sports, Coding"
                        />

                        <label htmlFor="preferences">Do you prefer practical or theoretical courses?</label>
                        <input
                            type="text"
                            id="preferences"
                            className="input-field"
                            placeholder="E.g., Practical, Theoretical"
                        />

                        <button type="submit" className="button">
                            Submit
                        </button>
                    </form>
                </div>
            </main>

            <footer className="layout-footer">
                © 2025 University of Illinois Urbana-Champaign
            </footer>
        </div>
    );
}

export default MajorPick;

