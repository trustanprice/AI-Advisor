import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
    return (
        <div className="layout-container">
            <header className="layout-header">
                <h1>AI Academic Advisor</h1>
                <nav className="layout-nav">
                    <Link to="/">Home</Link>
                    <Link to="/build-schedule">Build Schedule</Link>
                    <Link to="/pick-major">Pick Major</Link>
                    <Link to="/change-major">Change Major</Link>
                </nav>
            </header>
            <main className="layout-main">{children}</main>
            <footer className="layout-footer">
                <p>&copy; 2025 University of Illinois Urbana-Champaign</p>
            </footer>
        </div>
    );
}

export default Layout;
