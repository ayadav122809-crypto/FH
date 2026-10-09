export default function ClientProfile(){
    return(
        <div class="dashboard">

    {/* <!-- =====================================================
         SIDEBAR
    ====================================================== --> */}

   


    {/* <!-- =====================================================
         MAIN CONTENT
    ====================================================== --> */}

    <main class="main-content">


        {/* <!-- TOP HEADER --> */}

        <header class="top-header">

            <div class="header-title">

                <h1>My Profile</h1>

                <p>
                    Manage your client profile and hiring preferences.
                </p>

            </div>


            <div class="header-right">

                <div class="search-box">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <input
                        type="text"
                        placeholder="Search freelancers or projects..."
                    />

                </div>


                <div class="notification">

                    <i class="fa-regular fa-bell"></i>

                    <span class="notification-dot"></span>

                </div>

            </div>

        </header>



        {/* <!-- =====================================================
             CLIENT PROFILE HEADER
        ====================================================== --> */}

        <section class="profile-header-card">

            <div class="profile-main">

                <div class="profile-avatar">

                    <span>AY</span>

                    <div class="online-dot"></div>

                </div>


                <div class="profile-information">

                    <div class="name-row">

                        <h2>Ayush Yadav</h2>

                        <span class="verified-badge">

                            <i class="fa-solid fa-circle-check"></i>

                            Verified Client

                        </span>

                    </div>


                    <h3>Project Client</h3>


                    <p class="profile-intro">

                        Client looking for skilled freelancers to build
                        reliable digital products, websites and innovative
                        technology solutions.

                    </p>


                    <div class="profile-meta">

                        <span>

                            <i class="fa-solid fa-location-dot"></i>

                            Gujarat, India

                        </span>


                        <span>

                            <i class="fa-solid fa-clock"></i>

                            Available for hiring

                        </span>


                        <span>

                            <i class="fa-solid fa-language"></i>

                            English, Hindi

                        </span>

                    </div>

                </div>


                <button class="edit-profile-btn">

                    <i class="fa-solid fa-pen"></i>

                    Edit Profile

                </button>

            </div>

        </section>



        {/* <!-- =====================================================
             CLIENT STATISTICS
        ====================================================== --> */}

        <section class="profile-stats">


            {/* <!-- Projects Posted --> */}

            <div class="profile-stat-card">

                <div class="profile-stat-icon rating-icon">

                    <i class="fa-solid fa-folder-open"></i>

                </div>

                <div>

                    <span>PROJECTS POSTED</span>

                    <strong>18</strong>

                    <small>Projects posted</small>

                </div>

            </div>



            {/* <!-- Total Spent --> */}

            <div class="profile-stat-card">

                <div class="profile-stat-icon earnings-icon">

                    <i class="fa-solid fa-indian-rupee-sign"></i>

                </div>

                <div>

                    <span>TOTAL SPENT</span>

                    <strong>₹2.4L</strong>

                    <small>Total project spending</small>

                </div>

            </div>



            {/* <!-- Hiring Success --> */}

            <div class="profile-stat-card">

                <div class="profile-stat-icon success-icon">

                    <i class="fa-solid fa-chart-line"></i>

                </div>

                <div>

                    <span>HIRING SUCCESS</span>

                    <strong>94%</strong>

                    <small>Successful hiring</small>

                </div>

            </div>



            {/* <!-- Freelancers Hired --> */}

            <div class="profile-stat-card">

                <div class="profile-stat-icon project-icon">

                    <i class="fa-solid fa-users"></i>

                </div>

                <div>

                    <span>FREELANCERS HIRED</span>

                    <strong>16</strong>

                    <small>Professionals hired</small>

                </div>

            </div>

        </section>



        {/* <!-- =====================================================
             PROFILE BODY
        ====================================================== --> */}

        <section class="profile-body">


            {/* <!-- =================================================
                 LEFT COLUMN
            ================================================== --> */}

            <div class="profile-left">


                {/* <!-- ABOUT CLIENT --> */}

                <div class="profile-card about-card">

                    <div class="card-heading">

                        <h2>

                            <i class="fa-regular fa-user"></i>

                            About Me

                        </h2>

                    </div>


                    <p>

                        I am a project-focused client interested in working
                        with talented freelancers to develop modern and
                        reliable digital solutions.

                    </p>


                    <p>

                        I regularly work on web development, software and
                        design projects. I value clear communication,
                        quality work and timely project delivery.

                    </p>

                </div>



                {/* <!-- PROJECT CATEGORIES --> */}

                <div class="profile-card">

                    <div class="card-heading">

                        <h2>

                            <i class="fa-solid fa-layer-group"></i>

                            Project Categories

                        </h2>

                        <span class="card-label">
                            6 Categories
                        </span>

                    </div>


                    <div class="skill-list">

                        <span>Web Development</span>

                        <span>UI/UX Design</span>

                        <span>Mobile Apps</span>

                        <span>Graphic Design</span>

                        <span>Digital Marketing</span>

                        <span>Software Development</span>

                    </div>

                </div>



                {/* <!-- HIRING PREFERENCES --> */}

                <div class="profile-card">

                    <div class="card-heading">

                        <h2>

                            <i class="fa-solid fa-user-check"></i>

                            Hiring Preferences

                        </h2>

                    </div>


                    <div class="service-list">


                        <div class="service-item">

                            <i class="fa-solid fa-comments"></i>

                            <div>

                                <strong>Clear Communication</strong>

                                <span>
                                    Prefer regular project communication
                                </span>

                            </div>

                        </div>



                        <div class="service-item">

                            <i class="fa-solid fa-clock"></i>

                            <div>

                                <strong>Timely Delivery</strong>

                                <span>
                                    Focus on meeting project deadlines
                                </span>

                            </div>

                        </div>



                        <div class="service-item">

                            <i class="fa-solid fa-star"></i>

                            <div>

                                <strong>Quality Work</strong>

                                <span>
                                    Looking for skilled professionals
                                </span>

                            </div>

                        </div>


                    </div>

                </div>


            </div>



            {/* <!-- =================================================
                 RIGHT COLUMN
            ================================================== --> */}

            <div class="profile-right">


                {/* <!-- RECENT PROJECTS --> */}

                <div class="profile-card portfolio-card">

                    <div class="card-heading">

                        <div>

                            <h2>

                                <i class="fa-solid fa-briefcase"></i>

                                Recent Projects

                            </h2>

                            <p>
                                Projects posted recently
                            </p>

                        </div>


                        <a href="#" class="view-all">

                            View All

                            <i class="fa-solid fa-arrow-right"></i>

                        </a>

                    </div>



                    <div class="portfolio-grid">


                        {/* <!-- PROJECT 1 --> */}

                        <div class="portfolio-item">

                            <div class="portfolio-image">

                                <img
                                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
                                    alt="E-commerce Project"
                                />

                                <span class="portfolio-tag">
                                    Web Development
                                </span>

                            </div>


                            <div class="portfolio-content">

                                <h3>
                                    E-commerce Website
                                </h3>

                                <p>

                                    Looking for a freelancer to build
                                    a modern e-commerce platform with
                                    product management.

                                </p>


                                <div class="portfolio-tech">

                                    <span>React</span>

                                    <span>Node.js</span>

                                    <span>MongoDB</span>

                                </div>

                            </div>

                        </div>



                        {/* <!-- PROJECT 2 --> */}

                        <div class="portfolio-item">

                            <div class="portfolio-image">

                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                    alt="Dashboard Project"
                                />

                                <span class="portfolio-tag">
                                    Full Stack
                                </span>

                            </div>


                            <div class="portfolio-content">

                                <h3>
                                    Business Dashboard
                                </h3>

                                <p>

                                    Development of a responsive
                                    dashboard with analytics and
                                    business reporting features.

                                </p>


                                <div class="portfolio-tech">

                                    <span>JavaScript</span>

                                    <span>API</span>

                                    <span>Dashboard</span>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>



                {/* <!-- HIRING HISTORY --> */}

                <div class="profile-card experience-card">

                    <div class="card-heading">

                        <h2>

                            <i class="fa-solid fa-briefcase"></i>

                            Hiring History

                        </h2>

                    </div>


                    <div class="experience-item">

                        <div class="experience-icon">

                            <i class="fa-solid fa-user-tie"></i>

                        </div>


                        <div class="experience-content">

                            <h3>
                                Full Stack Web Developer
                            </h3>

                            <span class="company">
                                Freelance Project
                            </span>

                            <span class="experience-date">
                                Completed • 2026
                            </span>

                            <p>

                                Hired a freelancer to develop a complete
                                web application with frontend, backend
                                and database integration.

                            </p>

                        </div>

                    </div>

                </div>



                {/* <!-- FREELANCER REVIEW --> */}

                <div class="profile-card review-card">

                    <div class="card-heading">

                        <h2>

                            <i class="fa-regular fa-star"></i>

                            Recent Freelancer Review

                        </h2>

                    </div>


                    <div class="review-content">

                        <div class="review-user">

                            <div class="review-avatar">
                                RK
                            </div>


                            <div>

                                <strong>
                                    Rahul Kumar
                                </strong>

                                <span>
                                    Freelancer
                                </span>

                            </div>

                        </div>


                        <div class="review-rating">

                            <i class="fa-solid fa-star"></i>

                            <i class="fa-solid fa-star"></i>

                            <i class="fa-solid fa-star"></i>

                            <i class="fa-solid fa-star"></i>

                            <i class="fa-solid fa-star"></i>

                        </div>

                    </div>


                    <p class="review-text">

                        "Great client with clear requirements and
                        excellent communication. The project was
                        well organized and easy to work on."

                    </p>

                </div>



                {/* <!-- ACTIVE HIRING --> */}

                <div class="profile-card availability-card">

                    <div class="availability-content">

                        <div class="availability-icon">

                            <i class="fa-solid fa-user-plus"></i>

                        </div>


                        <div>

                            <h2>
                                Currently Hiring
                            </h2>

                            <p>

                                Open to working with skilled freelancers
                                for upcoming projects.

                            </p>

                        </div>


                        <span class="available-badge">
                            Hiring
                        </span>

                    </div>

                </div>


            </div>

        </section>


    </main>

</div>
    )
}