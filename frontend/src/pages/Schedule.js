import React from 'react';
import Layout from '../components/Layout';

function Schedule() {
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
                    <h2>Build Your Schedule</h2>
                    <form>
                        <label htmlFor="days">What days are you available?</label>
                        <input
                            type="text"
                            id="days"
                            className="input-field"
                            placeholder="E.g., Monday, Wednesday"
                        />

                        <label htmlFor="times">What times are best for you?</label>
                        <input
                            type="text"
                            id="times"
                            className="input-field"
                            placeholder="E.g., Morning, Afternoon"
                        />

                        <label htmlFor="classes">Any specific classes or subjects?</label>
                        <input
                            type="text"
                            id="classes"
                            className="input-field"
                            placeholder="E.g., Math, Biology"
                        />

                        <label htmlFor="online">Are you open to online classes?</label>
                        <input
                            type="text"
                            id="online"
                            className="input-field"
                            placeholder="E.g., Yes or No"
                        />

                        <label htmlFor="goals">What are your academic goals?</label>
                        <input
                            type="text"
                            id="goals"
                            className="input-field"
                            placeholder="E.g., Graduate early, Explore majors"
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

export default Schedule;
