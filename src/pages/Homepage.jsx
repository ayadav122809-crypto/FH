import { NavLink, useNavigate } from "react-router-dom"
import { Logo } from "../assets";

export default function HomePage() {

    const navigate = useNavigate();
    const links = [
        
        { name: "Services", to: '#services' },
        { name: "How It Works", to: '#how-it-works' },
        // { name: "Contact Us", to: '/' },

    ]

    return (
        <div class="home-page">


            {/* <!-- =====================================================
         HEADER / NAVBAR
    ====================================================== --> */}

            <header class="header">

                <div class="nav-container">

                    {/* <!-- Logo --> */}

                    <span class="brand">

                        <img src={Logo} 
                            onClick={() => {
                                navigate('/')
                            }}
                            alt="Freelance Hub Logo" />

                    </span>


                    {/* <!-- Navigation --> */}

                    <nav class="navbar">

                        <NavLink className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={() => {
                                navigate('/')
                            }}>
                            Home
                        </NavLink>

                        {links.map((link, index) => (
                            <a key={index} href={link.to}>
                               {link.name}
                            </a>
                        ))}

                        {/* <a href="#services">
                            Services
                        </a>

                        <a href="#freelancers">
                            Find Freelancers
                        </a>

                        <a href="#how-it-works">
                            How It Works
                        </a>

                        <a href="#about">
                            About
                        </a> */}

                    </nav>


                    {/* <!-- Login / Signup --> */}

                    <div class="nav-actions">

                        <button href="login.html"
                            class="btn btn-outline"
                            onClick={() => navigate('/login')}
                        >

                            Log In

                        </button>

                        <button href="registration.html"
                            class="btn btn-primary"
                            onClick={()=> navigate('/registration')}>

                            Sign Up

                        </button>

                    </div>

                </div>

            </header>



            {/* <!-- =====================================================
         MAIN
    ====================================================== --> */}

            <main>


                {/* <!-- =================================================
             HERO SECTION
        ================================================== --> */}

                <section class="hero" id="home">

                    <div class="hero-container">


                        {/* <!-- Left Content --> */}

                        <div class="hero-content">

                            <p class="eyebrow">
                                FREELANCE PLATFORM
                            </p>


                            <h1>

                                Work Freely.<br />

                                <span>
                                    Grow Limitlessly.
                                </span>

                            </h1>


                            <p class="hero-description">

                                Connect with skilled freelancers, post projects,
                                manage your work and bring your ideas to life —
                                all in one powerful platform.

                            </p>


                            {/* <!-- Buttons --> */}

                            <div class="hero-buttons">

                                <button href="#freelancers"
                                    class="btn btn-primary hero-btn"
                                     onClick={() => navigate('/login')}>

                                    Find Talent

                                </button>


                                <a href="#"
                                    class="btn btn-outline hero-btn"
                                    onClick={()=> navigate('login')}>

                                    Find Work

                                </a>

                            </div>


                            {/* <!-- Statistics --> */}

                            <div class="stats">


                                <div class="stat">

                                    <strong>
                                        10K+
                                    </strong>

                                    <span>
                                        Freelancers
                                    </span>

                                </div>


                                <div class="stat">

                                    <strong>
                                        5K+
                                    </strong>

                                    <span>
                                        Projects Done
                                    </span>

                                </div>


                                <div class="stat">

                                    <strong>
                                        98%
                                    </strong>

                                    <span>
                                        Satisfaction
                                    </span>

                                </div>


                            </div>

                        </div>



                        {/* <!-- Right Logo --> */}

                        <div class="hero-visual">

                            <div class="hero-logo-card">

                                <img src={Logo} 
                                    alt="Freelance Hub" />

                            </div>

                        </div>

                    </div>

                </section>



                {/* <!-- =================================================
             WHY CHOOSE US
        ================================================== --> */}

                <section class="why-section" id="services">

                    <div class="section-heading">

                        <p class="eyebrow">
                            WHY CHOOSE US
                        </p>


                        <h2>

                            Everything you need to  {""}

                            <span>
                                freelance <br />
                                better.
                            </span>

                        </h2>

                    </div>



                    <div class="feature-grid">


                        {/* <!-- Card 1 --> */}

                        <article class="feature-card">

                            <div class="feature-icon">
                                ✓
                            </div>

                            <h3>
                                Trusted Platform
                            </h3>

                            <p>

                                Find verified freelancers and work through
                                a secure and reliable platform.

                            </p>

                        </article>



                        {/* <!-- Card 2 --> */}

                        <article class="feature-card">

                            <div class="feature-icon">
                                ϟ
                            </div>

                            <h3>
                                Save Time
                            </h3>

                            <p>

                                Find the right talent quickly and manage
                                your projects in one place.

                            </p>

                        </article>



                        {/* <!-- Card 3 --> */}

                        <article class="feature-card">

                            <div class="feature-icon">
                                ₹
                            </div>

                            <h3>
                                Secure Payments
                            </h3>

                            <p>

                                Make secure payments and manage transactions
                                easily through the platform.

                            </p>

                        </article>



                        {/* <!-- Card 4 --> */}

                        <article class="feature-card">

                            <div class="feature-icon">
                                ●
                            </div>

                            <h3>
                                Real-Time Chat
                            </h3>

                            <p>

                                Communicate with clients and freelancers
                                through real-time messaging.

                            </p>

                        </article>


                    </div>

                </section>



                {/* <!-- =================================================
             FREELANCER CATEGORIES
        ================================================== --> */}

                <section class="categories-section"
                    id="freelancers">


                    <div class="section-heading">

                        <p class="eyebrow">
                            EXPLORE TALENT
                        </p>


                        <h2>

                            Find the right {""}

                            <span>
                                freelancer
                            </span> {""}

                            for your project.

                        </h2>


                        <p class="section-description">

                            Choose from talented professionals across
                            the most in-demand digital skills.

                        </p>

                    </div>



                    <div class="category-grid">


                        {/* <!-- Web Developer --> */}

                        <article class="category-card">

                            <div class="category-icon">
                                &lt;/&gt;
                            </div>

                            <h3>
                                Web Developer
                            </h3>

                            <p>
                                Build modern and powerful websites.
                            </p>

                            <a href="#">
                                Explore Talent →
                            </a>

                        </article>



                        {/* <!-- UI UX --> */}

                        <article class="category-card">

                            <div class="category-icon">
                                UI
                            </div>

                            <h3>
                                UI/UX Designer
                            </h3>

                            <p>
                                Create clean and engaging user experiences.
                            </p>

                            <a href="#">
                                Explore Talent →
                            </a>

                        </article>



                        {/* <!-- Mobile --> */}

                        <article class="category-card">

                            <div class="category-icon">
                                M
                            </div>

                            <h3>
                                Mobile Developer
                            </h3>

                            <p>
                                Develop high-quality mobile applications.
                            </p>

                            <a href="#">
                                Explore Talent →
                            </a>

                        </article>



                        {/* <!-- Graphics --> */}

                        <article class="category-card">

                            <div class="category-icon">
                                ✦
                            </div>

                            <h3>
                                Graphics Designer
                            </h3>

                            <p>
                                Turn ideas into attractive visual designs.
                            </p>

                            <a href="#">
                                Explore Talent →
                            </a>

                        </article>



                        {/* <!-- Marketing --> */}

                        <article class="category-card">

                            <div class="category-icon">
                                ↗
                            </div>

                            <h3>
                                Digital Marketing
                            </h3>

                            <p>
                                Grow brands with smart digital strategies.
                            </p>

                            <a href="#">
                                Explore Talent →
                            </a>

                        </article>


                    </div>

                </section>



                {/* <!-- =================================================
             HOW IT WORKS
        ================================================== --> */}

                <section class="how-section"
                    id="how-it-works">


                    <div class="section-heading">

                        <p class="eyebrow">
                            HOW IT WORKS
                        </p>


                        <h2>

                            Simple steps.

                            <span>
                                Powerful results.
                            </span>

                        </h2>

                    </div>



                    <div class="steps">


                        {/* <!-- Step 1 --> */}

                        <div class="step">

                            <div class="step-number">
                                01
                            </div>

                            <h3>
                                Create an account
                            </h3>

                            <p>

                                Sign up as a client or freelancer and
                                create your profile.

                            </p>

                        </div>



                        {/* <!-- Step 2 --> */}

                        <div class="step">

                            <div class="step-number">
                                02
                            </div>

                            <h3>
                                Post or find work
                            </h3>

                            <p>

                                Clients can post projects while freelancers
                                can discover opportunities.

                            </p>

                        </div>



                        {/* <!-- Step 3 --> */}

                        <div class="step">

                            <div class="step-number">
                                03
                            </div>

                            <h3>
                                Connect & collaborate
                            </h3>

                            <p>

                                Chat, discuss requirements and work together
                                through the platform.

                            </p>

                        </div>



                        {/* <!-- Step 4 --> */}

                        <div class="step">

                            <div class="step-number">
                                04
                            </div>

                            <h3>
                                Complete the project
                            </h3>

                            <p>

                                Deliver quality work, complete the project
                                and build your reputation.

                            </p>

                        </div>


                    </div>

                </section>



                {/* <!-- =================================================
             CTA SECTION
        ================================================== --> */}

                <section class="cta-section"
                    id="about">


                    <div class="cta-container">


                        <div class="cta-content">

                            <p class="eyebrow">
                                FREELANCE HUB
                            </p>


                            <h2>
                                Ready to work freely?
                            </h2>


                            <p>

                                Join a growing community of clients
                                and freelancers today.

                            </p>

                        </div>



                        <div class="cta-buttons">

                            <a href="#"
                                class="btn btn-white">

                                Get Started

                            </a>


                            <a href="#freelancers"
                                class="btn btn-blue-outline">

                                Find Freelancers

                            </a>

                        </div>


                    </div>

                </section>


            </main>



            {/* <!-- =====================================================
         FOOTER
    ====================================================== --> */}

            <footer class="footer">


                <div class="footer-container">


                    {/* <!-- Footer Brand --> */}

                    <div class="footer-brand">

                        <img src={Logo}
                            alt="Freelance Hub Logo" />


                        <p>

                            Connect with skilled freelancers,
                            discover exciting opportunities,
                            manage projects and bring your ideas
                            to life with Freelance Hub.

                        </p>


                        {/* <!-- Social Icons --> */}

                        <div class="social-icons">

                            <a href="#">
                                f
                            </a>

                            <a href="#">
                                in
                            </a>

                            <a href="#">
                                X
                            </a>

                            <a href="#">
                                ◎
                            </a>

                        </div>

                    </div>



                    {/* <!-- Client Links --> */}

                    <div class="footer-column">

                        <h3>
                            For Clients
                        </h3>

                        <a href="#">
                            Find Freelancers
                        </a>

                        <a href="#">
                            Post a Project
                        </a>

                        <a href="#">
                            Manage Projects
                        </a>

                        <a href="#">
                            Secure Payments
                        </a>

                        <a href="#">
                            Client Dashboard
                        </a>

                    </div>



                    {/* <!-- Freelancer Links --> */}

                    <div class="footer-column">

                        <h3>
                            For Freelancers
                        </h3>

                        <a href="#">
                            Find Work
                        </a>

                        <a href="#">
                            Create Profile
                        </a>

                        <a href="#">
                            Browse Projects
                        </a>

                        <a href="#">
                            Freelancer Dashboard
                        </a>

                        <a href="#">
                            Manage Applications
                        </a>

                    </div>



                    {/* <!-- Company Links --> */}

                    <div class="footer-column">

                        <h3>
                            Company
                        </h3>

                        <a href="#home">
                            Home
                        </a>

                        <a href="#services">
                            Services
                        </a>

                        <a href="#how-it-works">
                            How It Works
                        </a>

                        <a href="#about">
                            About Us
                        </a>

                        <a href="#">
                            Contact Us
                        </a>

                    </div>



                    {/* <!-- Support --> */}

                    <div class="footer-column">

                        <h3>
                            Support
                        </h3>

                        <a href="#">
                            Help Center
                        </a>

                        <a href="#">
                            FAQs
                        </a>

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms & Conditions
                        </a>

                        <a href="#">
                            Support
                        </a>

                    </div>


                </div>



                {/* <!-- Footer Bottom --> */}

                <div class="footer-bottom">

                    <p>
                        © 2026 Freelance Hub. All rights reserved.
                    </p>


                    <div class="bottom-links">

                        <a href="#">
                            Privacy
                        </a>

                        <a href="#">
                            Terms
                        </a>

                        <a href="#">
                            Cookies
                        </a>

                    </div>

                </div>


            </footer>


        </div>
    )
}