import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";
import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";

export default function FreelancerDashboard() {

    const navigate = useNavigate();
    const { projectdata } = useContext(userContext);
    console.log("projects", projectdata);

    const [progress, setProgress] = useState(90)


    return (
        //  class="dashboard"
        <div>

            {/* <!-- ================= SIDEBAR ================= --> */}




            {/* <!-- ================= MAIN CONTENT ================= --> */}

            <main class="main-content">


                {/* <!-- TOP HEADER --> */}

                <header class="top-header">

                    <div class="header-title">

                        <h1>Dashboard</h1>

                        <p>
                            Hello Ayush, welcome back to your workspace!
                        </p>

                    </div>


                    <div className="header-right">

                        {/* <!-- SEARCH --> */}

                        <div className="search-box">

                            <i className="fa-solid fa-magnifying-glass"></i>

                            <input
                                type="text"
                                placeholder="Search projects or clients..."
                            />

                        </div>


                        {/* <!-- NOTIFICATION --> */}

                        <div className="notification">

                            <i className="fa-regular fa-bell"></i>

                            <span className="notification-dot red-dot"></span>

                        </div>

                    </div>

                </header>



                {/* <!-- ================= STATISTICS ================= --> */}

                <section class="stats-section">


                    {/* <!-- OPEN PROJECTS --> */}

                    <div class="stat-card">

                        <div class="stat-content">

                            <p>OPEN PROJECTS</p>

                            <h2>2</h2>

                            <span class="stat-description">
                                Ready for proposals
                            </span>

                        </div>

                        <div class="stat-icon blue-icon">

                            <i class="fa-regular fa-folder-open"></i>

                        </div>

                    </div>


                    {/* <!-- IN PROGRESS --> */}

                    <div class="stat-card">

                        <div class="stat-content">

                            <p>IN PROGRESS</p>

                            <h2>2</h2>

                            <span class="stat-description">
                                Active projects
                            </span>

                        </div>

                        <div class="stat-icon orange-icon">

                            <i class="fa-regular fa-clock"></i>

                        </div>

                    </div>


                    {/* <!-- COMPLETED --> */}

                    <div class="stat-card">

                        <div class="stat-content">

                            <p>COMPLETED</p>

                            <h2>18</h2>

                            <span class="stat-description">
                                Successfully delivered
                            </span>

                        </div>

                        <div class="stat-icon green-icon">

                            <i class="fa-regular fa-circle-check"></i>

                        </div>

                    </div>


                    {/* <!-- ACTIVE CLIENTS --> */}

                    <div class="stat-card">

                        <div class="stat-content">

                            <p>ACTIVE CLIENTS</p>

                            <h2>4</h2>

                            <span class="stat-description">
                                Verified clients
                            </span>

                        </div>

                        <div class="stat-icon purple-icon">

                            <i class="fa-solid fa-users"></i>

                        </div>

                    </div>

                </section>



                {/* <!-- ================= NEW PROJECTS ================= --> */}

                <section class="project-section">

                    <div class="section-header">

                        <div>

                            <h2>
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                                New Projects Arrived
                            </h2>

                            <p>
                                Projects matched with your skills
                            </p>

                        </div>

                        <span class="section-badge">
                            2 Invitations
                        </span>

                    </div>


                    <div class="project-grid">


                        {/* <!-- PROJECT 1 --> */}

                        {/* <div class="project-card new-project">

                    <div class="project-top">

                        <span class="client-name">
                            TechStore India
                        </span>

                        <span class="project-status urgent">
                            Urgent
                        </span>

                    </div>


                    <h3>
                        E-commerce Website Development
                    </h3>


                    <p class="project-description">
                        Build a responsive React-based storefront
                        with shopping cart and dynamic Stripe integration.
                    </p>


                    <div class="skills">

                        <span>React</span>
                        <span>Node.js</span>
                        <span>Stripe</span>

                    </div>


                    <div class="project-divider"></div>


                    <div class="project-bottom">

                        <div>

                            <span class="price-label">
                                FIXED PRICE
                            </span>

                            <strong>
                                ₹45,000
                            </strong>

                        </div>


                        <div class="action-buttons">

                       <span onClick={() => navigate('/app/projectdetails')} class="new1">  <button class="apply-btn">
                             Apply
                         <i class="fa-solid fa-arrow-right"></i>
                         </button>
                         </span>

                         </div>

                    </div>

                </div> */}

                        {projectdata && projectdata.map((project) => (
                            <ProjectCard clientName={project?.client?.username} name={project.name} description={project.description} skills={project.skills} budget={project.budget} id={project._id} />
                        ))

                        }





                        {/* <!-- PROJECT 2 --> */}

                        <div class="project-card new-project">

                            <div class="project-top">

                                <span class="client-name">
                                    Aesthetic Studio
                                </span>

                                <span class="project-status match">
                                    New Match
                                </span>

                            </div>


                            <h3>
                                Mobile App UI Redesign
                            </h3>


                            <p class="project-description">
                                Redesign the layout, animations, and icons
                                for a fitness tracking application on iOS and Android.
                            </p>


                            <div class="skills">

                                <span>Figma</span>
                                <span>UI/UX</span>
                                <span>Wireframing</span>

                            </div>


                            <div class="project-divider"></div>


                            <div class="project-bottom">

                                <div>

                                    <span class="price-label">
                                        HOURLY RATE
                                    </span>

                                    <strong>
                                        ₹1,500/hr
                                    </strong>

                                </div>


                                <div class="action-buttons">

                                    <a href="#" class="new1"><button class="apply-btn">
                                        Apply
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>



                {/* <!-- ================= ONGOING PROJECTS ================= --> */}

                <section class="project-section">

                    <div class="section-header">

                        <div>

                            <h2>
                                Ongoing Projects
                            </h2>

                            <p>
                                Track your active projects and deadlines
                            </p>

                        </div>

                        <span class="section-badge orange-badge" onClick={() => navigate('/app/projectdetail')}>
                            Active Development
                        </span>

                    </div>


                    <div class="project-grid">


                        {/* <!-- ONGOING PROJECT 1 --> */}

                        <div class="project-card ongoing-project">

                            <div class="project-top">

                                <span class="client-name">
                                    Creative Minds Inc.
                                </span>

                                <span class="project-status due">
                                    Due in 3 days
                                </span>

                            </div>


                            <h3>
                                Portfolio Website Design
                            </h3>


                            <div class="progress-area">

                                <div class="progress-title">

                                    <span>Task Progress</span>

                                    <span>{progress}%</span>

                                </div>

                                <div class="progress-bar">

                                    <div
                                        class="progress-fill"
                                        style={{ "width": `${progress}%` }}>
                                    </div>

                                </div>

                            </div>


                            <div class="project-divider"></div>


                            <div class="ongoing-bottom">

                                <div>

                                    <span class="price-label">
                                        REMAINING BUDGET
                                    </span>

                                    <strong>
                                        ₹15,000
                                    </strong>

                                </div>


                                <NavLink> <button class="details-btn" >
                                    View Details
                                    <i class="fa-solid fa-arrow-right"></i>
                                </button>
                                </NavLink>

                            </div>

                        </div>



                        {/* <!-- ONGOING PROJECT 2 --> */}

                        <div class="project-card ongoing-project">

                            <div class="project-top">

                                <span class="client-name">
                                    Global Logistics
                                </span>

                                <span class="project-status due">
                                    Due in 8 days
                                </span>

                            </div>


                            <h3>
                                API Integration & Bug Fixing
                            </h3>


                            <div class="progress-area">

                                <div class="progress-title">

                                    <span>Task Progress</span>

                                    <span>40%</span>

                                </div>

                                <div class="progress-bar">

                                    <div
                                        class="progress-fill"
                                        style={{ "width": "40%" }}>
                                    </div>

                                </div>

                            </div>


                            <div class="project-divider"></div>


                            <div class="ongoing-bottom">

                                <div>

                                    <span class="price-label">
                                        REMAINING BUDGET
                                    </span>

                                    <strong>
                                        ₹30,000
                                    </strong>

                                </div>


                                <NavLink>
                                     <button class="details-btn" onClick={() => navigate('/app/ongoingprojects')}>
                                    View Details
                                    <i class="fa-solid fa-arrow-right"></i>
                                </button>
                                </NavLink>

                            </div>

                        </div>

                    </div>

                </section>



                {/* <!-- ================= BOTTOM SECTION ================= --> */}

                <section class="bottom-grid">


                    {/* <!-- COMPLETED PROJECTS --> */}

                    <div class="bottom-card completed-card">

                        <div class="bottom-card-header">

                            <h2>
                                Completed Projects
                            </h2>

                            <span class="green-badge">
                                History
                            </span>

                        </div>


                        <div class="completed-list">


                            <div class="completed-item">

                                <div class="completed-icon">

                                    <i class="fa-solid fa-check"></i>

                                </div>

                                <div class="completed-info">

                                    <h4>
                                        Blog Platform Setup
                                    </h4>

                                    <p>
                                        Completed: Aug 24, 2026 • Client: Medium Inc
                                    </p>

                                </div>

                                <div class="completed-price">

                                    <strong>
                                        ₹20,000
                                    </strong>

                                    <span>
                                        5.0 <i class="fa-solid fa-star"></i>
                                    </span>

                                </div>

                            </div>



                            <div class="completed-item">

                                <div class="completed-icon">

                                    <i class="fa-solid fa-check"></i>

                                </div>

                                <div class="completed-info">

                                    <h4>
                                        SEO Optimization Campaign
                                    </h4>

                                    <p>
                                        Completed: Aug 18, 2026 • Client: RankBoost
                                    </p>

                                </div>

                                <div class="completed-price">

                                    <strong>
                                        ₹8,000
                                    </strong>

                                    <span>
                                        4.8 <i class="fa-solid fa-star"></i>
                                    </span>

                                </div>

                            </div>



                            <div class="completed-item">

                                <div class="completed-icon">

                                    <i class="fa-solid fa-check"></i>

                                </div>

                                <div class="completed-info">

                                    <h4>
                                        Brand Landing Page Design
                                    </h4>

                                    <p>
                                        Completed: Aug 05, 2026 • Client: Aura Cosmetics
                                    </p>

                                </div>

                                <div class="completed-price">

                                    <strong>
                                        ₹12,000
                                    </strong>

                                    <span>
                                        5.0 <i class="fa-solid fa-star"></i>
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* <!-- EXPLORE PROJECTS --> */}

                    <div class="bottom-card explore-card">

                        <div class="bottom-card-header">

                            <h2>
                                Explore Projects
                            </h2>

                            <span class="green-badge">
                                Recommended
                            </span>

                        </div>


                        <div class="explore-list">


                            <div class="explore-item">

                                <div class="explore-icon">

                                    <i class="fa-brands fa-python"></i>

                                </div>

                                <div class="explore-info">

                                    <h4>
                                        Python Web Scraper Tool
                                    </h4>

                                    <p>
                                        Required: Python, BeautifulSoup
                                    </p>

                                </div>

                                <div class="explore-action">

                                    <strong>
                                        ₹10,000
                                    </strong>

                                    <button>
                                        Apply
                                    </button>

                                </div>

                            </div>



                            <div class="explore-item">

                                <div class="explore-icon">

                                    <i class="fa-brands fa-wordpress"></i>

                                </div>

                                <div class="explore-info">

                                    <h4>
                                        WordPress Setup & Customization
                                    </h4>

                                    <p>
                                        Required: WordPress, Elementor
                                    </p>

                                </div>

                                <div class="explore-action">

                                    <strong>
                                        ₹5,000
                                    </strong>

                                    <button>
                                        Apply
                                    </button>

                                </div>

                            </div>



                            <div class="explore-item">

                                <div class="explore-icon">

                                    <i class="fa-solid fa-pen-nib"></i>

                                </div>

                                <div class="explore-info">

                                    <h4>
                                        SaaS Product Logo Design
                                    </h4>

                                    <p>
                                        Required: Illustrator, Branding
                                    </p>

                                </div>

                                <div class="explore-action">

                                    <strong>
                                        ₹7,500
                                    </strong>

                                    <button>
                                        Apply
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

        </div>
    )
}