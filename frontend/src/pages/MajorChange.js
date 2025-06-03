import React, { useState } from 'react';
import Layout from '../components/Layout';

function MajorChange() {
    const [formData, setFormData] = useState({
        currentMajor: '',
        reason: '',
        newMajor: '',
        support: '',
        concerns: '',
    });

    const [recommendedChanges, setRecommendedChanges] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/api/change_major", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setRecommendedChanges(data.majors || data.suggested_majors || []);
        } catch (err) {
            console.error("Error fetching major change recommendations:", err);
        }
    };

    return (
        <Layout>
            <main className="layout-main">
                <div className="form-container">
                    <h2>Receive recommendations on a major change by answering these questions!</h2>
                    <form onSubmit={handleSubmit}>
                        {[
                            { id: "currentMajor", label: "What is your current major?", placeholder: "E.g., Computer Science, Biology" },
                            { id: "reason", label: "Why do you want to change your major?", placeholder: "E.g., Lack of interest, New passion" },
                            { id: "newMajor", label: "What major are you considering switching to?", placeholder: "E.g., Data Science, Marketing" },
                            { id: "support", label: "Have you discussed this with an advisor or mentor?", placeholder: "E.g., Yes or No" },
                            { id: "concerns", label: "Do you have any concerns about switching majors?", placeholder: "E.g., Time to graduate, Cost" }
                        ].map(({ id, label, placeholder }) => (
                            <div key={id}>
                                <label htmlFor={id}>{label}</label>
                                <input
                                    type="text"
                                    id={id}
                                    className="input-field"
                                    value={formData[id]}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                />
                            </div>
                        ))}

                        <button type="submit" className="button">Submit</button>
                    </form>

                    {recommendedChanges.length > 0 && (
                        <div className="results">
                            <h3>Recommended Major Alternatives:</h3>
                            <ul>
                                {recommendedChanges.map((major, index) => (
                                    <li key={index}>{major}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </main>
            <footer className="layout-footer">
                © 2025 University of Illinois Urbana-Champaign
            </footer>
        </Layout>
    );
}

export default MajorChange;
