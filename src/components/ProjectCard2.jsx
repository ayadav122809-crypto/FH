import { NavLink, useNavigate } from "react-router-dom"

export default function ProjectCard2({freelancerName, category , name , budget, deadline,id}){

    const navigate = useNavigate();


    return(
           <div className="project-card">


                    <div className="project-top">


                        <div className="project-category">
                            {/* Web Development */}
                            {category}
                        </div>


                        <span className="project-status">
                            In Progress
                        </span>

                    </div>



                    <h3>
                        {/* E-commerce Website Development */}
                        {name}
                    </h3>


                    <p className="company-name">
                        {/* Freelancer: Rahul Sharma */}
                        {freelancerName}
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

                            <strong>
                                {budget}
                                </strong>

                        </div>


                        <div>

                            <span>Deadline</span>

                            <strong>
                                {/* 24 Sep 2026 */}
                                {deadline}
                                </strong>

                        </div>

                    </div>



                    <NavLink to={`/app/clientprojectdetails/${id}`}
                       className="project-btn">

                        View Project

                        <i className="fa-solid fa-arrow-right"></i>

                    </NavLink>

                </div>
    )
}