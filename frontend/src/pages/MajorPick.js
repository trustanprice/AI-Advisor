import React, { useState } from 'react';
import Layout from '../components/Layout';

function MajorPick() {
    const [formData, setFormData] = useState({
        interests: '',
        skills: '',
        career: '',
        hobbies: '',
        preferences: '',
    });

    const [recommendedMajors, setRecommendedMajors] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5000/api/recommend_majors", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setRecommendedMajors(data.majors);
        } catch (err) {
            console.error("Error fetching recommendations:", err);
        }
    };

    return (
        <Layout>
            <main className="layout-main">
                <div className="form-container">
                    <h2>Receive recommendations on a potential major choice by answering these questions!</h2>
                    <form onSubmit={handleSubmit}>
                        {Object.entries(formData).map(([field, value]) => (
                            <div key={field}>
                                <label htmlFor={field}>
                                    {{
                                        interests: 'What are your main academic interests?',
                                        skills: 'What skills do you excel in?',
                                        career: 'What career goals do you have in mind?',
                                        hobbies: 'What are your hobbies or extracurricular activities?',
                                        preferences: 'Do you prefer practical or theoretical courses?'
                                    }[field]}
                                </label>
                                <input
                                    type="text"
                                    id={field}
                                    className="input-field"
                                    value={value}
                                    onChange={handleChange}
                                    placeholder={{
                                        interests: 'E.g., Science, Arts, Technology',
                                        skills: 'E.g., Problem-solving, Communication',
                                        career: 'E.g., Engineer, Teacher, Data Scientist',
                                        hobbies: 'E.g., Writing, Sports, Coding',
                                        preferences: 'E.g., Practical, Theoretical'
                                    }[field]}
                                />
                            </div>
                        ))}
                        <button type="submit" className="button">Submit</button>
                    </form>

                    {recommendedMajors.length > 0 && (
                        <div className="results">
                            <h3>Recommended Majors:</h3>
                            <ul>
                                {recommendedMajors.map((major, index) => (
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

export default MajorPick;
