import { NavLink, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import { userContext } from "../context/UserContext";
import ProjectCard2 from "../components/ProjectCard2";


export default function ClientDashboard(){

    

    const navigate = useNavigate();
    

     const {user, projectdata } = useContext(userContext);

    const userProjects = projectdata.filter(pj=>pj?.client?._id==user?._id)
    console.log(userProjects);
    
     let totalSpent=0;
    for (const projects of projectdata) {
  totalSpent += projects.budget;
}



//      let totalSpent = 0;
//   if (projectdata) {
//     for (const project of projectdata) {
//       totalSpent += project.budget;
//     }
//   }

     console.log("user", user);
     console.log("projects", projectdata);

    //  console.log(user)

    return(

       <div class="dashboard">


    {/* <!-- =====================================================
         SIDEBAR
    ====================================================== --> */}

    



    {/* <!-- =====================================================
         MAIN CONTENT
    ====================================================== --> */}

    <main class="main-content">


        {/* <!-- =================================================
             HEADER
        ================================================== --> */}

        <header class="page-header">


            <div class="header-left">

                <h1>Dashboard</h1>

                <p>
                    Manage your projects, find freelancers and track your work.
                </p>

            </div>



            <div class="header-right">


                {/* <!-- SEARCH --> */}

                <div class="search-box">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <input type="text"
                           placeholder="Search projects or freelancers..."/>

                </div>



                {/* <!-- NOTIFICATION --> */}

                <div class="notification">

                    <i class="fa-regular fa-bell"></i>

                    <span class="notification-dot"></span>

                </div>

            </div>

        </header>



        {/* <!-- =================================================
             STAT CARDS
        ================================================== --> */}

        <section class="stats-grid">


            {/* <!-- POSTED PROJECTS --> */}

            <div class="stat-card">

                <div class="stat-icon blue">

                    <i class="fa-solid fa-folder-open"></i>

                </div>


                <div class="stat-info">

                    <span>Posted Projects</span>

                    <strong>{userProjects?.length}</strong>

                </div>

            </div>



            {/* <!-- ACTIVE PROJECTS --> */}

            <div class="stat-card">

                <div class="stat-icon green">

                    <i class="fa-solid fa-spinner"></i>

                </div>


                <div class="stat-info">

                    <span>Active Projects</span>

                    <strong>4</strong>
{/* {projectdata?.filter(p => p.status === "active").length} */}
                </div>

            </div>



            {/* <!-- COMPLETED PROJECTS --> */}

            <div class="stat-card">

                <div class="stat-icon purple">

                    <i class="fa-solid fa-circle-check"></i>

                </div>


                <div class="stat-info">

                    <span>Completed Projects</span>

                    <strong>5</strong>
                    {/* {projectdata?.filter(p => p.status === "completed").length} */}

                </div>

            </div>



            {/* <!-- TOTAL SPENT --> */}

            <div class="stat-card">

                <div class="stat-icon orange">

                    <i class="fa-solid fa-indian-rupee-sign"></i>

                </div>


                <div class="stat-info">

                    <span>Total Spent</span>

                    <strong>₹{totalSpent}</strong>

                </div>

            </div>

        </section>



        {/* <!-- =================================================
             POST NEW PROJECT
        ================================================== --> */}

        <section className="post-project-section">


            <div className="post-project-content">


                <div className="post-project-icon">

                    <i className="fa-solid fa-plus"></i>

                </div>



                <div className="post-project-text">

                    <h2>Post a New Project</h2>

                    <p>
                        Tell us what you need and connect with skilled freelancers who can bring your project to life.
                    </p>

                </div>

            </div>



            <NavLink to="/app/postprojects"
               className="post-project-btn">

                <i className="fa-solid fa-plus"></i>

                Post New Project

            </NavLink>

        </section>



        {/* <!-- =================================================
             ACTIVE PROJECTS
        ================================================== --> */}

        <section className="section-block">


            <div className="section-header">


                <div>

                    <h2>My Active Projects</h2>

                    <p>
                        Track the progress of your ongoing projects.
                    </p>

                </div>



                <NavLink to="/app/myprojects"
                   className="view-all">

                    View All

                    <i className="fa-solid fa-arrow-right"></i>

                </NavLink>

            </div>



            <div className="projects-grid">


                {/* <!-- =========================================
                     PROJECT 1
                ========================================== --> */}

                <div className="project-card">


                    <div className="project-top">


                        <div className="project-category">
                            Web Development
                        </div>


                        <span className="project-status">
                            In Progress
                        </span>

                    </div>



                    <h3>
                        E-commerce Website Development
                    </h3>


                    <p className="company-name">
                        Freelancer: Rahul Sharma
                    </p>



                    {/* <!-- PROGRESS --> */}

                    <div className="project-progress">


                        <div className="progress-header">

                            <span>Project Progress</span>

                            <strong>75%</strong>

                        </div>


                        <div className="progress-bar">

                            <div className="progress-fill"
                                 style={{"width": "75%"}}>
                            </div>

                        </div>

                    </div>



                    {/* <!-- DETAILS --> */}

                    <div className="project-details">


                        <div>

                            <span>Budget</span>

                            <strong>₹45,000</strong>

                        </div>


                        <div>

                            <span>Deadline</span>

                            <strong>24 Sep 2026</strong>

                        </div>

                    </div>



                    <NavLink to="/app/projectdetails/6abb38736e87500dca00281f"
                       className="project-btn">

                        View Project

                        <i className="fa-solid fa-arrow-right"></i>

                    </NavLink>

                </div>

                 {userProjects && userProjects.map((project) => (
                                            <ProjectCard2 freelancerName={project?.client?.username} category={project.category} name={project.name} budget={project.budget} deadline={project.deadline}  id={project._id}/>
                                        ))
                
                                        }
                




                {/* <!-- =========================================
                     PROJECT 2
                ========================================== --> */}

                <div className="project-card">


                    <div className="project-top">


                        <div className="project-category">
                            UI/UX Design
                        </div>


                        <span className="project-status">
                            In Progress
                        </span>

                    </div>



                    <h3>
                        Mobile App UI Redesign
                    </h3>


                    <p className="company-name">
                        Freelancer: Priya Patel
                    </p>



                    {/* <!-- PROGRESS --> */}

                    <div className="project-progress">


                        <div className="progress-header">

                            <span>Project Progress</span>

                            <strong>55%</strong>

                        </div>


                        <div className="progress-bar">

                            <div className="progress-fill"
                                 style={{"width": "55%"}}>
                            </div>

                        </div>

                    </div>



                    {/* <!-- DETAILS --> */}

                    <div className="project-details">


                        <div>

                            <span>Budget</span>

                            <strong>₹32,000</strong>

                        </div>


                        <div>

                            <span>Deadline</span>

                            <strong>30 Sep 2026</strong>

                        </div>

                    </div>



                    <NavLink to="/app/projectdetails"
                       className="project-btn">

                        View Project

                        <i className="fa-solid fa-arrow-right"></i>

                    </NavLink>

                </div>



                {/* <!-- =========================================
                     PROJECT 3
                ========================================== --> */}

                <div className="project-card">


                    <div className="project-top">


                        <div className="project-category">
                            API Development
                        </div>


                        <span className="project-status">
                            In Progress
                        </span>

                    </div>



                    <h3>
                        API Integration & Bug Fixing
                    </h3>


                    <p className="company-name">
                        Freelancer: Arjun Mehta
                    </p>



                    {/* <!-- PROGRESS --> */}

                    <div className="project-progress">


                        <div className="progress-header">

                            <span>Project Progress</span>

                            <strong>40%</strong>

                        </div>


                        <div className="progress-bar">

                            <div className="progress-fill"
                                 style={{'width': '40%'}}>
                            </div>

                        </div>

                    </div>



                    {/* <!-- DETAILS --> */}

                    <div className="project-details">


                        <div>

                            <span>Budget</span>

                            <strong>₹18,000</strong>

                        </div>


                        <div>

                            <span>Deadline</span>

                            <strong>05 Oct 2026</strong>

                        </div>

                    </div>



                    <NavLink to="/app/projectdetails"
                       className="project-btn">

                        View Project

                        <i className="fa-solid fa-arrow-right"></i>

                    </NavLink>

                </div>



                {/* <!-- =========================================
                     PROJECT 4
                ========================================== --> */}

                <div className="project-card">


                    <div className="project-top">


                        <div className="project-category">
                            Graphic Design
                        </div>


                        <span className="project-status">
                            In Progress
                        </span>

                    </div>



                    <h3>
                        Brand Identity & Logo Design
                    </h3>


                    <p className="company-name">
                        Freelancer: Neha Shah
                    </p>



                    {/* <!-- PROGRESS --> */}

                    <div className="project-progress">


                        <div className="progress-header">

                            <span>Project Progress</span>

                            <strong>30%</strong>

                        </div>


                        <div className="progress-bar">

                            <div className="progress-fill"
                                 style={{"width": "30%"}}>
                            </div>

                        </div>

                    </div>



                    {/* <!-- DETAILS --> */}

                    <div className="project-details">


                        <div>

                            <span>Budget</span>

                            <strong>₹22,000</strong>

                        </div>


                        <div>

                            <span>Deadline</span>

                            <strong>12 Oct 2026</strong>

                        </div>

                    </div>



                    <NavLink to="/app/projectdetails"
                       className="project-btn">

                        View Project

                        <i className="fa-solid fa-arrow-right"></i>

                    </NavLink>

                </div>

            </div>

        </section>



        {/* <!-- =================================================
             BOTTOM GRID
        ================================================== --> */}

        <section class="bottom-grid">


            {/* <!-- =================================================
                 RECENT COMPLETED PROJECTS
            ================================================== --> */}

            <div class="completed-section">


                <div class="section-header">


                    <div>

                        <h2>Recent Completed Projects</h2>

                        <p>
                            Your recently completed work.
                        </p>

                    </div>

                </div>



                <div class="completed-list">


                    {/* <!-- PROJECT --> */}

                    <div class="completed-item">


                        <div class="completed-icon">

                            <i class="fa-solid fa-check"></i>

                        </div>



                        <div class="completed-info">

                            <strong>
                                Portfolio Website Design
                            </strong>

                            <span>
                                Completed with Rahul Sharma
                            </span>

                        </div>



                        <div class="completed-amount">
                            ₹15,000
                        </div>

                    </div>



                    {/* <!-- PROJECT --> */}

                    <div class="completed-item">


                        <div class="completed-icon">

                            <i class="fa-solid fa-check"></i>

                        </div>



                        <div class="completed-info">

                            <strong>
                                Business Website
                            </strong>

                            <span>
                                Completed with Neha Shah
                            </span>

                        </div>



                        <div class="completed-amount">
                            ₹28,000
                        </div>

                    </div>



                    {/* <!-- PROJECT --> */}

                    <div class="completed-item">


                        <div class="completed-icon">

                            <i class="fa-solid fa-check"></i>

                        </div>



                        <div class="completed-info">

                            <strong>
                                Landing Page Design
                            </strong>

                            <span>
                                Completed with Arjun Mehta
                            </span>

                        </div>



                        <div class="completed-amount">
                            ₹12,000
                        </div>

                    </div>

                </div>

            </div>



            {/* <!-- =================================================
                 PROJECT ACTIVITY
            ================================================== --> */}

            <div class="activity-section">


                <div class="section-header">


                    <div>

                        <h2>Project Activity</h2>

                        <p>
                            Stay updated with the latest project activity.
                        </p>

                    </div>



                    <a href="messages.html"
                       class="view-all">

                        View All

                        <i class="fa-solid fa-arrow-right"></i>

                    </a>

                </div>



                <div class="activity-list">


                    {/* <!-- ACTIVITY 1 --> */}

                    <div class="activity-item">


                        <div class="activity-icon blue">

                            <i class="fa-solid fa-file-arrow-up"></i>

                        </div>



                        <div class="activity-info">

                            <strong>
                                New work submitted
                            </strong>

                            <span>
                                Rahul Sharma submitted the latest
                                website development files.
                            </span>

                            <small>
                                2 hours ago
                            </small>

                        </div>

                    </div>



                    {/* <!-- ACTIVITY 2 --> */}

                    <div class="activity-item">


                        <div class="activity-icon green">

                            <i class="fa-solid fa-circle-check"></i>

                        </div>



                        <div class="activity-info">

                            <strong>
                                Milestone completed
                            </strong>

                            <span>
                                Mobile App UI Redesign reached
                                the design approval stage.
                            </span>

                            <small>
                                Yesterday
                            </small>

                        </div>

                    </div>



                    {/* <!-- ACTIVITY 3 --> */}

                    <div class="activity-item">


                        <div class="activity-icon purple">

                            <i class="fa-solid fa-message"></i>

                        </div>



                        <div class="activity-info">

                            <strong>
                                New message received
                            </strong>

                            <span>
                                Arjun Mehta sent a message about
                                the API integration project.
                            </span>

                            <small>
                                2 days ago
                            </small>

                        </div>

                    </div>



                    {/* <!-- ACTIVITY 4 --> */}

                    <div class="activity-item">


                        <div class="activity-icon orange">

                            <i class="fa-solid fa-credit-card"></i>

                        </div>



                        <div class="activity-info">

                            <strong>
                                Payment completed
                            </strong>

                            <span>
                                ₹28,000 payment was completed for
                                the Business Website project.
                            </span>

                            <small>
                                4 days ago
                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </main>

</div>
    )
}