import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../context/UserContext";

export default function ProjectDetails() {

    const {id}=useParams();
    const {projectdata} =useContext(userContext);

    const [project,setProject]=useState(null)

    useEffect(()=>{

     let pj=  projectdata.filter(pj=>pj._id===id)
        setProject(pj[0])

    },[id])



    return (

        !project? <div>loading...</div>: <main className="main-content">
            {/* TOP HEADER */}
            <header className="top-header">
                <div className="header-left">
                    <h1>Project Details</h1>
                    <p>Review the complete project requirements before submitting your application.</p>
                </div>

                <div className="header-right">
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search projects or clients..."
                        />
                    </div>

                    <div className="notification">
                        <i className="fa-regular fa-bell"></i>
                        <span className="notification-dot red-dot"></span>
                    </div>
                </div>
            </header>

            {/* BACK LINK */}
            <Link to="/app/findwork" className="back-link">
                <i className="fa-solid fa-arrow-left"></i>
                Back to Find Work
            </Link>

            {/* PROJECT HERO */}
            <section className="project-hero">
                <div className="hero-left">
                    <div className="hero-category">
                        Full Stack Development
                    </div>

                    <h2>{project.name}</h2>

                    <div className="hero-client">
                        <div className="client-avatar">TS</div>
                        <div>
                            <strong>{project.client.username}</strong>
                            <span className="verified-text">
                                Verified Client
                                <i className="fa-solid fa-circle-check"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <span className="hiring-badge">
                        <i className="fa-solid fa-bolt"></i>
                        Hiring Fast
                    </span>

                    <span className="posted">
                        <i className="fa-regular fa-clock"></i>
                        Posted 2 hours ago
                    </span>
                </div>
            </section>

            {/* PROJECT INFORMATION (TWO COLUMNS) */}
            <section className="project-info-grid">
                {/* LEFT COLUMN - MAIN DETAILS */}
                <div className="project-main">
                    {/* PROJECT DESCRIPTION */}
                    <div className="details-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-regular fa-file-lines"></i>
                                Project Description
                            </h2>
                        </div>
                        <p>
                            {project.description}
                        </p>
                        
                    </div>

                    {/* PROJECT OBJECTIVES */}
                    <div className="details-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-solid fa-bullseye"></i>
                                Project Objectives
                            </h2>
                        </div>
                        <ul className="detail-list">
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Build a modern and user-friendly e-commerce website.
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Implement product, category and inventory management.
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Develop shopping cart and checkout functionality.
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Build APIs and connect the frontend with the database.
                            </li>
                        </ul>
                    </div>

                    {/* EXPECTED DELIVERABLES */}
                    <div className="details-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-solid fa-list-check"></i>
                                Expected Deliverables
                            </h2>
                        </div>
                        <div className="deliverable-list">
                            <div className="deliverable-item">
                                <div className="deliverable-icon">
                                    <i className="fa-regular fa-window-maximize"></i>
                                </div>
                                <div>
                                    <strong>Frontend Application</strong>
                                    <span>Responsive and user-friendly shopping interface.</span>
                                </div>
                            </div>

                            <div className="deliverable-item">
                                <div className="deliverable-icon">
                                    <i className="fa-solid fa-server"></i>
                                </div>
                                <div>
                                    <strong>Backend & APIs</strong>
                                    <span>Secure APIs for users, products, orders and payments.</span>
                                </div>
                            </div>

                            <div className="deliverable-item">
                                <div className="deliverable-icon">
                                    <i className="fa-solid fa-database"></i>
                                </div>
                                <div>
                                    <strong>Database Integration</strong>
                                    <span>Properly structured database with required collections.</span>
                                </div>
                            </div>

                            <div className="deliverable-item">
                                <div className="deliverable-icon">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <div>
                                    <strong>Authentication & Security</strong>
                                    <span>Secure login, registration and protected routes.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* REQUIRED SKILLS & TECHNOLOGIES */}
                    <div className="details-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-solid fa-layer-group"></i>
                                Required Skills & Technologies
                            </h2>
                        </div>
                        <div className="technology-list">
                           {project.skills}
                        </div>
                    </div>

                    {/* ADDITIONAL REQUIREMENTS */}
                    <div className="details-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-solid fa-circle-info"></i>
                                Additional Requirements
                            </h2>
                        </div>
                        <ul className="detail-list">
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Previous experience with e-commerce projects is preferred.
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Code should be clean, organized and maintainable.
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Freelancer should provide regular project updates.
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                Final source code and documentation must be provided.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN - SIDEBAR */}
                <aside className="project-side">
                    {/* PROJECT SUMMARY */}
                    <div className="project-summary-card">
                        <div className="summary-heading">
                            <h2>Project Summary</h2>
                        </div>

                        <div className="summary-item">
                            <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                Budget
                            </span>
                            <strong>{project.budget}</strong>
                        </div>

                        <div className="summary-item">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                                Deadline
                            </span>
                            <strong>{project.deadline}</strong>
                        </div>

                        <div className="summary-item">
                            <span>
                                <i className="fa-solid fa-pen-to-square"></i>
                                Project Type
                            </span>
                            <strong>Fixed Price</strong>
                        </div>

                        <div className="summary-item">
                            <span>
                                <i className="fa-solid fa-users"></i>
                                Proposals
                            </span>
                            <strong>5</strong>
                        </div>

                        <div className="summary-item">
                            <span>
                                <i className="fa-solid fa-chart-line"></i>
                                Experience
                            </span>
                            <strong>Intermediate</strong>
                        </div>
                    </div>

                    {/* ABOUT THE CLIENT */}
                    <div className="side-card">
                        <div className="side-card-heading">
                            <h2>
                                <i className="fa-regular fa-user"></i>
                                About the Client
                            </h2>
                        </div>

                        <div className="side-client">
                            <div className="side-client-avatar">TS</div>
                            <div>
                                <strong>TechStore India</strong>
                                <span>
                                    <i className="fa-solid fa-circle-check"></i>
                                    Verified Client
                                </span>
                            </div>
                        </div>

                        <div className="client-stats">
                            <div>
                                <strong>18</strong>
                                <span>Projects</span>
                            </div>

                            <div>
                                <strong>4.8</strong>
                                <span>Rating</span>
                            </div>

                            <div>
                                <strong>92%</strong>
                                <span>Hire Rate</span>
                            </div>
                        </div>
                    </div>

                    {/* READY TO APPLY */}
                    <div className="apply-card">
                        <div className="apply-icon">
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>

                        <h2>Ready to Apply?</h2>

                        <p>
                            Make sure your skills and experience match the project requirements before applying.
                        </p>

                        <button className="apply-main-btn" type="button">
                            Apply for this Project
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </aside>
            </section>
        </main>
    );
}