import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import { userContext } from "../context/userContext";

export default function EditProfile() {
    const navigate = useNavigate();
    
    const {user} =useContext(userContext);
    
    // const [user, setUser] = useState({});
    // useEffect(() => {
    //     let userid = localStorage.getItem("userid");
    
    //         fetch(`http://localhost:4000/users/${userid}`)
    //         .then(res => res.json())
    //         .then(data => {setUser(data[0]); //console.log(data);
    //         })
    //         .catch(err => console.log(err)
    //         )
    
    
    //     }, [])

    //     useEffect(()=>{},[user])
        // console.log(user);
        
    // Form state initialized with exact values from screenshot
    // const [formData, setFormData] = useState({
    //     fullName: user? user.username:'test',
    //     email: user? user.email:'',
    //     accountType: user?user.role:"", // 'client' | 'freelancer'
    //     jobTitle: user?user.domain:'',
    //     location: user?user.location:'',
    //     fixedBudget: "45000",
    //     languages: "English, Hindi",
    //     skills: user?user.skills:'',
    //     about: user?user.description:'',
    //     newPassword:user?user.experience:'',
    //     confirmPassword: user?user.profileImg:''
    // });
    const [formData, setFormData] = useState(user);

    const [toastMessage, setToastMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRoleSelect = (role) => {
        setFormData((prev) => ({
            ...prev,
            accountType: role,
            // client:userId
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
            setToastMessage("Passwords do not match!");
            setTimeout(() => setToastMessage(""), 3000);
            return;
        }

        // Save to localStorage or persistence if available
        try {
            const storedUser = JSON.parse(localStorage.getItem("userData") || "{}");
            const updatedUser = {
                ...storedUser,
                username: formData?.username,
                role: formData?.user.domain,
                skills: formData?.skills,
                location: formData.location,
                budget: formData.fixedBudget,
                languages: formData.languages,
                about: formData?.user.description
            };
            localStorage.setItem("userData", JSON.stringify(updatedUser));
        } catch {
            // ignore JSON error if any
        }

        setToastMessage("Profile updated successfully!");
        setTimeout(() => {
            setToastMessage("");
            navigate("/app/freelancerprofile");
        }, 1500);
    };

    return (
        <main className="main-content">
            {toastMessage && (
                <div className="edit-profile-toast">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{toastMessage}</span>
                </div>
            )}

            {/* PAGE HEADER */}
            <div className="edit-profile-page-header">
                <h1>Edit Profile</h1>
                <p>Update your professional profile and account information.</p>
            </div>

            {/* EDIT PROFILE CARD */}
            <div className="edit-profile-card">
                {/* LEFT BRANDING */}
                <div className="branding-section">
                    <img src={Logo} alt="Freelance Hub" className="brand-logo" />

                    <h2>
                        FREELANCE <span>HUB</span>
                    </h2>

                    <p className="tagline">
                        WORK FREELY. GROW LIMITLESS.
                    </p>

                    <div className="brand-line"></div>

                    <p className="brand-description">
                        Keep your professional profile updated and showcase
                        your skills, experience and expertise to potential
                        clients on Freelance Hub.
                    </p>
                </div>

                {/* RIGHT FORM */}
                <div className="form-section">
                    <div className="form-wrapper">
                        <div className="form-heading">
                            <h2>Update Profile</h2>
                            <p>Edit your information below and save your changes.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* BASIC INFORMATION */}
                            <div className="form-section-title">
                                <i className="fa-regular fa-user"></i>
                                <span>Basic Information</span>
                            </div>

                            <div className="two-column">
                                {/* FULL NAME */}
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <div className="input-box">
                                        <span className="input-icon">
                                            <i className="fa-regular fa-user"></i>
                                        </span>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="username"
                                            value={formData?.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <div className="input-box">
                                        <span className="input-icon">
                                            <i className="fa-regular fa-envelope"></i>
                                        </span>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData?.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ACCOUNT TYPE */}
                            <div className="form-group account-type-group">
                                <label className="role-title">Account Type</label>
                                <div className="role-options">
                                    {/* CLIENT */}
                                    <div   
                                        className={`role-option ${formData.role === "client" ? "active" : ""}`}
                                        onClick={() => handleRoleSelect("client")}
                                        // `role-option ${formData.role === "client" ? "active" : ""}`
                                    >
                                        <div className="role-icon-indicator">
                                            {formData.accountType === "client" ? (
                                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" className="role-diamond-active">
                                                    <ellipse cx="6" cy="7.5" rx="4.5" ry="2" fill="#cbd5e1" opacity="0.65" />
                                                    <path d="M6 0.5 L10.5 7.5 L6 14.5 L1.5 7.5 Z" fill="#0066f6" />
                                                </svg>
                                            ) : (
                                                <span className="role-pill-inactive"></span>
                                            )}
                                        </div>
                                        <div className="role-text">
                                            <strong>Client</strong>
                                            <small>Hire freelancers</small>
                                        </div>
                                    </div>

                                    {/* FREELANCER */}
                                    <div
                                        className={`role-option ${formData.role === "freelancer" ? "active" : ""}`}
                                        onClick={() => handleRoleSelect("freelancer")}
                                    >
                                        <div className="role-icon-indicator">
                                            {formData.accountType === "freelancer" ? (
                                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" className="role-diamond-active">
                                                    <ellipse cx="6" cy="7.5" rx="4.5" ry="2" fill="#cbd5e1" opacity="0.65" />
                                                    <path d="M6 0.5 L10.5 7.5 L6 14.5 L1.5 7.5 Z" fill="#0066f6" />
                                                </svg>
                                            ) : (
                                                <span className="role-pill-inactive"></span>
                                            )}
                                        </div>
                                        <div className="role-text">
                                            <strong>Freelancer</strong>
                                            <small>Offer your services</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PROFESSIONAL INFORMATION */}
                            <div className="form-section-title professional-title">
                                <i className="fa-solid fa-briefcase"></i>
                                <span>Professional Information</span>
                            </div>

                            <div className="two-column">
                                {/* PROFESSIONAL TITLE */}
                                <div className="form-group">
                                    <label htmlFor="jobTitle">Professional Title</label>
                                    <div className="input-box">
                                        <span className="input-icon">
                                            <i className="fa-solid fa-briefcase"></i>
                                        </span>
                                        <input
                                            type="text"
                                            id="jobTitle"
                                            name="domain"
                                            value={formData?.userdomain}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* LOCATION */}
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <div className="input-box">
                                        <span className="input-icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </span>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData?.userlocation}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="two-column">
                                {/* FIXED BUDGET */}
                                <div className="form-group">
                                    <label htmlFor="fixedBudget">Fixed Budget</label>
                                    <div className="input-box">
                                        <span className="input-icon">
                                            <i className="fa-solid fa-indian-rupee-sign"></i>
                                        </span>
                                        <input
                                            type="number"
                                            id="fixedBudget"
                                            name="fixedBudget"
                                            value={formData.fixedBudget}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* LANGUAGES */}
                                <div className="form-group">
                                    <label htmlFor="languages">Languages</label>
                                    <div className="input-box">
                                        <span className="input-icon">
                                            <i className="fa-solid fa-language"></i>
                                        </span>
                                        <input
                                            type="text"
                                            id="languages"
                                            name="languages"
                                            value={formData.languages}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SKILLS */}
                            <div className="form-group">
                                <label htmlFor="skills">Skills</label>
                                <div className="input-box">
                                    <span className="input-icon">
                                        <i className="fa-solid fa-code"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="skills"
                                        name="skills"
                                        value={formData?.userskills}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* ABOUT ME */}
                            <div className="form-group">
                                <label htmlFor="about">About Me</label>
                                <div className="textarea-box about-box">
                                    <span className="textarea-icon">
                                        <i className="fa-regular fa-file-lines"></i>
                                    </span>
                                    <textarea
                                        id="about"
                                        name="about"
                                        value={formData?.userdescription}
                                        onChange={handleChange}
                                        rows={3}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* CHANGE PASSWORD */}
                            <div className="form-section-title password-title">
                                <i className="fa-solid fa-lock"></i>
                                <span>Change Password</span>
                            </div>

                            <div className="two-column">
                                {/* NEW PASSWORD */}
                                <div className="form-group">
                                    <label htmlFor="newPassword">New Password</label>
                                    <div className="input-box">
                                        <span className="input-icon">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            id="newPassword"
                                            name="newPassword"
                                            value={formData?.userexperience}
                                            onChange={handleChange}
                                            placeholder="Enter new password"
                                        />
                                    </div>
                                </div>

                                {/* CONFIRM PASSWORD */}
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm New Password</label>
                                    <div className="input-box">
                                        <span className="input-icon">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData?.userprofileImg}
                                            onChange={handleChange}
                                            placeholder="Confirm new password"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <div className="form-buttons">
                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={() => navigate("/app/freelancerprofile")}
                                >
                                    Cancel
                                </button>

                                <button type="submit" className="save-btn">
                                    <i className="fa-solid fa-check"></i>
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}