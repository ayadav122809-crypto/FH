import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminUsers, deleteAdminUser } from "./adminData";

export default function ManageUsers() {
    const navigate = useNavigate();
    const [users, setUsers] = useState(() => getAdminUsers());
    const [searchQuery, setSearchQuery] = useState("");
    const [filterRole, setFilterRole] = useState("All");
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        setUsers(getAdminUsers());
    }, []);

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(""), 3500);
    };

    // Directly delete user
    const handleDelete = (userId, userName) => {
        const updated = deleteAdminUser(userId);
        setUsers(updated);
        showToast(`User "${userName}" was deleted successfully.`);
    };

    // Open Edit User form
    const handleEdit = (userId) => {
        navigate(`/admin/users/edit/${userId}`);
    };

    // Filter logic
    const filteredUsers = users.filter((u) => {
        const matchesSearch =
            u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (u.skills && u.skills.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (u.location && u.location.toLowerCase().includes(searchQuery.toLowerCase()));

        if (filterRole === "All") return matchesSearch;
        if (filterRole === "Freelancer") return matchesSearch && u.role === "Freelancer";
        if (filterRole === "Client") return matchesSearch && u.role === "Client";
        if (filterRole === "Active") return matchesSearch && u.status === "Active";
        if (filterRole === "Pending") return matchesSearch && u.status === "Pending";
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
                    <h1>Manage Users</h1>
                    <p>
                        View, edit, and manage all registered freelancers and clients on Freelance Hub.
                    </p>
                </div>

                <div className="header-right">
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search by name, email, skill..."
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

            {/* FILTER TOOLBAR */}
            <section className="admin-toolbar">
                <div className="filter-chips">
                    {["All", "Freelancer", "Client", "Active", "Pending"].map((role) => (
                        <button
                            key={role}
                            className={`filter-chip ${filterRole === role ? "active" : ""}`}
                            onClick={() => setFilterRole(role)}
                        >
                            {role === "All" ? "All Users" : role}
                            <span className="chip-count">
                                {role === "All"
                                    ? users.length
                                    : role === "Freelancer" || role === "Client"
                                    ? users.filter((u) => u.role === role).length
                                    : users.filter((u) => u.status === role).length}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="toolbar-actions">
                    <button
                        className="admin-primary-btn"
                        onClick={() => navigate("/admin/users/edit/new")}
                    >
                        <i className="fa-solid fa-user-plus"></i> Add New User
                    </button>
                </div>
            </section>

            {/* USERS DATA TABLE */}
            <section className="admin-panel-card">
                <div className="panel-header">
                    <div>
                        <h3>Platform Users Directory</h3>
                        <p>Showing {filteredUsers.length} users</p>
                    </div>
                </div>

                <div className="admin-table-container">
                    {filteredUsers.length === 0 ? (
                        <div className="admin-empty-state">
                            <i className="fa-solid fa-user-slash"></i>
                            <h4>No users found</h4>
                            <p>Try adjusting your search query or role filter.</p>
                        </div>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th style={{ width: "28%", paddingLeft: "66px" }}>User Profile</th>
                                    <th style={{ width: "12%", textAlign: "center" }}>Role</th>
                                    <th style={{ width: "22%" }}>Contact &amp; Location</th>
                                    <th style={{ width: "12%", textAlign: "center" }}>Projects</th>
                                    <th style={{ width: "12%", textAlign: "center" }}>Status</th>
                                    <th style={{ width: "14%", textAlign: "center" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <div className="table-user-cell">
                                                <div className="table-avatar">
                                                    {user.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                                                </div>
                                                <div className="table-user-meta">
                                                    <strong>{user.name}</strong>
                                                    <span className="user-email">{user.email}</span>
                                                    {user.title && <span className="user-title">{user.title}</span>}
                                                </div>
                                            </div>
                                        </td>

                                        <td style={{ textAlign: "center" }}>
                                            <span className={`role-badge role-${user.role.toLowerCase()}`}>
                                                {user.role}
                                            </span>
                                        </td>

                                        <td>
                                            <div className="contact-details">
                                                <span><i className="fa-solid fa-location-dot"></i> {user.location || "India"}</span>
                                                <span className="table-subtext"><i className="fa-solid fa-phone"></i> {user.phone || "Not provided"}</span>
                                            </div>
                                        </td>

                                        <td style={{ textAlign: "center" }}>
                                            <span className="projects-count-pill">
                                                <i className="fa-regular fa-folder"></i> {user.projectsCount || 0}
                                            </span>
                                        </td>

                                        <td style={{ textAlign: "center" }}>
                                            <span className={`status-pill pill-${user.status.toLowerCase()}`}>
                                                {user.status}
                                            </span>
                                        </td>

                                        <td style={{ textAlign: "center" }}>
                                            <div className="table-action-btns">
                                                {/* EDIT BUTTON */}
                                                <button
                                                    className="action-btn edit-btn"
                                                    title="Edit User"
                                                    onClick={() => handleEdit(user.id)}
                                                >
                                                    <i className="fa-solid fa-pen-to-square"></i> Edit
                                                </button>

                                                {/* DIRECT DELETE BUTTON */}
                                                <button
                                                    className="action-btn delete-btn"
                                                    title="Directly Delete User"
                                                    onClick={() => handleDelete(user.id, user.name)}
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
