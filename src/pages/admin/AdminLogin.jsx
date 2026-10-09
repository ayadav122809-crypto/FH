import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets";

export default function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        if (e) e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in both email and password.");
            return;
        }

        // Demo admin credentials validation
        if (email.trim().length > 0 && password.trim().length > 0) {


            const res=await fetch('http://localhost:4000/freelancehub/admin/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            })
            // console.log(res);
            
            if (res.ok) {
            //    let d =res.json()
            //     console.log(d);
                navigate("/admin");
                
            }else{
                console.log("errr");
            }


        } else {
            setError("Invalid credentials. Try demo login: admin@freelancehub.com");
        }
    };

    return (
        <div className="login-page">
            {/* LEFT BRANDING SECTION */}
            <div className="left-section">
                <div className="brand-content">
                    <img src={Logo} alt="Freelance Hub Logo" className="logo" />

                    <h1>
                        FREELANCE <span>HUB</span>
                    </h1>

                    <div className="tagline">
                        ADMINISTRATION &amp; GOVERNANCE PORTAL
                    </div>

                    <div className="blue-line"></div>

                    <p>
                        Secure administration dashboard for managing platform users, monitoring client projects,
                        and overseeing platform operations with full governance control.
                    </p>
                </div>
            </div>

            {/* RIGHT FORM SECTION */}
            <div className="right-section">
                <div className="login-form">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#e0f2fe", color: "#0369a1", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        <i className="fa-solid fa-shield-halved"></i> Admin Access
                    </div>

                    <h2>Admin Sign In</h2>
                    <p className="subtitle">
                        Authenticate with administrator credentials
                    </p>

                    {error && (
                        <div style={{ background: "#fee2e2", border: "1px solid #f87171", color: "#b91c1c", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* EMAIL */}
                        <div className="form-group">
                            <label htmlFor="admin-email">Admin Email Address</label>
                            <div className="input-box">
                                <span className="input-icon email-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    id="admin-email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@freelancehub.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div className="form-group">
                            <label htmlFor="admin-password">Password</label>
                            <div className="input-box">
                                <span className="input-icon password-icon">
                                    <i className="fa-solid fa-lock"></i>
                                </span>
                                <input
                                    type="password"
                                    id="admin-password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter administrator password"
                                    required
                                />
                            </div>
                        </div>

                        {/* DEMO NOTICE */}
                        {/* <div style={{ fontSize: "12px", color: "#64748b", margin: "10px 0 18px 0", background: "#f8fafc", padding: "8px 12px", borderRadius: "6px", border: "1px dashed #cbd5e1" }}>
                            <i className="fa-solid fa-circle-info" style={{ marginRight: "6px", color: "#0284c7" }}></i>
                            Demo prefilled. Click <strong>Login</strong> to enter console.
                        </div> */}

                        {/* LOGIN BUTTON */}
                        <button onClick={handleSubmit} type="button" className="login-btn">
                            Sign In to Admin <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                        </button>

                        {/* SWITCH TO FREELANCER/CLIENT LOGIN */}
                        <div className="register-link" style={{ marginTop: "24px" }}>
                            Not an admin?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="create-account-btn"
                                style={{ cursor: "pointer" }}
                            >
                                User Login
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
