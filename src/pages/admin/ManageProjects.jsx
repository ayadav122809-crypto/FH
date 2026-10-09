import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminProjects, deleteAdminProject } from "./adminData";

export default function ManageProjects() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState(() => getAdminProjects());
    const [searchQuery, setSearchQuery] = useState("");
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        setProjects(getAdminProjects());
    }, []);

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(""), 3500);
    };

    // Directly delete project
    const handleDelete = (projectId, projectTitle) => {
        const updated = deleteAdminProject(projectId);
        setProjects(updated);
        showToast(`Project "${projectTitle}" was deleted successfully.`);
    };

    // Open Edit Project form
    const handleEdit = (projectId) => {
        navigate(`/admin/projects/edit/${projectId}`);
    };

    // Filter logic
    const filteredProjects = projects.filter((p) => {
        const matchesSearch =
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.freelancerName.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesSearch;
    });

    return (
        <main className="main-content">
            {/* TOAST NOTIFICATION */}
            {toastMessage && (
                <div className="admin-toast">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{toastMessage}</span>
                    <button onClick={() => setToastMessage("")}><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}

            {/* TOP HEADER */}
            <header className="top-header">
                <div className="header-title">
                    <h1>Manage Projects</h1>
                    <p>
                        Review all client project contracts, track deliverables, and adjust budgets.
                    </p>
                </div>

                <div className="header-right">
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search by title, client, freelancer..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="notification">
                        <i className="fa-regular fa-bell"></i>
                        <span className="notification-dot red-dot"></span>
                    </div>
                </div>
            </header>

            {/* ACTION TOOLBAR */}
            <section className="admin-toolbar" style={{ justifyContent: "flex-end" }}>
                <div className="toolbar-actions">
                    <button
                        className="admin-primary-btn"
                        onClick={() => navigate("/admin/projects/edit/new")}
                    >
                        <i className="fa-solid fa-plus"></i> Post / Add Project
                    </button>
                </div>
            </section>

            {/* PROJECTS DATA TABLE */}
            <section className="admin-panel-card">
                <div className="panel-header">
                    <div>
                        <h3>Platform Project Directory</h3>
                        <p>Showing {filteredProjects.length} projects</p>
                    </div>
                </div>

                <div className="admin-table-container">
                    {filteredProjects.length === 0 ? (
                        <div className="admin-empty-state">
                            <i className="fa-solid fa-folder-open"></i>
                            <h4>No projects found</h4>
                            <p>Try adjusting your search query.</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th style={{ width: "26%" }}>Project Details</th>
                                    <th style={{ width: "24%", paddingLeft: "66px" }}>Client</th>
                                    <th style={{ width: "20%", paddingLeft: "66px" }}>Assigned Freelancer</th>
                                    <th style={{ width: "10%", textAlign: "center" }}>Budget</th>
                                    <th style={{ width: "10%", textAlign: "center" }}>Deadline</th>
                                    <th style={{ width: "10%", textAlign: "center" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProjects.map((proj) => (
                                    <tr key={proj.id}>
                                        <td>
                                            <div className="project-cell-meta">
                                                <strong>{proj.title}</strong>
                                                <span className="table-subtext">
                                                    <i className="fa-solid fa-tag"></i> {proj.category}
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="table-user-cell">
                                                <div className="table-avatar" style={{ background: "#e0f2fe", color: "#0369a1" }}>
                                                    {proj.clientName.slice(0, 2).toUpperCase()}
                                                </div>
                                                <div>
                                                    <strong>{proj.clientName}</strong>
                                                    <span className="table-subtext">{proj.clientEmail}</span>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="table-user-cell">
                                                <div className="table-avatar" style={{ background: "#f3e8ff", color: "#7e22ce" }}>
                                                    {proj.freelancerName === "Unassigned" ? "--" : proj.freelancerName.slice(0, 2).toUpperCase()}
                                                </div>
                                                <div>
                                                    <strong>{proj.freelancerName}</strong>
                                                </div>
                                            </div>
                                        </td>

                                        <td style={{ textAlign: "center" }}>
                                            <span className="budget-highlight">{proj.budget}</span>
                                        </td>

                                        <td style={{ textAlign: "center" }}>
                                            <span className="deadline-badge">
                                                <i className="fa-regular fa-calendar"></i> {proj.deadline}
                                            </span>
                                        </td>

                                        <td style={{ textAlign: "center" }}>
                                            <div className="table-action-btns">
                                                {/* EDIT BUTTON */}
                                                <button
                                                    className="action-btn edit-btn"
                                                    title="Edit Project"
                                                    onClick={() => handleEdit(proj.id)}
                                                >
                                                    <i className="fa-solid fa-pen-to-square"></i> Edit
                                                </button>

                                                {/* DIRECT DELETE BUTTON */}
                                                <button
                                                    className="action-btn delete-btn"
                                                    title="Directly Delete Project"
                                                    onClick={() => handleDelete(proj.id, proj.title)}
                                                >
                                                    <i className="fa-solid fa-trash-can"></i> Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>
        </main>
    );
}
