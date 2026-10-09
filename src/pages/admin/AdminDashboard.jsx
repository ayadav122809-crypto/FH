import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAdminUsers, getAdminProjects } from "./adminData";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [users, setUsers] = useState(() => getAdminUsers());
    const [projects, setProjects] = useState(() => getAdminProjects());
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setUsers(getAdminUsers());
        setProjects(getAdminProjects());
    }, []);

    // Calculate metrics
    const totalUsers = users.length;
    const freelancersCount = users.filter((u) => u.role === "Freelancer").length;
    const clientsCount = users.filter((u) => u.role === "Client").length;
    const activeProjectsCount = projects.filter((p) => p.status === "In Progress" || p.status === "Open").length;
    const totalValue = projects.reduce((acc, p) => acc + (p.rawBudget || 0), 0);

    const formattedValue = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(totalValue);

    return (
        <main className="main-content">
            {/* TOP HEADER */}
            <header className="top-header">
                <div className="header-title">
                    <h1>Admin Dashboard</h1>
                    <p>
                        Welcome back, <strong>Ayush (Admin)</strong>. Operational overview of Freelance Hub.
                    </p>
                </div>

                <div className="header-right">
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search platform..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="notification" title="System Notifications">
                        <i className="fa-regular fa-bell"></i>
                        <span className="notification-dot red-dot"></span>
                    </div>
                </div>
            </header>

            {/* ================= STATISTICS ================= */}
            <section className="stats-section">
                {/* TOTAL USERS */}
                <div className="stat-card" onClick={() => navigate("/admin/users")} style={{ cursor: "pointer" }}>
                    <div className="stat-content">
                        <p>TOTAL REGISTERED USERS</p>
                        <h2>{totalUsers}</h2>
                        <span className="stat-description">
                            {freelancersCount} Freelancers <i className="fa-solid fa-circle" style={{ fontSize: "5px", verticalAlign: "middle", margin: "0 6px" }}></i> {clientsCount} Clients
                        </span>
                    </div>
                    <div className="stat-icon purple-icon">
                        <i className="fa-solid fa-users"></i>
                    </div>
                </div>

                {/* ACTIVE PROJECTS */}
                <div className="stat-card" onClick={() => navigate("/admin/projects")} style={{ cursor: "pointer" }}>
                    <div className="stat-content">
                        <p>ACTIVE &amp; OPEN PROJECTS</p>
                        <h2>{activeProjectsCount}</h2>
                        <span className="stat-description">
                            {projects.length} Total tracked contracts
                        </span>
                    </div>
                    <div className="stat-icon blue-icon">
                        <i className="fa-regular fa-folder-open"></i>
                    </div>
                </div>

                {/* TOTAL PROJECT BUDGET */}
                <div className="stat-card">
                    <div className="stat-content">
                        <p>TOTAL PROJECT BUDGET</p>
                        <h2>{formattedValue}</h2>
                        <span className="stat-description">
                            Across active client projects
                        </span>
                    </div>
                    <div className="stat-icon green-icon">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                    </div>
                </div>

                {/* ESCALATIONS / SYSTEM ALERTS */}
                <div className="stat-card">
                    <div className="stat-content">
                        <p>PENDING ACTIONS</p>
                        <h2>1</h2>
                        <span className="stat-description">
                            Client verification pending
                        </span>
                    </div>
                    <div className="stat-icon orange-icon">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                </div>
            </section>

            {/* QUICK ACTIONS ROW */}
            <section className="admin-quick-actions">
                <div className="quick-action-card" onClick={() => navigate("/admin/users")}>
                    <div className="action-icon users-bg">
                        <i className="fa-solid fa-user-plus"></i>
                    </div>
                    <div className="action-info">
                        <h4>Manage Platform Users</h4>
                        <p>View, edit user profiles or revoke platform access</p>
                    </div>
                    <i className="fa-solid fa-arrow-right action-arrow"></i>
                </div>

                <div className="quick-action-card" onClick={() => navigate("/admin/projects")}>
                    <div className="action-icon projects-bg">
                        <i className="fa-solid fa-folder-tree"></i>
                    </div>
                    <div className="action-info">
                        <h4>Manage Live Projects</h4>
                        <p>Review project contracts, deadlines, and modify budgets</p>
                    </div>
                    <i className="fa-solid fa-arrow-right action-arrow"></i>
                </div>
            </section>

            {/* TWO COLUMN GRID: RECENT PROJECTS & USERS */}
            <section className="admin-grid-section">
                {/* RECENT PROJECTS */}
                <div className="admin-panel-card">
                    <div className="panel-header">
                        <div>
                            <h3><i className="fa-solid fa-diagram-project"></i> Recent Projects</h3>
                            <p>Overview of latest projects posted and in progress</p>
                        </div>
                        <Link to="/admin/projects" className="panel-view-all">
                            View All <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </div>

                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Client</th>
                                    <th>Freelancer</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.slice(0, 4).map((proj) => (
                                    <tr key={proj.id}>
                                        <td>
                                            <strong>{proj.title}</strong>
                                            <span className="table-subtext">{proj.category}</span>
                                        </td>
                                        <td>{proj.clientName}</td>
                                        <td>{proj.freelancerName}</td>
                                        <td><strong>{proj.budget}</strong></td>
                                        <td>
                                            {proj.status ? (
                                                <span className={`status-pill pill-${proj.status.toLowerCase().replace(/\s+/g, "-")}`}>
                                                    {proj.status}
                                                </span>
                                            ) : (
                                                <span className="status-pill pill-active">Active</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* RECENT USERS DIRECTORY */}
                <div className="admin-panel-card">
                    <div className="panel-header">
                        <div>
                            <h3><i className="fa-solid fa-users"></i> Platform Users</h3>
                            <p>Active freelancers and verified clients</p>
                        </div>
                        <Link to="/admin/users" className="panel-view-all">
                            Manage All <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </div>

                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.slice(0, 5).map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <div className="table-user-cell">
                                                <div className="table-avatar">
                                                    {user.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                                                </div>
                                                <div>
                                                    <strong>{user.name}</strong>
                                                    <span className="table-subtext">{user.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`role-badge role-${user.role.toLowerCase()}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td>{user.location}</td>
                                        <td>
                                            <span className={`status-pill pill-${user.status.toLowerCase()}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}
