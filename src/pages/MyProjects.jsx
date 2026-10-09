import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// const navigate =useNavigate();

export default function MyProjects() {
    return (
        <main className="main-content myprojects-page">
            {/* TOP HEADER */}
            <header className="top-header">
                <div className="header-left">
                    <h1>My Projects</h1>
                    <p>Track your active projects and deadlines.</p>
                </div>

                <div className="header-right">
                    {/* SEARCH */}
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search projects or clients..."
                        />
                    </div>

                    {/* NOTIFICATION */}
                    <div className="notification">
                        <i className="fa-regular fa-bell"></i>
                        <span className="notification-dot red-dot"></span>
                    </div>
                </div>
            </header>

            {/* ONGOING PROJECTS SECTION */}
            <section className="projects-section">
                <div className="section-header">
                    <div>
                        <h2>Ongoing Projects</h2>
                        <p>Track your active projects and deadlines.</p>
                    </div>

                    <span className="section-badge">
                        <i className="fa-solid fa-circle"></i>
                        2 Active Projects
                    </span>
                </div>

                {/* PROJECTS GRID */}
                <div className="projects-grid">
                    {/* PROJECT 1 */}
                    <div className="project-card">
                        <div className="project-top">
                            <span className="project-category">
                                Website Development
                            </span>
                            <span className="project-status">
                                <i className="fa-solid fa-circle"></i>
                                Due in 3 days
                            </span>
                        </div>

                        <h3>Portfolio Website Design</h3>

                        <div className="client-row">
                            <div className="client-avatar">CM</div>
                            <div className="client-info">
                                <strong>Creative Minds Inc.</strong>
                                <span>Client</span>
                            </div>
                        </div>

                        <div className="project-divider"></div>

                        <div className="progress-area">
                            <div className="progress-title">
                                <span>Task Progress</span>
                                <strong>75%</strong>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "75%" }}
                                ></div>
                            </div>
                        </div>

                        <div className="project-bottom">
                            <div className="budget-info">
                                <span>REMAINING BUDGET</span>
                                <strong>₹15,000</strong>
                            </div>

                            <Link className="details-btn"
                            >
                                View Details
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div className="project-card">
                        <div className="project-top">
                            <span className="project-category">
                                API Development
                            </span>
                            <span className="project-status">
                                <i className="fa-solid fa-circle"></i>
                                Due in 8 days
                            </span>
                        </div>

                        <h3>API Integration & Bug Fixing</h3>

                        <div className="client-row">
                            <div className="client-avatar">GL</div>
                            <div className="client-info">
                                <strong>Global Logistics</strong>
                                <span>Client</span>
                            </div>
                        </div>

                        <div className="project-divider"></div>

                        <div className="progress-area">
                            <div className="progress-title">
                                <span>Task Progress</span>
                                <strong>40%</strong>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "40%" }}
                                ></div>
                            </div>
                        </div>

                        <div className="project-bottom">
                            <div className="budget-info">
                                <span>REMAINING BUDGET</span>
                                <strong>₹30,000</strong>
                            </div>


                            <NavLink className="details-btn" to="/app/ongoingprojects" >             
                                View Details
                                <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECT SUMMARY CARDS */}
            <section className="summary-section">
                <div className="summary-card">
                    <div className="summary-icon">
                        <i className="fa-solid fa-folder"></i>
                    </div>
                    <div className="summary-content">
                        <span>ACTIVE PROJECTS</span>
                        <strong>2</strong>
                    </div>
                </div>

                <div className="summary-card">
                    <div className="summary-icon budget-summary-icon">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                    </div>
                    <div className="summary-content">
                        <span>REMAINING BUDGET</span>
                        <strong>₹45,000</strong>
                    </div>
                </div>

                <div className="summary-card">
                    <div className="summary-icon progress-summary-icon">
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div className="summary-content">
                        <span>PROJECTS IN PROGRESS</span>
                        <strong>2</strong>
                    </div>
                </div>
            </section>
        </main>
    );
}
