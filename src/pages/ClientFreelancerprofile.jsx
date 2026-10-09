import { NavLink, useNavigate } from "react-router-dom"

export default function ClientFreelancerprofile(){


    const navigate=useNavigate();

      <div class="freelancer-profile-page">

    {/* <!-- =====================================================
         SIDEBAR
    ====================================================== --> */}

   


    {/* <!-- =====================================================
         MAIN CONTENT
    ====================================================== --> */}

    <main class="main-content">


        {/* <!-- HEADER --> */}

        <header class="page-header">

            <div class="header-left">

                <h1>Freelancer Profile</h1>

                <p>
                    View freelancer experience, skills and portfolio.
                </p>

            </div>


            <div class="header-right">

                <div class="search-box">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <input
                        type="text"
                        placeholder="Search freelancers or skills..."
                    />

                </div>


                <div class="notification">

                    <i class="fa-regular fa-bell"></i>

                </div>

            </div>

        </header>


        {/* <!-- PROFILE INTRO --> */}

        <section class="profile-header-card">

            <div class="profile-avatar">
                RS
            </div>


            <div class="profile-main">

                <div class="profile-name-row">

                    <h2>Rahul Sharma</h2>

                    <i class="fa-solid fa-circle-check verified"></i>

                    <span class="verified-text">
                        Verified Freelancer
                    </span>

                </div>


                <h3>
                    Full Stack Developer
                </h3>


                <div class="profile-details">

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        Gujarat, India
                    </span>

                    <span>
                        <i class="fa-solid fa-briefcase"></i>
                        5+ Years Experience
                    </span>

                    <span>
                        <i class="fa-solid fa-language"></i>
                        English, Hindi
                    </span>

                </div>


                <div class="availability">

                    <span class="availability-dot"></span>

                    Available for new projects

                </div>

            </div>


            {/* <!-- PROFILE ACTIONS --> */}

            <div class="profile-action">

                <div class="budget-box">

                    <span>Fixed Budget</span>

                    <strong>₹45,000</strong>

                </div>


                <div class="profile-buttons">

                    <a href="messages.html"
                       class="message-button">

                        <i class="fa-regular fa-comment"></i>

                        Message Freelancer

                    </a>


                    <a href="hire-freelancer.html"
                       class="hire-button">

                        <i class="fa-solid fa-briefcase"></i>

                        Hire Freelancer

                    </a>

                </div>

            </div>

        </section>


        {/* <!-- STATS --> */}

        <section class="profile-stats">

            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-star"></i>
                </div>

                <div>

                    <span>Rating</span>

                    <strong>4.9 / 5</strong>

                    <small>38 reviews</small>

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-check"></i>
                </div>

                <div>

                    <span>Job Success</span>

                    <strong>98%</strong>

                    <small>Excellent record</small>

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-folder-open"></i>
                </div>

                <div>

                    <span>Completed Projects</span>

                    <strong>24</strong>

                    <small>Successfully completed</small>

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fa-solid fa-clock"></i>
                </div>

                <div>

                    <span>Response Time</span>

                    <strong>2 Hours</strong>

                    <small>Usually responds quickly</small>

                </div>

            </div>

        </section>


        {/* <!-- PROFILE CONTENT --> */}

        <section class="profile-layout">


            {/* <!-- LEFT CONTENT --> */}

            <div class="profile-content">


                {/* <!-- ABOUT --> */}

                <div class="content-card">

                    <div class="card-title">

                        <i class="fa-regular fa-user"></i>

                        <h3>About Freelancer</h3>

                    </div>


                    <p class="about-text">

                        I am a Full Stack Developer specializing in modern
                        web applications and scalable digital solutions.
                        I work primarily with the MERN stack and have
                        experience building complete web applications
                        from frontend interfaces to backend APIs and
                        database integration.

                    </p>


                    <p class="about-text">

                        I focus on writing clean, maintainable code and
                        creating reliable applications that provide a
                        smooth user experience. I have worked with
                        startups and businesses on e-commerce platforms,
                        business websites, dashboards and custom web
                        applications.

                    </p>

                </div>


                {/* <!-- SKILLS --> */}

                <div class="content-card">

                    <div class="card-title">

                        <i class="fa-solid fa-code"></i>

                        <h3>Skills & Expertise</h3>

                    </div>


                    <div class="skill-list">

                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                        <span>REST API</span>
                        <span>Git & GitHub</span>
                        <span>Responsive Web Design</span>

                    </div>

                </div>


                {/* <!-- PORTFOLIO --> */}

                <div class="content-card">

                    <div class="card-heading-row">

                        <div class="card-title">

                            <i class="fa-solid fa-briefcase"></i>

                            <h3>Portfolio</h3>

                        </div>

                        <span class="project-count">
                            4 Projects
                        </span>

                    </div>


                    <div class="portfolio-grid">


                        <div class="portfolio-card">

                            <div class="portfolio-icon">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>

                            <div class="portfolio-content">

                                <h4>E-commerce Website</h4>

                                <p>
                                    Complete online shopping platform
                                    with product management, cart,
                                    checkout and admin dashboard.
                                </p>

                                <div class="portfolio-tech">

                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>MongoDB</span>

                                </div>

                                <a href="#"
                                   class="portfolio-link">

                                    View Portfolio

                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                                </a>

                            </div>

                        </div>


                        <div class="portfolio-card">

                            <div class="portfolio-icon">
                                <i class="fa-solid fa-chart-column"></i>
                            </div>

                            <div class="portfolio-content">

                                <h4>Business Dashboard</h4>

                                <p>
                                    Interactive dashboard for tracking
                                    business performance, users and
                                    financial data.
                                </p>

                                <div class="portfolio-tech">

                                    <span>React.js</span>
                                    <span>JavaScript</span>
                                    <span>REST API</span>

                                </div>

                                <a href="#"
                                   class="portfolio-link">

                                    View Portfolio

                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                                </a>

                            </div>

                        </div>


                        <div class="portfolio-card">

                            <div class="portfolio-icon">
                                <i class="fa-solid fa-building"></i>
                            </div>

                            <div class="portfolio-content">

                                <h4>Corporate Website</h4>

                                <p>
                                    Professional business website
                                    designed for a growing technology
                                    company.
                                </p>

                                <div class="portfolio-tech">

                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>JavaScript</span>

                                </div>

                                <a href="#"
                                   class="portfolio-link">

                                    View Portfolio

                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                                </a>

                            </div>

                        </div>


                        <div class="portfolio-card">

                            <div class="portfolio-icon">
                                <i class="fa-solid fa-mobile-screen-button"></i>
                            </div>

                            <div class="portfolio-content">

                                <h4>Task Management App</h4>

                                <p>
                                    Full stack task management
                                    application with user authentication
                                    and project tracking.
                                </p>

                                <div class="portfolio-tech">

                                    <span>React.js</span>
                                    <span>Express.js</span>
                                    <span>MongoDB</span>

                                </div>

                                <a href="#"
                                   class="portfolio-link">

                                    View Portfolio

                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* <!-- SERVICES --> */}

                <div class="content-card">

                    <div class="card-title">

                        <i class="fa-solid fa-layer-group"></i>

                        <h3>Services Offered</h3>

                    </div>


                    <div class="services-list">

                        <div class="service-item">

                            <i class="fa-solid fa-code"></i>

                            <div>

                                <strong>
                                    Full Stack Web Development
                                </strong>

                                <span>
                                    Complete frontend and backend
                                    web application development.
                                </span>

                            </div>

                        </div>


                        <div class="service-item">

                            <i class="fa-solid fa-cart-shopping"></i>

                            <div>

                                <strong>
                                    E-commerce Development
                                </strong>

                                <span>
                                    Custom online stores with
                                    product and order management.
                                </span>

                            </div>

                        </div>


                        <div class="service-item">

                            <i class="fa-solid fa-plug"></i>

                            <div>

                                <strong>
                                    API Development & Integration
                                </strong>

                                <span>
                                    REST APIs and third-party
                                    service integration.
                                </span>

                            </div>

                        </div>


                        <div class="service-item">

                            <i class="fa-solid fa-screwdriver-wrench"></i>

                            <div>

                                <strong>
                                    Website Maintenance
                                </strong>

                                <span>
                                    Bug fixing, improvements and
                                    ongoing technical support.
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* <!-- RIGHT SIDEBAR --> */}

            <aside class="profile-sidebar">


                {/* <!-- HIRE CARD --> */}

                <div class="side-card hire-card">

                    <h3>
                        Hire Rahul Sharma
                    </h3>

                    <p>
                        Discuss your project requirements or
                        directly send a hiring request to this
                        freelancer.
                    </p>

                    <div class="hire-budget">

                        <span>Typical Project Budget</span>

                        <strong>₹45,000</strong>

                        <small>Fixed Price</small>

                    </div>


                    <div class="hire-actions">

                        <a href="messages.html"
                           class="side-message-btn">

                            <i class="fa-regular fa-comment"></i>

                            Message Freelancer

                        </a>


                        <a href="hire-freelancer.html"
                           class="hire-full-btn">

                            <i class="fa-solid fa-briefcase"></i>

                            Hire Freelancer

                        </a>

                    </div>

                </div>


                {/* <!-- PROJECT DETAILS --> */}

                <div class="side-card">

                    <h3>
                        Freelancer Details
                    </h3>

                    <div class="detail-row">

                        <span>Experience</span>

                        <strong>5+ Years</strong>

                    </div>

                    <div class="detail-row">

                        <span>Projects Completed</span>

                        <strong>24</strong>

                    </div>

                    <div class="detail-row">

                        <span>Job Success</span>

                        <strong>98%</strong>

                    </div>

                    <div class="detail-row">

                        <span>Languages</span>

                        <strong>English, Hindi</strong>

                    </div>

                    <div class="detail-row">

                        <span>Location</span>

                        <strong>Gujarat, India</strong>

                    </div>

                </div>


                {/* <!-- SPECIALIZATION --> */}

                <div class="side-card">

                    <h3>
                        Specialization
                    </h3>

                    <div class="specialization-list">

                        <span>Web Development</span>
                        <span>MERN Stack</span>
                        <span>E-commerce</span>
                        <span>API Development</span>
                        <span>Database Development</span>

                    </div>

                </div>


                {/* <!-- AVAILABILITY --> */}

                <div class="side-card availability-card">

                    <div class="availability-title">

                        <i class="fa-solid fa-circle-check"></i>

                        <strong>
                            Available for Work
                        </strong>

                    </div>

                    <p>
                        Rahul is currently accepting new
                        projects and client inquiries.
                    </p>

                </div>

            </aside>

        </section>

    </main>

</div>
}