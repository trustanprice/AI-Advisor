import React, { useState } from 'react';
import Layout from '../components/Layout';

function Schedule() {
    const [formData, setFormData] = useState({
        classes: '', // Only this one is used for now
        days: '',
        times: '',
        online: '',
        goals: ''
    });

    const [schedule, setSchedule] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/api/build_schedule', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setSchedule(data.recommended_courses); // pull courses from correct key
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <Layout>
            <main className="layout-main">
                <div className="form-container">
                    <h2>Build a potential semester schedule or 4-year plan by answering these questions!</h2>
                    <form onSubmit={handleSubmit}>
                        {Object.entries(formData).map(([key, value]) => (
                            <div key={key}>
                                <label htmlFor={key}>
                                    {{
                                        classes: "Any specific classes or subjects?",
                                        days: "What days are you available?",
                                        times: "What times are best for you?",
                                        online: "Are you open to online classes?",
                                        goals: "What are your academic goals?"
                                    }[key]}
                                </label>
                                <input
                                    type="text"
                                    id={key}
                                    className="input-field"
                                    value={value}
                                    onChange={handleChange}
                                    placeholder={{
                                        classes: "E.g., Math, Biology",
                                        days: "E.g., Monday, Wednesday",
                                        times: "E.g., Morning, Afternoon",
                                        online: "E.g., Yes or No",
                                        goals: "E.g., Graduate early, Explore majors"
                                    }[key]}
                                />
                            </div>
                        ))}
                        <button type="submit" className="button">Submit</button>
                    </form>

                    {schedule.length > 0 && (
                        <div className="schedule-results">
                            <h3>Suggested Courses:</h3>
                            <ul>
                                {schedule.map((course, idx) => (
                                    <li key={idx}>
                                        <strong>{course["Course Code"]}</strong>: {course["Title"]} — {course["Instructor"]} (Avg GPA: {course["Average GPA"]})
                                    </li>
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

export default Schedule;
