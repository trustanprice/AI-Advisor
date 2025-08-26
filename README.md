# 🎓 AI Academic Advisor

The **AI Academic Advisor** is a web application that helps students discover potential majors and build optimized course schedules based on their interests, preferences, and academic goals.

This project uses a **React.js frontend** and a **Python Flask backend** powered by a custom-trained **machine learning model**. It analyzes student input, extracts keywords using NLP techniques, and recommends relevant majors and course schedules from the University of Illinois course catalog.

---

## 🌐 Live Demo

(COMING SOON)

---

## 📁 Project Structure
AI-Advisor/
├── backend/ # Flask API + ML/NLP logic
│ ├── app.py
│ ├── model/
│ ├── data/
│ └── requirements.txt
├── frontend/ # React app
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
│ └── package.json
└── README.md

---

## 🚀 Features

- ✅ React frontend with a clean, interactive UI
- ✅ Flask backend with REST API for model communication
- ✅ NLP keyword extraction from student answers
- ✅ Machine learning model for major/class recommendations
- ✅ Integration with UIUC course catalog via web scraping
- ✅ Three flows: "Pick Major", "Build Schedule", "Change Major"
- ✅ Responsive design & fast load time

---

## 🧠 Technologies Used

### 🔵 Frontend (React)
- React.js (Create React App)
- Axios (API requests)
- React Router (navigation)
- Tailwind CSS or custom CSS modules

### 🟠 Backend (Flask)
- Flask + Flask-CORS
- scikit-learn, spaCy, or NLTK (for NLP + ML)
- BeautifulSoup / Selenium (for course scraping)
- Pandas / NumPy (data processing)

---

## ⚙️ Getting Started

### 1. Clone the Repository

git clone https://github.com/trustanprice/AI-Advisor.git
cd AI-Advisor

### 2. Set up the Frontend

cd frontend
npm install
npm start
- Runs on http://localhost:3000

### 3. Set up the Backend

cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
- Runs on http://localhost:5000

## 🧪 Sample Usage

Navigate to the homepage.
Select a task: "Pick Major", "Build Schedule", or "Change Major".
Answer 3–5 short questions about your interests or goals.
Receive personalized major or schedule recommendations.

## 📊 Machine Learning Model

Input: 
- Keyword-based student responses

Output:
- Best-matched majors and suggested course schedules

Techniques:
- TF-IDF / Bag of Words (text vectorization)
- Cosine similarity / KNN classifier
- Mapping keywords to curated major database

## 🧩 Future Improvements

 User authentication & account saving
 Major-specific schedule constraints
 Multi-campus university support
 GPT-powered Q&A assistant
 Admin dashboard for uploading catalogs

## 🙌 Acknowledgments

UIUC Course Catalog
Wade Fagen-Ulmschneider grade distribution
Create React App
Flask + scikit-learn ecosystem
BeautifulSoup web scraping resources
