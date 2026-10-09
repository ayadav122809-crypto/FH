import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getAdminUsers, updateAdminUser, saveAdminUsers } from "./adminData";

export default function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isNew = id === "new";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Freelancer",
        title: "",
        phone: "",
        location: "India",
        skills: "",
        bio: "",
        projectsCount: 0
    });

    const [savedSuccess, setSavedSuccess] = useState(false);

    useEffect(() => {
        if (!isNew && id) {
            const users = getAdminUsers();
            const existing = users.find((u) => u.id === Number(id));
            if (existing) {
                setFormData(existing);
            }
        }
    }, [id, isNew]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isNew) {
            const users = getAdminUsers();
            const newUser = {
                ...formData,
                id: Date.now(),
                joinDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
                projectsCount: Number(formData.projectsCount) || 0
            };
            saveAdminUsers([newUser, ...users]);
        } else {
            updateAdminUser(id, formData);
        }

        setSavedSuccess(true);
        setTimeout(() => {
            navigate("/admin/users");
        }, 800);
    };

    return (
        <main className="main-content">
            {/* PAGE HEADER */}
            <div className="page-header" style={{ marginBottom: "24px" }}>
                <div className="page-title">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <Link to="/admin/users" className="admin-back-btn">
                            <i className="fa-solid fa-arrow-left"></i> Back to Users
                        </Link>
                    </div>
                    <h1>{isNew ? "Add New Platform User" : `Edit User: ${formData.name || "User Profile"}`}</h1>
                    <p>Modify user details, role classification, professional titles, and profile information.</p>
                </div>
            </div>

            {savedSuccess && (
                <div className="admin-toast" style={{ position: "relative", top: 0, right: 0, marginBottom: "20px" }}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>User details updated successfully! Redirecting...</span>
                </div>
            )}

            {/* FORM CONTAINER */}
            <div className="admin-form-container">
                <form onSubmit={handleSubmit} className="admin-form-card">
                    {/* SECTION 1: USER OVERVIEW & CLASSIFICATION */}
                    <div className="form-section-title">
                        <i className="fa-solid fa-folder-open"></i>
                        <span>User Overview &amp; Classification</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="user-name">Full Name</label>
                        <div className="input-box">
                            <span className="input-icon">
                                <i className="fa-solid fa-heading"></i>
                            </span>
                            <input
                                type="text"
                                id="user-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Ayush Yadav"
                                required
                            />
                        </div>
                    </div>

                    <div className="two-column">
                        {/* ROLE */}
                        <div className="form-group">
                            <label htmlFor="user-role">Account Role</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-solid fa-layer-group"></i>
                                </span>
                                <select
                                    id="user-role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="admin-select"
                                    required
                                >
                                    <option value="Freelancer">Freelancer</option>
                                    <option value="Client">Client</option>
                                </select>
                            </div>
                        </div>

                        {/* TITLE / DESIGNATION */}
                        <div className="form-group">
                            <label htmlFor="user-title">Designation / Headline</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-solid fa-briefcase"></i>
                                </span>
                                <input
                                    type="text"
                                    id="user-title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Full Stack Developer or TechStore India"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: CONTACT, DETAILS & EXPERTISE */}
                    <div className="form-section-title" style={{ marginTop: "24px" }}>
                        <i className="fa-solid fa-users"></i>
                        <span>Contact, Location &amp; Professional Details</span>
                    </div>

                    <div className="two-column">
                        {/* EMAIL */}
                        <div className="form-group">
                            <label htmlFor="user-email">Email Address</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    id="user-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="user@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className="form-group">
                            <label htmlFor="user-phone">Phone Number</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <input
                                    type="text"
                                    id="user-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="two-column">
                        {/* LOCATION */}
                        <div className="form-group">
                            <label htmlFor="user-location">Location</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <input
                                    type="text"
                                    id="user-location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="e.g. Gujarat, India"
                                />
                            </div>
                        </div>

                        {/* ASSOCIATED PROJECTS */}
                        <div className="form-group">
                            <label htmlFor="user-projectsCount">Associated Projects Count</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-regular fa-folder"></i>
                                </span>
                                <input
                                    type="number"
                                    id="user-projectsCount"
                                    name="projectsCount"
                                    value={formData.projectsCount}
                                    onChange={handleChange}
                                    min="0"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="user-skills">Required Skills &amp; Expertise</label>
                        <div className="input-box">
                            <span className="input-icon">
                                <i className="fa-solid fa-tags"></i>
                            </span>
                            <input
                                type="text"
                                id="user-skills"
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                placeholder="React, Node.js, JavaScript, MERN Stack"
                            />
                        </div>
                    </div>

                    {/* BIO / DESCRIPTION */}
                    <div className="form-group">
                        <label htmlFor="user-bio">Profile Deliverables &amp; Bio Description</label>
                        <textarea
                            id="user-bio"
                            name="bio"
                            rows="4"
                            className="admin-textarea"
                            value={formData.bio}
                            onChange={handleChange}
                            placeholder="Provide details about the user's background, expertise, and role..."
                        ></textarea>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="admin-form-actions">
                        <button
                            type="button"
                            className="admin-secondary-btn"
                            onClick={() => navigate("/admin/users")}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="admin-primary-btn">
                            <i className="fa-solid fa-floppy-disk"></i> {isNew ? "Create User" : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
