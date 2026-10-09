import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getAdminProjects, updateAdminProject, saveAdminProjects } from "./adminData";

export default function EditProjects() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isNew = id === "new";

    const [formData, setFormData] = useState({
        title: "",
        client: "",

        // companyname: "",

        // companyemail: "",

        freelancername: "",

        projecttype: "",



        description: "",
        projectobjective: "",
        budget: 0,
        deadline: "",
        proposals: [],

        expecteddeliverables: [],
        requiredskills: [],
        dataRequest: "",
        profileImg: "myimg.png",
    });

    //  title: "",
    //     category: "Website Development",
    //     clientName: "",
    //     clientEmail: "",
    //     freelancerName: "Ayush Yadav",
    //     budget: "₹30,000",
    //     rawBudget: 30000,
    //     status: "In Progress",
    //     postedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    //     deadline: "",
    //     description: "",
    //     skills: "React, JavaScript"

    const [savedSuccess, setSavedSuccess] = useState(false);

    useEffect(() => {
        if (!isNew && id) {
            const projects = getAdminProjects();
            const existing = projects.find((p) => p.id === Number(id));
            if (existing) {
                setFormData(existing);
            }
        }
    }, [id, isNew]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            let updated;
            if(name=="proposals"){
                 
                updated={...prev, [prev.proposals[0]]:value}
            }else{

                updated = { ...prev, [name]: value };
            }
             if(name=="expecteddeliverables"){
                updated={...prev,[prev.expecteddeliverables[0]]:value}
            }else{

                updated = { ...prev, [name]: value };
            }
             if(name=="requiredskills"){
                updated={...prev,[prev.requiredskills[0]]:value}
            }else{

                updated = { ...prev, [name]: value };
            }
            

            // if (name === "budget") {
            //     const numeric = parseInt(value.replace(/[^0-9]/g, "")) || 0;
            //     updated.rawBudget = numeric;
            // }
            return updated;
        });
    };


    

    

    const handleSubmit = async (e) => {
        e.preventDefault();


        const res = await fetch('http://localhost:4000/user/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData
                // title:"demo",
                // client:{_id:'6aae4d0b12057ee83bbd143b'},

                // companyname:"Microsoft",

                // companyemail:"business@gmail.com",

                // freelancername:"Ayush" ,

                // projecttype:"Mern" ,



                // description:"abc",
                // projectobjective:"abc",
                // budget:45000,
                // deadline:"15 Aug",
                // proposals:["test"],

                // expecteddeliverables:["12"],
                // requiredSkills:["Node js"],
                // dataRequest:"12",
                // profileImg:"img.png",
            )

        })

        let data = res.json()

        if (res) {
            console.log(res);

        }





        // if (isNew) {
        //     const projects = getAdminProjects();
        //     const newProject = {
        //         ...formData,
        //         id: Date.now(),
        //         postedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
        //     };
        //     saveAdminProjects([newProject, ...projects]);
        // } else {
        //     updateAdminProject(id, formData);
        // }

        // setSavedSuccess(true);
        // setTimeout(() => {
        //     navigate("/admin/projects");
        // }, 800);
    };

    return (
        <main className="main-content">
            {/* PAGE HEADER */}
            <div className="page-header" style={{ marginBottom: "24px" }}>
                <div className="page-title">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <Link to="/admin/projects" className="admin-back-btn">
                            <i className="fa-solid fa-arrow-left"></i> Back to Projects
                        </Link>
                    </div>
                    <h1>{isNew ? "Post New Platform Project" : `Edit Project: ${formData.title || "Project"}`}</h1>
                    <p>Modify contract specifications, assignment, budget allocations, and milestone deadlines.</p>
                </div>
            </div>

            {savedSuccess && (
                <div className="admin-toast" style={{ position: "relative", top: 0, right: 0, marginBottom: "20px" }}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Project details updated successfully! Redirecting...</span>
                </div>
            )}

            {/* FORM CONTAINER */}
            <div className="admin-form-container">
                <form onSubmit={handleSubmit} className="admin-form-card">
                    {/* SECTION 1: PROJECT OVERVIEW */}
                    <div className="form-section-title">
                        <i className="fa-solid fa-folder-open"></i>
                        <span>Project Overview &amp; Classification</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="project-title">Project Title</label>
                        <div className="input-box">
                            <span className="input-icon">
                                <i className="fa-solid fa-heading"></i>
                            </span>
                            <input
                                type="text"
                                id="project-title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. E-commerce Website Development"
                                required
                            />
                        </div>
                    </div>

                    {/* CATEGORY */}
                    <div className="form-group">
                        <label htmlFor="project-category">Project Category</label>
                        <div className="input-box">
                            <span className="input-icon">
                                <i className="fa-solid fa-layer-group"></i>
                            </span>
                            <select
                                id="project-category"
                                name="projecttype"
                                value={formData.projecttype}
                                onChange={handleChange}
                                className="admin-select"
                                required
                            >
                                <option value="Website Development">Website Development</option>
                                <option value="API Development">API Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="AI & Machine Learning">AI & Machine Learning</option>
                                <option value="Backend Development">Backend Development</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                            </select>
                        </div>
                    </div>

                    {/* SECTION 2: PARTICIPANTS & BUDGET */}
                    <div className="form-section-title" style={{ marginTop: "24px" }}>
                        <i className="fa-solid fa-users"></i>
                        <span>Client, Freelancer &amp; Financials</span>
                    </div>

                    <div className="two-column">
                        {/* CLIENT NAME */}
                        <div className="form-group">
                            <label htmlFor="project-clientName">Client Name / Business</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-solid fa-user-tie"></i>
                                </span>
                                <input
                                    type="text"
                                    id="project-clientName"
                                    name="client"
                                    value={formData.client}
                                    onChange={handleChange}
                                    placeholder="e.g. Vishwam Bhatt (TechStore India)"
                                    required
                                />
                            </div>
                        </div>

                        {/* CLIENT EMAIL */}
                        {/* <div className="form-group">
                            <label htmlFor="project-clientEmail">Client Email</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    id="project-clientEmail"
                                    name="clientemail"
                                    value={formData.clientemail}
                                    onChange={handleChange}
                                    placeholder="client@techstore.in"
                                />
                            </div>
                        </div> */}
                    </div>

                    <div className="two-column">
                        {/* ASSIGNED FREELANCER */}
                        <div className="form-group">
                            <label htmlFor="project-freelancerName">Assigned Freelancer</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-solid fa-laptop-code"></i>
                                </span>
                                <input
                                    type="text"
                                    id="project-freelancerName"
                                    name="freelancername"
                                    value={formData.freelancername}
                                    onChange={handleChange}
                                    placeholder="e.g. Ayush Yadav or Unassigned"
                                    required
                                />
                            </div>
                        </div>

                        {/* BUDGET */}
                        <div className="form-group">
                            <label htmlFor="project-budget">Project Budget (₹)</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-solid fa-indian-rupee-sign"></i>
                                </span>
                                <input
                                    type="text"
                                    id="project-budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    placeholder="e.g. ₹45,000"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="two-column">
                        {/* DEADLINE */}
                        <div className="form-group">
                            <label htmlFor="project-deadline">Project Deadline</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-regular fa-calendar"></i>
                                </span>
                                <input
                                    type="text"
                                    id="project-deadline"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    placeholder="e.g. Apr 15, 2026"
                                    required
                                />
                            </div>
                        </div>

                        {/* SKILLS */}
                        <div className="form-group">
                            <label htmlFor="project-skills">Required Skills</label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-solid fa-tags"></i>
                                </span>
                                <input
                                    type="text"
                                    id="project-skills"
                                    name="requiredskills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                    placeholder="React, Node.js, MongoDB"
                                />
                            </div>
                        </div>
                    </div>



                    {/* companyname */}
                    
                            <div className="form-group">
                            <label htmlFor="project-clientEmail">data require </label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input
                                    type="text"
                                    id="data-req"
                                    name="dataRequest"
                                    value={formData.dataRequest}
                                    onChange={handleChange}
                                    placeholder="ttttt"
                                />
                            </div>
                        </div>
                            <div className="form-group">
                            <label htmlFor="project-clientEmail">objective </label>
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input
                                    type="text"
                                    id="data-req"
                                    name="projectobjective"
                                    value={formData.projectobjective}
                                    onChange={handleChange}
                                    placeholder="ttttt"
                                />
                            </div>
                        </div>



                    {/* DESCRIPTION */}
                    <div className="form-group">
                        <label htmlFor="project-description">Project Deliverables &amp; Description</label>
                        <textarea
                            id="project-description"
                            name="description"
                            rows="4"
                            className="admin-textarea"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Provide details about project scope and milestones..."
                        ></textarea>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="admin-form-actions">
                        <button
                            type="button"
                            className="admin-secondary-btn"
                            onClick={() => navigate("/admin/projects")}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="admin-primary-btn">
                            <i className="fa-solid fa-floppy-disk"></i> {isNew ? "Publish Project" : "Update Project"}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
