import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FindWork() {
    const [activeFilter, setActiveFilter] = useState("All Projects");

    const filterOptions = [
        "All Projects",
        "Web Development",
        "UI/UX Design",
        "Mobile Development"
    ];

    const projects = [
        {
            id: 1,
            avatar: "TC",
            avatarClass: "",
            client: "TechStore India",
            badge: "Urgent",
            badgeClass: "urgent-badge",
            title: "E-commerce Website Development",
            description: "Build a modern responsive e-commerce website with product management, shopping cart, user authentication and secure online payment integration.",
            skills: ["React.js", "Node.js", "MongoDB", "Razorpay"],
            type: "Fixed Price",
            budget: "₹45,000",
            proposals: "8",
            time: "Posted 2 hours ago",
            category: "Web Development"
        },
        {
            id: 2,
            avatar: "AS",
            avatarClass: "purple-avatar",
            client: "Aesthetic Studio",
            badge: "New Match",
            badgeClass: "new-badge",
            title: "Mobile App UI/UX Redesign",
            description: "Redesign the user interface of a fitness tracking application with modern layouts, smooth interactions, improved navigation and a consistent visual system.",
            skills: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
            type: "Hourly",
            budget: "₹1,500/hr",
            budgetLabel: "RATE",
            proposals: "5",
            time: "Posted 5 hours ago",
            category: "UI/UX Design"
        },
        {
            id: 3,
            avatar: "CL",
            avatarClass: "green-avatar",
            client: "Creative Labs",
            badge: "Recommended",
            badgeClass: "recommended-badge",
            title: "Business Portfolio Website",
            description: "Create a professional business portfolio website with multiple sections, contact forms, service pages and a clean modern user interface.",
            skills: ["HTML5", "CSS3", "JavaScript", "PHP"],
            type: "Fixed Price",
            budget: "₹25,000",
            proposals: "12",
            time: "Posted yesterday",
            category: "Web Development"
        },
        {
            id: 4,
            avatar: "GL",
            avatarClass: "orange-avatar",
            client: "Global Logistics",
            badge: "New",
            badgeClass: "new-badge",
            title: "REST API Development & Integration",
            description: "Develop and integrate secure REST APIs for a logistics platform including authentication, database operations and third-party services.",
            skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
            type: "Fixed Price",
            budget: "₹30,000",
            proposals: "6",
            time: "Posted 1 day ago",
            category: "Web Development"
        },
        {
            id: 5,
            avatar: "RB",
            avatarClass: "blue-avatar",
            client: "RankBoost",
            badge: "Recommended",
            badgeClass: "recommended-badge",
            title: "SEO & Website Performance Optimization",
            description: "Improve website performance, search engine visibility, page speed and technical SEO for an existing business website.",
            skills: ["SEO", "Google Analytics", "Performance", "WordPress"],
            type: "Fixed Price",
            budget: "₹18,000",
            proposals: "10",
            time: "Posted 2 days ago",
            category: "Web Development"
        },
        {
            id: 6,
            avatar: "MS",
            avatarClass: "dark-avatar",
            client: "Modern Softwares",
            badge: "Hiring Fast",
            badgeClass: "hiring-badge",
            title: "React Admin Dashboard Development",
            description: "Build a complete admin dashboard with user management, analytics, charts, authentication and API integration using modern React.",
            skills: ["React.js", "JavaScript", "Node.js", "API"],
            type: "Fixed Price",
            budget: "₹36,000",
            proposals: "4",
            time: "Posted 3 hours ago",
            category: "Web Development"
        },
        {
            id: 7,
            avatar: "EW",
            avatarClass: "blue-avatar",
            client: "Elite Web Solutions",
            badge: "New Project",
            badgeClass: "new-project-badge",
            title: "Social Media Management Platform",
            description: "Develop a modern platform for managing social media posts, campaigns, analytics and scheduled content with an easy-to-use dashboard.",
            skills: ["React.js", "Node.js", "MongoDB", "REST API"],
            type: "Fixed Price",
            budget: "₹30,000 - ₹45,000",
            proposals: "6",
            time: "Posted 5 hours ago",
            category: "Web Development"
        },
        {
            id: 8,
            avatar: "ES",
            avatarClass: "blue-avatar",
            client: "EduTech Solutions",
            badge: "New Project",
            badgeClass: "new-project-badge",
            title: "Online Learning Website",
            description: "Build a complete online learning platform with course management, student accounts, instructor dashboard and secure online payment integration.",
            skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
            type: "Fixed Price",
            budget: "₹45,000 - ₹65,000",
            proposals: "8",
            time: "Posted 7 hours ago",
            category: "Web Development"
        }
    ];

    const filteredProjects = activeFilter === "All Projects"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <main className="main-content">
            {/* TOP HEADER */}
            <header className="top-header">
                <div className="header-left">
                    <h1>Find Work</h1>
                    <p>
                        Discover projects that match your skills and start working with clients.
                    </p>
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

            {/* WORK SUMMARY / FILTER CARD */}
            <section className="work-summary">
                <div className="summary-heading">
                    <div>
                        <h2>
                            <i className="fa-solid fa-briefcase"></i>
                            Available Projects
                        </h2>
                        <p>
                            Browse projects posted by clients and apply for opportunities.
                        </p>
                    </div>

                    <span className="project-count">
                        8 Projects Available
                    </span>
                </div>

                {/* FILTER AREA */}
                <div className="filter-area">
                    <div className="filter-title">
                        <i className="fa-solid fa-sliders"></i>
                        <span>Filter Projects</span>
                    </div>

                    <div className="filter-options">
                        {filterOptions.map((option) => (
                            <button
                                key={option}
                                className={`filter-btn ${activeFilter === option ? "active-filter" : ""}`}
                                onClick={() => setActiveFilter(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section className="projects-section">
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div className="find-project-card" key={project.id}>
                            <div className="project-header">
                                <div className="client-info">
                                    <div className={`client-avatar ${project.avatarClass}`}>
                                        {project.avatar}
                                    </div>
                                    <div>
                                        <strong>{project.client}</strong>
                                        <span>
                                            Verified Client
                                            <i className="fa-solid fa-circle-check"></i>
                                        </span>
                                    </div>
                                </div>

                                <span className={`project-badge ${project.badgeClass}`}>
                                    {project.badge}
                                </span>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-skills">
                                    {project.skills.map((skill, idx) => (
                                        <span key={idx}>{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-details">
                                <div className="detail-item">
                                    <span>PROJECT TYPE</span>
                                    <strong>{project.type}</strong>
                                </div>

                                <div className="detail-item">
                                    <span>{project.budgetLabel || "BUDGET"}</span>
                                    <strong>{project.budget}</strong>
                                </div>

                                <div className="detail-item">
                                    <span>PROPOSALS</span>
                                    <strong>{project.proposals}</strong>
                                </div>
                            </div>

                            <div className="project-footer">
                                <span className="posted-time">
                                    <i className="fa-regular fa-clock"></i>
                                    {project.time}
                                </span>

                                <Link to="/app/projectdetails" className="apply-btn">
                                    Apply Now
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}