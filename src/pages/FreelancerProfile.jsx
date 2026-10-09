import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FreelancerProfile() {

    const [user, setUser] = useState({});


    const navigate = useNavigate();

    useEffect(() => {
        let userid = localStorage.getItem("userid");

        // fetch(`http://localhost:4000/users/${userid}`)
        fetch(`http://localhost:4000/user/auth`,{
            headers:{Authorization:`Bearer ${userid}`}
        })
        .then(res => res.json())
        .then(data => {setUser(data.decode.u);
             console.log(data.decode.u);
        })
        .catch(err => console.log(err)
        )


    }, [])

    return (
        user ? <main className="main-content freelancer-myprofile-page">
            {/* TOP HEADER */}
            <header className="top-header">
                <div className="header-left">
                    <h1>My Profile</h1>
                    <p>Manage your professional profile and showcase your work.</p>
                </div>

                <div className="header-right">
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search projects or clients..."
                        />
                    </div>

                    <div className="notification">
                        <i className="fa-regular fa-bell"></i>
                        <span className="notification-dot red-dot"></span>
                    </div>
                </div>
            </header>

            {/* PROFILE HEADER CARD */}
            <section className="profile-header-card">
                <div className="profile-main">
                    <div className="profile-avatar">
                        <span>{user?.username?.slice(0,1)}</span>
                        {/* <span>{user?.username?.split(" ")[0][0]}{user?.username?.split(" ")[1][0]}</span> */}
                        <span className="online-dot"></span>
                    </div>
        
                    <div className="profile-information">
                        <div className="name-row">
                            <h2>{user.username}</h2>
                            <span className="verified-badge">
                                <i className="fa-solid fa-circle-check"></i>
                                Verified Freelancer
                            </span>
                        </div>

                        <h3>{user?.role && user.role !== 'freelancer' ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} • Full Stack Developer` : "Full Stack Developer"}</h3>

                        <p className="profile-intro">
                            {user.description}
                            Full Stack Developer specializing in modern web applications, MERN stack development and scalable digital solutions.
                        </p>

                        <div className="profile-meta">
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                                Gujarat, India
                            </span>
                            <span>
                                <i className="fa-regular fa-clock"></i>
                                Available for work
                            </span>
                            <span>
                                <i className="fa-solid fa-language"></i>
                                English, Hindi
                            </span>
                        </div>
                    </div>

                    <Link to="/app/editprofile" className="edit-profile-btn">
                        <i className="fa-solid fa-pen"></i>
                        Edit Profile
                    </Link>
                </div>
            </section>

            {/* PROFILE STATISTICS */}
            <section className="profile-stats">
                <div className="profile-stat-card">
                    <div className="profile-stat-icon rating-icon">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div>
                        <span>RATING</span>
                        <strong>4.9 / 5</strong>
                        <small>Based on 38 reviews</small>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <div className="profile-stat-icon earnings-icon">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                    </div>
                    <div>
                        <span>Fixed RATE</span>
                        <strong>₹45,000</strong>
                        <small>Negotiable based on project</small>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <div className="profile-stat-icon success-icon">
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div>
                        <span>JOB SUCCESS</span>
                        <strong>98%</strong>
                        <small>Excellent performance</small>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <div className="profile-stat-icon project-icon">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div>
                        <span>PROJECTS</span>
                        <strong>24</strong>
                        <small>Projects completed</small>
                    </div>
                </div>
            </section>

            {/* PROFILE BODY */}
            <section className="profile-body">
                {/* LEFT COLUMN */}
                <div className="profile-left">
                    {/* ABOUT */}
                    <div className="profile-card about-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-regular fa-user"></i>
                                About Me
                            </h2>
                        </div>
                        <p>
                            I am a passionate Full Stack Developer focused on building
                            clean, reliable and user friendly web applications. I work
                            primarily with JavaScript technologies and enjoy converting
                            ideas into complete digital products.
                        </p>
                        <p>
                            My experience includes frontend development, backend APIs,
                            database integration and creating modern web interfaces. I focus
                            on writing maintainable code and delivering projects according to
                            client requirements.
                        </p>
                    </div>

                    {/* VERIFIED SKILLS */}
                    <div className="profile-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-solid fa-layer-group"></i>
                                Verified Skills
                            </h2>
                            <span className="card-label">8 Skills</span>
                        </div>
                        <div className="skill-list">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>REST API</span>
                        </div>
                    </div>

                    {/* SERVICES I OFFER */}
                    <div className="profile-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-solid fa-code"></i>
                                Services I Offer
                            </h2>
                        </div>
                        <div className="service-list">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa-solid fa-globe"></i>
                                </div>
                                <div>
                                    <strong>Web Development</strong>
                                    <span>Modern and functional websites</span>
                                </div>
                            </div>

                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa-solid fa-laptop-code"></i>
                                </div>
                                <div>
                                    <strong>Full Stack Development</strong>
                                    <span>Complete frontend and backend solutions</span>
                                </div>
                            </div>

                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa-solid fa-database"></i>
                                </div>
                                <div>
                                    <strong>API & Database Development</strong>
                                    <span>Secure APIs and database integration</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="profile-right">
                    {/* PORTFOLIO & HIGHLIGHTS */}
                    <div className="profile-card portfolio-card">
                        <div className="card-heading">
                            <div>
                                <h2>
                                    <i className="fa-solid fa-briefcase"></i>
                                    Portfolio & Highlights
                                </h2>
                                <p>Selected work from recent projects</p>
                            </div>
                            <Link to="/app/myprojects" className="view-all">
                                View All
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>

                        <div className="portfolio-grid">
                            {/* PROJECT 1 */}
                            <div className="portfolio-item">
                                <div className="portfolio-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                                        alt="Analytics Dashboard"
                                    />
                                </div>
                                <div className="portfolio-content">
                                    <h3>Analytics Dashboard</h3>
                                    <p>
                                        React-based analytics dashboard with interactive charts and data visualization.
                                    </p>
                                    <div className="portfolio-tech">
                                        <span>React</span>
                                        <span>JavaScript</span>
                                        <span>API</span>
                                    </div>
                                </div>
                            </div>

                            {/* PROJECT 2 */}
                            <div className="portfolio-item">
                                <div className="portfolio-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
                                        alt="UI/UX Web Application"
                                    />
                                </div>
                                <div className="portfolio-content">
                                    <h3>UI/UX Web Application</h3>
                                    <p>
                                        Modern responsive web application UI design with component library and modular widgets.
                                    </p>
                                    <div className="portfolio-tech">
                                        <span>React</span>
                                        <span>Figma</span>
                                        <span>CSS3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WORK EXPERIENCE */}
                    <div className="profile-card experience-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-solid fa-briefcase"></i>
                                Work Experience
                            </h2>
                        </div>
                        <div className="experience-item">
                            <div className="experience-icon">
                                <i className="fa-solid fa-code"></i>
                            </div>
                            <div className="experience-content">
                                <h3>Full Stack Developer</h3>
                                <span className="company">Freelance • Remote</span>
                                <span className="experience-date">2022 - Present</span>
                                <p>
                                    Developed web applications, REST APIs and database driven platforms for different business requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RECENT CLIENT REVIEW */}
                    <div className="profile-card review-card">
                        <div className="card-heading">
                            <h2>
                                <i className="fa-regular fa-star"></i>
                                Recent Client Review
                            </h2>
                        </div>
                        <div className="review-content">
                            <div className="review-user">
                                <div className="review-avatar">RS</div>
                                <div>
                                    <strong>Rahul Sharma</strong>
                                    <span>Project Client</span>
                                </div>
                            </div>
                            <div className="review-rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p className="review-text">
                            'Excellent communication and very clean work. The project was delivered on time and exactly according to our requirements.'
                        </p>
                    </div>

                    {/* AVAILABLE FOR NEW PROJECTS */}
                    <div className="profile-card availability-card">
                        <div className="availability-content">
                            <div className="availability-icon">
                                <i className="fa-regular fa-calendar-check"></i>
                            </div>
                            <div>
                                <h2>Available for New Projects</h2>
                                <p>
                                    Currently accepting new freelance opportunities and long term collaborations.
                                </p>
                            </div>
                            <span className="available-badge">Available</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>:<div>loding...</div>
    );
}