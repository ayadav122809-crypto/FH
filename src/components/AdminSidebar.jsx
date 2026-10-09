import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../assets";

export default function AdminSidebar() {
    const navigate = useNavigate();

    const navLinks = [
        {
            to: "/admin",
            name: "Dashboard",
            icon: <i className="fa-solid fa-chart-column"></i>,
            end: true
        },
        {
            to: "/admin/users",
            name: "Manage Users",
            icon: <i className="fa-solid fa-users-gear"></i>,
            end: false
        },
        {
            to: "/admin/projects",
            name: "Manage Projects",
            icon: <i className="fa-solid fa-folder-open"></i>,
            end: false
        }
    ];

    return (
        <div className="sidebar admin-sidebar">
            <aside>
                {/* LOGO */}
                <div className="logo-section">
                    <div className="logo" onClick={() => navigate("/admin")} style={{ cursor: "pointer" }}>
                        <div className="logo-icon">
                            <img src={Logo} alt="Freelance Hub Logo" />
                        </div>
                        <div className="logo-text">
                            <span>FREELANCE</span>
                            <span>HUB</span>
                        </div>
                    </div>
                </div>

                <div className="admin-sidebar-badge-wrap">
                    <span className="admin-portal-pill">
                        <i className="fa-solid fa-shield-halved"></i> Admin Console
                    </span>
                </div>

                {/* NAVIGATION */}
                <nav className="sidebar-menu">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            end={link.end}
                            to={link.to}
                            className={({ isActive }) =>
                                isActive ? "active menu-item" : "menu-item"
                            }
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* ADMIN ACCOUNT PROFILE AT BOTTOM */}
                <div className="sidebar-bottom">
                    <div className="account-card admin-card">
                        <div className="account-avatar" style={{ background: "#e0f2fe", color: "#0284c7" }}>
                            AD
                        </div>

                        <div className="account-info">
                            <strong>Ayush Yadav</strong>
                            <span>Admin Account</span>
                        </div>

                        <div className="account-arrow" title="Logout">
                            <i
                                onClick={() => navigate("/admin/login")}
                                className="fa-solid fa-arrow-right-from-bracket"
                                style={{ cursor: "pointer" }}
                            ></i>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
