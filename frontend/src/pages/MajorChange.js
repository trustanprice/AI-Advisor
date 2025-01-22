import React from 'react';
import Layout from '../components/Layout';

function MajorChange() {
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
                    <h2>Change Major</h2>
                    <form>
                        <label htmlFor="current-major">What is your current major?</label>
                        <input
                            type="text"
                            id="current-major"
                            className="input-field"
                            placeholder="E.g., Computer Science, Biology"
                        />

                        <label htmlFor="reason">Why do you want to change your major?</label>
                        <input
                            type="text"
                            id="reason"
                            className="input-field"
                            placeholder="E.g., Lack of interest, New passion"
                        />

                        <label htmlFor="new-major">What major are you considering switching to?</label>
                        <input
                            type="text"
                            id="new-major"
                            className="input-field"
                            placeholder="E.g., Data Science, Marketing"
                        />

                        <label htmlFor="support">Have you discussed this with an advisor or mentor?</label>
                        <input
                            type="text"
                            id="support"
                            className="input-field"
                            placeholder="E.g., Yes or No"
                        />

                        <label htmlFor="concerns">Do you have any concerns about switching majors?</label>
                        <input
                            type="text"
                            id="concerns"
                            className="input-field"
                            placeholder="E.g., Time to graduate, Cost"
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

export default MajorChange;

