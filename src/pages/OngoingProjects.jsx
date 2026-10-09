import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OngoingProjects() {
    const navigate = useNavigate();

    const [status,setStatus]=useState('');
    const [progress,setProgess]= useState(0);


    useEffect(()=>{
        if(!status) return;
        if(status==='pending'){
            setProgess(0)
        }else if(status==="inProgress"){
            setProgess(50)
        }else if(status==="complete"){
            setProgess(100)
        }else{
            return progress;
        }

    },[status])

    return (
        <main className="main-content ongoing-projects-page">
            {/* TOP HEADER */}
            <header className="ongoing-page-header">
                <div className="ongoing-header-left">
                    <h1>My Projects</h1>
                    <p>Track your project progress, milestones and work activity.</p>
                </div>

                <div className="ongoing-header-right">
                    <div className="ongoing-search-wrapper">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            className="ongoing-search-input"
                            placeholder="Search projects or clients..."
                        />
                    </div>

                    <button className="ongoing-bell-btn" aria-label="Notifications">
                        <i className="fa-regular fa-bell"></i>
                        <span className="ongoing-red-dot"></span>
                    </button>
                </div>
            </header>

            {/* BACK TO DASHBOARD */}
            <button
                className="ongoing-back-btn"
                onClick={() =>{
                     navigate("/app")
                    // console.log(status);
                    
                    }}
            >
                <i className="fa-solid fa-arrow-left"></i>
                Back to Dashboard
            </button>

            <select class="filter-select1" value={status}  onChange={(e)=>setStatus(e.target.value)}>

                <option value={'pending'}>Pending</option>

                <option value={'inProgress'}>In Progress</option>

                <option value={'complete'}>Completed</option>

            </select>

            

            {/* HERO PROJECT CARD */}
            <section className="ongoing-hero-card">
                <div className="ongoing-hero-top">
                    <span className="ongoing-category-badge">
                        API Integration &amp; Bug Fixing
                    </span>
                    <span className="ongoing-status-badge">
                        <span className="ongoing-status-dot"></span>
                        Ongoing
                    </span>
                </div>

                <div className="ongoing-hero-title-row">
                    <h2>API Integration &amp; Bug Fixing</h2>
                    <span className="ongoing-project-id">Project ID: FH-1024</span>
                </div>

                <div className="ongoing-client-row">
                    <div className="ongoing-client-avatar">GL</div>
                    <div className="ongoing-client-info">
                        <span className="ongoing-client-name">Global Logistics</span>
                        <span className="ongoing-client-verified">
                            Verified Client <i className="fa-solid fa-circle-check"></i>
                        </span>
                    </div>
                </div>
            </section>

            {/* 4 STAT OVERVIEW CARDS */}
            <section className="ongoing-stats-grid">
                {/* 1. OVERALL PROGRESS */}
                <div className="ongoing-stat-card">
                    <div className="ongoing-stat-icon-box stat-icon-blue">
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div className="ongoing-stat-details">
                        <span className="ongoing-stat-label">OVERALL PROGRESS</span>
                        <strong className="ongoing-stat-value">40%</strong>
                        <span className="ongoing-stat-sub">In progress</span>
                    </div>
                </div>

                {/* 2. TASK PROGRESS */}
                <div className="ongoing-stat-card">
                    <div className="ongoing-stat-icon-box stat-icon-green">
                        <i className="fa-solid fa-list-check"></i>
                    </div>
                    <div className="ongoing-stat-details">
                        <span className="ongoing-stat-label">TASK PROGRESS</span>
                        <strong className="ongoing-stat-value">40%</strong>
                        <span className="ongoing-stat-sub">Project progress</span>
                    </div>
                </div>

                {/* 3. TIME REMAINING */}
                <div className="ongoing-stat-card">
                    <div className="ongoing-stat-icon-box stat-icon-amber">
                        <i className="fa-regular fa-clock"></i>
                    </div>
                    <div className="ongoing-stat-details">
                        <span className="ongoing-stat-label">TIME REMAINING</span>
                        <strong className="ongoing-stat-value">8 Days</strong>
                        <span className="ongoing-stat-sub">Before deadline</span>
                    </div>
                </div>

                {/* 4. REMAINING BUDGET */}
                <div className="ongoing-stat-card">
                    <div className="ongoing-stat-icon-box stat-icon-purple">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                    </div>
                    <div className="ongoing-stat-details">
                        <span className="ongoing-stat-label">REMAINING BUDGET</span>
                        <strong className="ongoing-stat-value">₹30,000</strong>
                        <span className="ongoing-stat-sub">Remaining amount</span>
                    </div>
                </div>
            </section>

            {/* MAIN 2-COLUMN SECTION */}
            <section className="ongoing-main-layout">
                {/* LEFT COLUMN */}
                <div className="ongoing-col-left">
                    {/* 1. PROJECT PROGRESS */}
                    <div className="ongoing-card">
                        <div className="ongoing-progress-top-row">
                            <div className="ongoing-card-header" style={{ marginBottom: 0 }}>
                                <h2>Project Progress</h2>
                                <p>Overall completion of your project.</p>
                            </div>
                            <span className="ongoing-progress-percent-large">{progress}%</span>
                        </div>

                        <div className="ongoing-progress-track">
                            <div
                                className="ongoing-progress-fill-blue"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        <div className="ongoing-progress-labels">
                            <span>Project Started</span>
                            <span>Due in 8 days</span>
                        </div>
                    </div>

                    {/* 2. WORK STAGES (Static markup) */}
                    <div className="ongoing-card">
                        <div className="ongoing-card-header">
                            <h2>Work Stages</h2>
                            <p>Track the current stage of development.</p>
                        </div>

                        <div className="ongoing-stages-list">
                            {/* Stage 1 */}
                            <div className="ongoing-stage-row completed">
                                <div className="ongoing-stage-left">
                                    <div className="ongoing-stage-icon-circle">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div className="ongoing-stage-texts">
                                        <span className="ongoing-stage-title">Project Analysis</span>
                                        <span className="ongoing-stage-desc">
                                            Existing system and API requirements reviewed
                                        </span>
                                    </div>
                                </div>
                                <span className="ongoing-stage-status-tag">Completed</span>
                            </div>

                            {/* Stage 2 */}
                            <div className="ongoing-stage-row current">
                                <div className="ongoing-stage-left">
                                    <div className="ongoing-stage-icon-circle">
                                        <i className="fa-solid fa-circle-notch fa-spin"></i>
                                    </div>
                                    <div className="ongoing-stage-texts">
                                        <span className="ongoing-stage-title">API Integration</span>
                                        <span className="ongoing-stage-desc">
                                            Connecting and testing required API endpoints
                                        </span>
                                    </div>
                                </div>
                                <span className="ongoing-stage-status-tag">In Progress</span>
                            </div>

                            {/* Stage 3 */}
                            <div className="ongoing-stage-row pending">
                                <div className="ongoing-stage-left">
                                    <div className="ongoing-stage-icon-circle">
                                        <i className="fa-solid fa-lock"></i>
                                    </div>
                                    <div className="ongoing-stage-texts">
                                        <span className="ongoing-stage-title">Bug Fixing</span>
                                        <span className="ongoing-stage-desc">
                                            Identifying and resolving existing application issues
                                        </span>
                                    </div>
                                </div>
                                <span className="ongoing-stage-status-tag">Pending</span>
                            </div>

                            {/* Stage 4 */}
                            <div className="ongoing-stage-row pending">
                                <div className="ongoing-stage-left">
                                    <div className="ongoing-stage-icon-circle">
                                        <i className="fa-solid fa-lock"></i>
                                    </div>
                                    <div className="ongoing-stage-texts">
                                        <span className="ongoing-stage-title">API Testing</span>
                                        <span className="ongoing-stage-desc">
                                            Testing API responses and application functionality
                                        </span>
                                    </div>
                                </div>
                                <span className="ongoing-stage-status-tag">Pending</span>
                            </div>

                            {/* Stage 5 */}
                            <div className="ongoing-stage-row pending">
                                <div className="ongoing-stage-left">
                                    <div className="ongoing-stage-icon-circle">
                                        <i className="fa-solid fa-lock"></i>
                                    </div>
                                    <div className="ongoing-stage-texts">
                                        <span className="ongoing-stage-title">Final Testing &amp; Deployment</span>
                                        <span className="ongoing-stage-desc">
                                            Final verification and deployment of the fixes
                                        </span>
                                    </div>
                                </div>
                                <span className="ongoing-stage-status-tag">Pending</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. RECENT ACTIVITY (Static markup) */}
                    <div className="ongoing-card">
                        <div className="ongoing-card-header">
                            <h2>Recent Activity</h2>
                            <p>Latest updates on this project.</p>
                        </div>

                        <div className="ongoing-activity-list">
                            <div className="ongoing-activity-row">
                                <div className="ongoing-activity-left">
                                    <div className="ongoing-activity-icon">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div className="ongoing-activity-texts">
                                        <span className="ongoing-activity-title">Project requirements reviewed</span>
                                        <span className="ongoing-activity-desc">
                                            Existing API requirements were reviewed successfully.
                                        </span>
                                    </div>
                                </div>
                                <span className="ongoing-activity-time">2 hours ago</span>
                            </div>

                            <div className="ongoing-activity-row">
                                <div className="ongoing-activity-left">
                                    <div className="ongoing-activity-icon">
                                        <i className="fa-solid fa-code"></i>
                                    </div>
                                    <div className="ongoing-activity-texts">
                                        <span className="ongoing-activity-title">API integration updated</span>
                                        <span className="ongoing-activity-desc">
                                            API endpoint integration work is currently in progress.
                                        </span>
                                    </div>
                                </div>
                                <span className="ongoing-activity-time">Yesterday</span>
                            </div>

                            <div className="ongoing-activity-row">
                                <div className="ongoing-activity-left">
                                    <div className="ongoing-activity-icon">
                                        <i className="fa-regular fa-comment-dots"></i>
                                    </div>
                                    <div className="ongoing-activity-texts">
                                        <span className="ongoing-activity-title">Client sent a message</span>
                                        <span className="ongoing-activity-desc">
                                            New project feedback is available for review.
                                        </span>
                                    </div>
                                </div>
                                <span className="ongoing-activity-time">2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="ongoing-col-right">
                    {/* 1. PROJECT DEADLINE */}
                    <div className="ongoing-card">
                        <div className="ongoing-card-header">
                            <h2>Project Deadline</h2>
                            <p>Keep your work on schedule.</p>
                        </div>

                        <div className="ongoing-deadline-box">
                            <i className="fa-regular fa-calendar"></i>
                            <div className="ongoing-deadline-info">
                                <span className="ongoing-deadline-title">Due in 8 Days</span>
                                <span className="ongoing-deadline-sub">8 days remaining</span>
                            </div>
                        </div>

                        <div className="ongoing-deadline-track">
                            <div className="ongoing-deadline-fill-amber"></div>
                        </div>

                        <div className="ongoing-deadline-schedule-text">
                            <i className="fa-solid fa-circle-check"></i>
                            Project is on schedule
                        </div>
                    </div>

                    {/* 2. PROJECT DETAILS */}
                    <div className="ongoing-card">
                        <div className="ongoing-card-header">
                            <h2>Project Details</h2>
                        </div>

                        <div className="ongoing-details-list">
                            <div className="ongoing-detail-row">
                                <span className="ongoing-detail-label">Client</span>
                                <strong className="ongoing-detail-value">Global Logistics</strong>
                            </div>
                            <div className="ongoing-detail-row">
                                <span className="ongoing-detail-label">Project Type</span>
                                <strong className="ongoing-detail-value">Fixed Price</strong>
                            </div>
                            <div className="ongoing-detail-row">
                                <span className="ongoing-detail-label">Remaining Budget</span>
                                <strong className="ongoing-detail-value">₹30,000</strong>
                            </div>
                            <div className="ongoing-detail-row">
                                <span className="ongoing-detail-label">Task Progress</span>
                                <strong className="ongoing-detail-value">40%</strong>
                            </div>
                            <div className="ongoing-detail-row">
                                <span className="ongoing-detail-label">Deadline</span>
                                <strong className="ongoing-detail-value">8 Days</strong>
                            </div>
                        </div>
                    </div>

                    {/* 3. TECHNOLOGIES (Static markup) */}
                    <div className="ongoing-card">
                        <div className="ongoing-card-header">
                            <h2>Technologies</h2>
                        </div>

                        <div className="ongoing-tech-tags">
                            <span className="ongoing-tech-pill">Node.js</span>
                            <span className="ongoing-tech-pill">Express.js</span>
                            <span className="ongoing-tech-pill">REST API</span>
                            <span className="ongoing-tech-pill">JavaScript</span>
                            <span className="ongoing-tech-pill">MongoDB</span>
                            <span className="ongoing-tech-pill">Postman</span>
                        </div>
                    </div>

                    {/* 4. CLIENT CONTACT */}
                    <div className="ongoing-card ongoing-client-box-card">
                        <div className="ongoing-client-box-left">
                            <div className="ongoing-client-box-avatar">GL</div>
                            <div className="ongoing-client-box-meta">
                                <span className="ongoing-client-box-name">Global Logistics</span>
                                <span className="ongoing-client-box-badge">Verified Client</span>
                            </div>
                        </div>

                        <button
                            className="ongoing-message-btn"
                            onClick={() => navigate("/app/chat")}
                        >
                            <i className="fa-regular fa-message"></i>
                            Message
                        </button>
                    </div>
                </div>
            </section>

            {/* FULL-WIDTH PROJECT ANALYTICS (Static markup) */}
            <section className="ongoing-analytics-card">
                <div className="ongoing-analytics-header">
                    <div>
                        <h2>Project Analytics</h2>
                        <p>Weekly progress based on completed project tasks.</p>
                    </div>
                    <span className="ongoing-time-filter-pill">Last 5 Weeks</span>
                </div>

                <div className="ongoing-chart-container">
                    {/* Y-AXIS */}
                    <div className="ongoing-chart-y-axis">
                        <span>100%</span>
                        <span>75%</span>
                        <span>50%</span>
                        <span>25%</span>
                        <span>0%</span>
                    </div>

                    {/* PLOT AREA */}
                    <div className="ongoing-chart-plot-area">
                        {/* 5 Horizontal Grid Lines */}
                        <div className="ongoing-chart-grid-lines">
                            <div className="ongoing-chart-grid-line"></div>
                            <div className="ongoing-chart-grid-line"></div>
                            <div className="ongoing-chart-grid-line"></div>
                            <div className="ongoing-chart-grid-line"></div>
                            <div className="ongoing-chart-grid-line"></div>
                        </div>

                        {/* BARS (Static) */}
                        <div className="ongoing-chart-bars-wrap">
                            {/* Week 1 */}
                            <div className="ongoing-chart-col">
                                <div className="ongoing-bar-wrapper">
                                    <span className="ongoing-bar-label-top">15%</span>
                                    <div
                                        className="ongoing-chart-bar"
                                        style={{ height: "15%" }}
                                    ></div>
                                </div>
                                <span className="ongoing-chart-x-label">Week 1</span>
                            </div>

                            {/* Week 2 */}
                            <div className="ongoing-chart-col">
                                <div className="ongoing-bar-wrapper">
                                    <span className="ongoing-bar-label-top">22%</span>
                                    <div
                                        className="ongoing-chart-bar"
                                        style={{ height: "22%" }}
                                    ></div>
                                </div>
                                <span className="ongoing-chart-x-label">Week 2</span>
                            </div>

                            {/* Week 3 */}
                            <div className="ongoing-chart-col">
                                <div className="ongoing-bar-wrapper">
                                    <span className="ongoing-bar-label-top">28%</span>
                                    <div
                                        className="ongoing-chart-bar"
                                        style={{ height: "28%" }}
                                    ></div>
                                </div>
                                <span className="ongoing-chart-x-label">Week 3</span>
                            </div>

                            {/* Week 4 */}
                            <div className="ongoing-chart-col">
                                <div className="ongoing-bar-wrapper">
                                    <span className="ongoing-bar-label-top">34%</span>
                                    <div
                                        className="ongoing-chart-bar"
                                        style={{ height: "34%" }}
                                    ></div>
                                </div>
                                <span className="ongoing-chart-x-label">Week 4</span>
                            </div>

                            {/* Week 5 */}
                            <div className="ongoing-chart-col">
                                <div className="ongoing-bar-wrapper">
                                    <span className="ongoing-bar-label-top">40%</span>
                                    <div
                                        className="ongoing-chart-bar"
                                        style={{ height: "40%" }}
                                    ></div>
                                </div>
                                <span className="ongoing-chart-x-label">Week 5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}