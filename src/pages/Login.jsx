import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     Navigate to dashboard upon login
    //     navigate('/app');
    // };


      const handleSubmit=async()=>{
        const login=await fetch("http://localhost:4000/user/login",{
            method:'post',
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                email:email,
                password:password,
            })
        })
        // .then(res=>res.json()).then(data=>console.log(data) ).catch(err=>console.log(err)
        // )

        const status = login?.status
        const res = await login.json()
        const data = await res.data
        console.log(await res)
        console.log(await login)
        console.log(data)

        if (status===200) {
             localStorage.setItem("userid",res.tkn)
            navigate('/app')
        }else{
            alert("login unsucessfull")
        }
        // console.log("res status:::",status);
        // console.log("res status:::",login);
        
    }



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
                        WORK FREELY. &nbsp;GROW LIMITLESS.
                    </div>

                    <div className="blue-line"></div>

                    <p>
                        Connect with talented freelancers, discover exciting
                        opportunities, and grow your career with Freelance Hub.
                    </p>
                </div>
            </div>

            {/* RIGHT FORM SECTION */}
            <div className="right-section">
                <div className="login-form">
                    <h2>Welcome Back</h2>
                    <p className="subtitle">
                        Login to your Freelance Hub account
                    </p>

                    <form > 
                        {/* EMAIL */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-box">
                                <span className="input-icon email-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-box">
                                <span className="input-icon password-icon">🔒</span>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    maxLength="8"
                                />
                            </div>
                        </div>

                        {/* FORGOT PASSWORD */}
                        <div className="forgot-password">
                            <a href="#forgot">Forgot Password?</a>
                        </div>

                        {/* LOGIN BUTTON */}
                        <button onClick={handleSubmit} type="button" className="login-btn">
                            Login <span>→</span>
                        </button>

                        {/* CREATE ACCOUNT */}
                        <div className="register-link">
                            Don't have an account?{" "}
                            <span
                                onClick={() => navigate('/registration')}
                                className="create-account-btn"
                            >
                                Create Account
                            </span>
                        </div>

                        {/* ADMIN PORTAL ACCESS */}
                        {/* <div style={{ marginTop: "16px", textAlign: "center", fontSize: "12px", color: "#94a3b8" }}>
                            Are you an administrator?{" "}
                            <span
                                onClick={() => navigate('/admin/login')}
                                style={{ color: "#0284c7", fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}
                            >
                                Admin Login
                            </span>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
}