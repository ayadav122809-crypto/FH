import { useState } from "react";
import { Logo } from "../assets";
import { useNavigate } from "react-router-dom";

export default function Register(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConPass]=useState('');

    const [role, setRole]= useState('');


    // const formdata=new FormData();
    const navigate = useNavigate();

    const handleSubmit=async()=>{
        // formdata.append("name","ayush");
        // formdata.append("email","ayush@fh.com");
        // formdata.append("password","ayush@fh");

        // fetch('',{})

        if(!name || !email || !password || !confirmPassword|| !role){
            console.log("some input fields are empty");
            
            return;
        }

        if(password!==confirmPassword){
            console.log("password isnt matched please try agin");
            return;
        }



        // console.log(name);
        // console.log(email);
        // console.log(password);

        // post data
        const res= await fetch('http://localhost:4000/register/user',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                username:name,
                email:email,
                password:password,
                role:role,
            })
        })
        // .then(res=>res.json()).then(d=>console.log(d)).catch(err=>console.log(err));
        const data= res.json()

        console.log("user",data)


        // console.log(res) 
        if(res.ok)     {
            localStorage.setItem("userid",data._id)
            navigate('/login')
        }  

        // console.log(role)
        

        

    }

    return(
        <div class="registration-page">

        <div class="registration-container">

            {/* <!-- Left Branding Section --> */}
            <div class="branding-section">

                {/* <img src="../src/assets/Logo.jpeg" alt="Freelance Hub Logo" class="brand-logo"/> */}
                <img src={Logo} alt="Freelance Hub Logo" class="brand-logo"/>

                <h1>FREELANCE <span>HUB</span></h1>

                <p class="tagline">
                    WORK FREELY. GROW LIMITLESS.
                </p>

                <div class="brand-line"></div>

                <p class="brand-description">
                    Connect with talented freelancers, discover exciting
                    opportunities, and grow your career with Freelance Hub.
                </p>

            </div>


            {/* <!-- Registration Form --> */}
            <div class="form-section">

                <div class="form-wrapper">

                    <div class="form-heading">
                        <h2>Create Account</h2>
                        <p>Join Freelance Hub and start your journey today.</p>
                    </div>

                    <form>

                        {/* <!-- Full Name --> */}
                        <div className="form-group">

                            <label htmlFor="fullName">
                                Full Name
                            </label>

                            <div className="input-box">
                                <span className="input-icon">👤</span>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                        </div>


                        {/* <!-- Email --> */}
                        <div className="form-group">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>

                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    name="email"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                        </div>


                        {/* <!-- Password --> */}
                        <div className="form-group">

                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="input-box">
                                <span className="input-icon">🔒</span>

                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    name="password"
                                    placeholder="Create a password"
                                    required
                                />
                            </div>

                        </div>


                        {/* <!-- Confirm Password --> */}
                        <div className="form-group">

                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <div className="input-box">
                                <span className="input-icon">🔒</span>

                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e)=>setConPass(e.target.value)}
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>

                        </div>


                        {/* <!-- Register As --> */}
                        <div class="role-section">

                            <label class="role-title">
                                Register As
                            </label>

                            <div class="role-options">

                                <label class="role-option">

                                    <input
                                        type="radio"
                                        name="role"
                                        
                                        onChange={(e)=>setRole(e.target.value)}
                                        value="client"
                                        required
                                    />

                                    <span class="custom-radio"></span>

                                    <span class="role-text">
                                        Client
                                    </span>

                                </label>


                                <label class="role-option">

                                    <input
                                        type="radio"
                                        name="role"
                                        value="freelancer"
                                        onChange={(e)=>setRole(e.target.value)}
                                    />

                                    <span class="custom-radio"></span>

                                    <span class="role-text">
                                        Freelancer
                                    </span>

                                </label>

                            </div>

                        </div>


                        {/* <!-- Register Button --> */}
                        <button type="button" onClick={handleSubmit} class="register-btn">
                            Create Account
                            <span>→</span>
                        </button>


                        {/* <!-- Login --> */}
                        <div class="login-text">
                            Already have an account?
                            <span class='login-eff'  onClick={() => navigate('/login')}>Login</span>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    </div>
    )
}