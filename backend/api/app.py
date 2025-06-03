# backend/api/app.py

import os
import re
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Absolute paths relative to this file's location
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")

majors_df = pd.read_csv(os.path.join(DATA_DIR, "major_keywords_fixed.csv"))
courses_df = pd.read_csv(os.path.join(DATA_DIR, "uiuc_courses.csv"))

# ----------------------- Recommend Majors -----------------------
@app.route('/api/recommend_majors', methods=['POST'])
def recommend_majors():
    data = request.json
    user_text = " ".join(data.values()).lower()

    matches = []

    for _, row in majors_df.iterrows():
        keywords = row['Keywords'].lower() if pd.notna(row['Keywords']) else ""
        
        # Match if ANY keyword from the major appears in the user's input
        for kw in keywords.split(','):
            kw = kw.strip()
            if kw and kw in user_text:
                matches.append(row['Major'])
                break  # Stop at the first match for performance

    matches = list(set(matches))[:3]  # Limit to 3 unique suggestions
    return jsonify({"majors": matches})


# ----------------------- Change Major -----------------------
@app.route('/api/change_major', methods=['POST'])
def change_major():
    data = request.json
    current_major = data.get('currentMajor', '').lower()
    reason = data.get('reason', '').lower()
    reason_words = set(re.findall(r'\b\w+\b', reason))

    suggestions = []
    for _, row in majors_df.iterrows():
        major_name = row['Major']
        if current_major in major_name.lower():
            continue

        description = row['Description'].lower() if pd.notna(row['Description']) else ""
        if any(word in description for word in reason_words):
            suggestions.append(major_name)

    suggestions = list(set(suggestions))[:3]
    return jsonify({"majors": suggestions})

# ----------------------- Build Schedule -----------------------
@app.route('/api/build_schedule', methods=['POST'])
def build_schedule():
    data = request.json
    preferred_subjects = [sub.strip().lower() for sub in data.get('classes', '').split(",")]
    available_courses = []

    for _, row in courses_df.iterrows():
        subject = row['Subject'].lower()
        if any(sub in subject for sub in preferred_subjects):
            available_courses.append({
                "Course Code": row["Course Code"],
                "Title": row["Title"],
                "Instructor": row["Instructor"],
                "Average GPA": round(row["Average GPA"], 2)
            })

    return jsonify({"recommended_courses": available_courses[:5]})

# ----------------------- Run App -----------------------
if __name__ == '__main__':
    app.run(debug=True)
