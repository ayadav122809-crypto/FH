import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../context/UserContext";

export default function ClientProjectDetails() {

    const {id}=useParams();
    const {projectdata} =useContext(userContext);

    const [projects,setProjects]=useState(null)

    useEffect(()=>{
        if (projectdata ) {
     let pj=  projectdata.filter(pj=>pj._id==id)
        setProjects(pj[0])
        }
    },[id,projectdata])

    console.log(projects);
    

    return (
       !projects? 
       <div>loading...</div>:
       
       <main className="main-content client-project-details-page">
            {/* =====================================================
                 PAGE HEADER
            ====================================================== */}
            <header className="page-header">
                <div className="header-left">
                    <h1>Project Details</h1>
                    <p>View project progress, freelancer details and project information.</p>
                </div>

                <div className="header-right">
                    {/* Search */}
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search projects or freelancers..."
                        />
                    </div>

                    {/* Notification */}
                    <div className="notification">
                        <i className="fa-regular fa-bell"></i>
                        <span className="notification-dot"></span>
                    </div>
                </div>
            </header>

            {/* =====================================================
                 PROJECT TITLE CARD
            ====================================================== */}
            <section className="project-heading-card">
                <div className="project-heading-left">
                    <div className="project-category">
                        Web Development
                    </div>

                    <h2>
                        {/* E-commerce Website Development */}
                        {projects?.name}
                    </h2>

                    <p>
                        Complete development of a modern e-commerce website with product management, shopping cart and secure checkout functionality.
                    </p>

                    <div className="project-meta">
                        <span>
                            <i className="fa-solid fa-hashtag"></i>
                            Project ID: FH-2026-1024
                        </span>

                        <span>
                            <i className="fa-regular fa-calendar"></i>
                            Started: 27 Aug 2026
                        </span>
                    </div>
                </div>

                <div className="project-heading-right">
                    <span className="status-badge">
                        <i className="fa-solid fa-circle"></i>
                        In Progress
                    </span>
                </div>
            </section>

            {/* =====================================================
                 SUMMARY CARDS
            ====================================================== */}
            <section className="summary-grid">
                {/* PROGRESS */}
                <div className="summary-card">
                    <div className="summary-icon blue">
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div className="summary-info">
                        <span>Project Progress</span>
                        <strong>75%</strong>
                        <small>On schedule</small>
                    </div>
                </div>

                {/* DEADLINE */}
                <div className="summary-card">
                    <div className="summary-icon orange">
                        <i className="fa-regular fa-clock"></i>
                    </div>
                    <div className="summary-info">
                        <span>Deadline</span>
                        <strong>24 Sep 2026</strong>
                        <small>7 days remaining</small>
                    </div>
                </div>

                {/* BUDGET */}
                <div className="summary-card">
                    <div className="summary-icon green">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                    </div>
                    <div className="summary-info">
                        <span>Project Budget</span>
                        <strong>₹45,000</strong>
                        <small>Fixed Price</small>
                    </div>
                </div>

                {/* TASKS */}
                <div className="summary-card">
                    <div className="summary-icon purple">
                        <i className="fa-solid fa-list-check"></i>
                    </div>
                    <div className="summary-info">
                        <span>Tasks Completed</span>
                        <strong>18 / 24</strong>
                        <small>6 tasks remaining</small>
                    </div>
                </div>
            </section>

            {/* =====================================================
                 MAIN PROJECT AREA
            ====================================================== */}
            <section className="project-layout">
                {/* =====================================================
                     LEFT CONTENT
                ====================================================== */}
                <div className="project-main">
                    {/* PROJECT PROGRESS */}
                    <div className="content-card">
                        <div className="card-header">
                            <div>
                                <h2>Project Progress</h2>
                                <p>Current progress of your project.</p>
                            </div>
                            <strong className="progress-percentage">
                                75%
                            </strong>
                        </div>

                        <div className="large-progress-bar">
                            <div
                                className="large-progress-fill"
                                style={{ width: "75%" }}
                            ></div>
                        </div>

                        <div className="progress-labels">
                            <span>Started: 27 Aug 2026</span>
                            <span>Deadline: 24 Sep 2026</span>
                        </div>
                    </div>

                    {/* PROJECT STAGES */}
                    <div className="content-card">
                        <div className="card-header">
                            <div>
                                <h2>Project Stages</h2>
                                <p>Track the progress of each project stage.</p>
                            </div>
                        </div>

                        <div className="timeline">
                            {/* STAGE 1 */}
                            <div className="timeline-item completed">
                                <div className="timeline-icon">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top">
                                        <strong>Project Planning</strong>
                                        <span>Completed</span>
                                    </div>
                                    <p>Requirements and project scope were finalized.</p>
                                </div>
                            </div>

                            {/* STAGE 2 */}
                            <div className="timeline-item completed">
                                <div className="timeline-icon">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top">
                                        <strong>UI/UX Design</strong>
                                        <span>Completed</span>
                                    </div>
                                    <p>Website interface and user experience design approved.</p>
                                </div>
                            </div>

                            {/* STAGE 3 */}
                            <div className="timeline-item current">
                                <div className="timeline-icon">
                                    <i className="fa-solid fa-spinner"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top">
                                        <strong>Frontend Development</strong>
                                        <span>In Progress</span>
                                    </div>
                                    <p>Product pages, shopping cart and checkout interface are being developed.</p>
                                </div>
                            </div>

                            {/* STAGE 4 */}
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top">
                                        <strong>Backend & API Integration</strong>
                                        <span>Pending</span>
                                    </div>
                                    <p>Server-side functionality and APIs will be integrated.</p>
                                </div>
                            </div>

                            {/* STAGE 5 */}
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top">
                                        <strong>Testing & Deployment</strong>
                                        <span>Pending</span>
                                    </div>
                                    <p>Final testing and production deployment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TECHNOLOGIES */}
                    <div className="content-card">
                        <div className="card-header">
                            <div>
                                <h2>Project Technologies</h2>
                                <p>Technologies being used for this project.</p>
                            </div>
                        </div>

                        <div className="technology-list">
                            <span className="technology">React.js</span>
                            <span className="technology">Node.js</span>
                            <span className="technology">Express.js</span>
                            <span className="technology">MongoDB</span>
                            <span className="technology">JavaScript</span>
                            <span className="technology">REST API</span>
                            <span className="technology">HTML5</span>
                            <span className="technology">CSS3</span>
                        </div>
                    </div>

                    {/* RECENT ACTIVITY */}
                    <div className="content-card">
                        <div className="card-header">
                            <div>
                                <h2>Recent Activity</h2>
                                <p>Latest updates from your project.</p>
                            </div>
                        </div>

                        <div className="activity-list">
                            <div className="activity-item">
                                <div className="activity-icon blue">
                                    <i className="fa-solid fa-file-arrow-up"></i>
                                </div>
                                <div className="activity-info">
                                    <strong>New work submitted</strong>
                                    <span>Rahul Sharma submitted the latest frontend development files.</span>
                                    <small>2 hours ago</small>
                                </div>
                            </div>

                            <div className="activity-item">
                                <div className="activity-icon green">
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                                <div className="activity-info">
                                    <strong>UI/UX Design approved</strong>
                                    <span>You approved the website design stage.</span>
                                    <small>Yesterday</small>
                                </div>
                            </div>

                            <div className="activity-item">
                                <div className="activity-icon purple">
                                    <i className="fa-solid fa-message"></i>
                                </div>
                                <div className="activity-info">
                                    <strong>New message</strong>
                                    <span>Rahul Sharma sent a message about the checkout page.</span>
                                    <small>2 days ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                     RIGHT SIDEBAR
                ====================================================== */}
                <div className="project-sidebar">
                    {/* FREELANCER */}
                    <div className="side-card">
                        <h3>Freelancer</h3>

                        <div className="freelancer-profile">
                            <div className="freelancer-avatar">RS</div>
                            <div>
                                <strong>Rahul Sharma</strong>
                                <span>Full Stack Developer</span>
                            </div>
                        </div>

                        <div className="verified">
                            <i className="fa-solid fa-circle-check"></i>
                            Verified Freelancer
                        </div>

                        <a href="#message" className="message-btn">
                            <i className="fa-regular fa-comment"></i>
                            Message Freelancer
                        </a>
                    </div>

                    {/* PROJECT INFORMATION */}
                    <div className="side-card">
                        <h3>Project Information</h3>

                        <div className="info-list">
                            <div className="info-row">
                                <span>Category</span>
                                <strong>Web Development</strong>
                            </div>

                            <div className="info-row">
                                <span>Project Type</span>
                                <strong>Fixed Price</strong>
                            </div>

                            <div className="info-row">
                                <span>Budget</span>
                                <strong>₹45,000</strong>
                            </div>

                            <div className="info-row">
                                <span>Start Date</span>
                                <strong>27 Aug 2026</strong>
                            </div>

                            <div className="info-row">
                                <span>Deadline</span>
                                <strong>24 Sep 2026</strong>
                            </div>

                            <div className="info-row">
                                <span>Status</span>
                                <strong className="status-text">In Progress</strong>
                            </div>
                        </div>
                    </div>

                    {/* DEADLINE */}
                    <div className="deadline-card">
                        <div className="deadline-icon">
                            <i className="fa-regular fa-clock"></i>
                        </div>
                        <div>
                            <span>Project Deadline</span>
                            <strong>24 September 2026</strong>
                            <small>7 days remaining</small>
                        </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="side-card">
                        <h3>Project Actions</h3>

                        <a href="#contact" className="side-action">
                            <i className="fa-regular fa-comment"></i>
                            Contact Freelancer
                        </a>

                        <a href="#files" className="side-action">
                            <i className="fa-solid fa-file-arrow-down"></i>
                            View Project Files
                        </a>

                        <a href="#review" className="side-action">
                            <i className="fa-solid fa-circle-check"></i>
                            Review Submitted Work
                        </a>
                    </div>
                </div>
            </section>
        </main>
       
    );
}