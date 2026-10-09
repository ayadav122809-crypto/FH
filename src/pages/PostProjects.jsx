import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContext";



export default function PostProjects() {
    const navigate = useNavigate();

    const client = localStorage.getItem("userid")

    const {user}=useContext(userContext);
    const [formData, setFormData] = useState({});

    const [skills, setSkills] = useState([]);
    const [objectives, setObjectives] = useState([]);

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (error) {
            setErrorMsg('some input fields are empty');
        }
    }, [error])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }



    const handleSubmit = async (e) => {

        setFormData((prev) => ({
            ...prev,
            client: client

        }));



        if (formData.length === 0 || skills.length === 0) {
            setError(true);

            return;
        }

        let skArray = skills.split(",")
        console.log(skArray)
        // console.log(skArray[0]); // 1st skill
        // console.log(skArray[1]); // 2nd skill
        // console.log(skArray[2]); // 3rd skill
        // console.log(skArray[3]); // 4th skill


          let obArray = objectives.split(",")
        console.log(obArray)

        // console.log(formData);



        try{
        const res = await fetch("http://localhost:4000/upload/project", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(
                // formData
                {
                    name: formData?.name,
                    category: formData?.category,
                    description: formData?.description,
                    // skills: formData?.skills,
                    skills: skArray,
                    objectives:obArray,
                    budget: formData?.budget,
                    deadline: formData?.deadline,
                    // file: formData?.file,
                    file: "testing",
                    client: user._id,



                    //     //     // name: "freelance Hub",
                    //     //     // category: "fullstack",
                    //     //     // description: "this is testing static data",
                    //     //     // skills: ["reactjs", "nodejs", "express"],
                    //     //     // budget: 12360,
                    //     //     // deadline: Date.now(),
                    //     //     // file: "file.pdf",
                    //     //     // client: client,
                })
        })

        console.log(res);
        if(!res.ok){
            throw Error("Failed to post project")
        }

        const data = await res.json();
        console.log(data);

         navigate("/app/clientdashboard");
    } 
    catch (error) {
      console.error("Error posting project:", error);
    }
  };

        // console.log(res.json());

    

    return (
        <div class="dashboard">


            {/* <!-- =====================================================
          SIDEBAR
    ====================================================== --> */}




            {/* <!-- =====================================================
         MAIN CONTENT
    ====================================================== --> */}

            <main class="main-content">


                {/* <!-- PAGE HEADER --> */}

                <header class="page-header">


                    <div class="header-left">


                        {/* <a href="client-dashboard.html" class="back-link">

                        <i class="fa-solid fa-arrow-left"></i>

                        Back to Dashboard

                    </a>  */}


                        <h1>Post a New Project</h1>


                        <p>
                            Tell freelancers what you need and find the right
                            person for your project.
                        </p>


                    </div>


                </header>



                {/* <!-- =================================================
             FORM
        ================================================== --> */}

                <form class="project-form" >


                    {/* <!-- =================================================
                 BASIC INFORMATION
            ================================================== --> */}

                    <section class="form-card">


                        <div class="form-card-header">

                            <div class="section-icon">

                                <i class="fa-solid fa-file-lines"></i>

                            </div>


                            <div>

                                <h2>Project Information</h2>

                                <p>
                                    Start with the basic details of your project.
                                </p>

                            </div>

                        </div>



                        <div class="form-body">


                            {/* <!-- PROJECT TITLE --> */}

                            <div class="form-group full-width">

                                <label for="project-title">

                                    Project Title

                                    <span>*</span>

                                </label>


                                <input type="text"
                                    id="project-title"
                                    name="name"
                                    value={formData?.name}
                                    onChange={handleChange}
                                    placeholder="e.g. E-commerce Website Development" />


                                <small>
                                    Use a clear title that describes what you need.
                                </small>

                            </div>



                            {/* <!-- CATEGORY --> */}

                            <div class="form-group">

                                <label for="category">

                                    Project Category

                                    <span>*</span>

                                </label>


                                <div class="select-wrapper">

                                    <select id="category"
                                        name="category"
                                        value={formData?.category}
                                        onChange={handleChange}>

                                        <option value="">
                                            Select a category
                                        </option>

                                        <option>
                                            Web Development
                                        </option>

                                        <option>
                                            UI/UX Design
                                        </option>

                                        <option>
                                            Mobile App Development
                                        </option>

                                        <option>
                                            API Development
                                        </option>

                                        <option>
                                            Graphic Design
                                        </option>

                                        <option>
                                            Digital Marketing
                                        </option>

                                        <option>
                                            Content Writing
                                        </option>

                                    </select>


                                    <i class="fa-solid fa-chevron-down"></i>

                                </div>

                            </div>



                            {/* <!-- EXPERIENCE --> */}

                            {/* <div class="form-group">

                                <label for="experience">

                                    Experience Level

                                    <span>*</span>

                                </label>


                                <div class="select-wrapper">

                                    <select id="experience" name="experience">

                                        <option value="">
                                            Select experience level
                                        </option>

                                        <option>
                                            Beginner
                                        </option>

                                        <option>
                                            Intermediate
                                        </option>

                                        <option>
                                            Expert
                                        </option>

                                    </select>


                                    <i class="fa-solid fa-chevron-down"></i>

                                </div>

                            </div> */}



                            {/* <!-- DESCRIPTION --> */}

                            <div class="form-group full-width">

                                <label for="description">

                                    Project Description

                                    <span>*</span>

                                </label>


                                <textarea id="description"
                                    name="description"
                                    value={formData?.description}
                                    onChange={handleChange}
                                    rows="7"
                                    placeholder="Describe your project, requirements, goals and what you expect from the freelancer..."></textarea>


                                <small>
                                    Include important requirements, features and
                                    expected deliverables.
                                </small>

                            </div>



                            {/* <!-- SKILLS --> */}

                            <div class="form-group full-width">

                                <label for="skills">

                                    Skills Required

                                    <span>*</span>

                                </label>


                                <input type="text"
                                    id="skills"
                                    name="skills"
                                    value={formData?.skills}
                                    onChange={(e) => {
                                        setSkills(e.target.value)
                                    }}
                                    placeholder="e.g. React.js, Node.js, MongoDB, JavaScript" />


                                <small>
                                    Separate multiple skills with commas.
                                </small>

                            </div>

                            <div class="form-group full-width">

                                <label for="skills">

                                    Project Objectives

                                    <span>*</span>

                                </label>


                                <input type="text"
                                    id="skills"
                                    name="skills"
                                    value={formData?.objectives}
                                    onChange={(e) => {
                                        setObjectives(e.target.value)
                                    }}
                                    placeholder="e.g. Build a modern and user-friendly e-commerce website , 
Implement product, category and inventory management." />


                                <small>
                                    Separate multiple objectives with commas.
                                </small>

                            </div>


                        </div>


                    </section>



                    {/* <!-- =================================================
                 BUDGET & TIMELINE
            ================================================== --> */}

                    <section class="form-card">


                        <div class="form-card-header">

                            <div class="section-icon green">

                                <i class="fa-solid fa-indian-rupee-sign"></i>

                            </div>


                            <div>

                                <h2>Budget & Timeline</h2>

                                <p>
                                    Set your budget and expected completion date.
                                </p>

                            </div>

                        </div>



                        <div class="form-body">


                            {/* <!-- PROJECT TYPE --> */}

                            <div class="form-group">

                                <label>

                                    Project Type

                                    <span>*</span>

                                </label>


                                <div class="fixed-budget-option">

                                    <div class="fixed-budget-icon">

                                        <i class="fa-solid fa-indian-rupee-sign"></i>

                                    </div>


                                    <div>

                                        <strong>Fixed Budget</strong>

                                        <small>
                                            Pay a fixed amount for the completed project.
                                        </small>

                                    </div>

                                </div>

                            </div>



                            {/* <!-- BUDGET --> */}

                            <div class="form-group">

                                <label for="budget">

                                    Budget

                                    <span>*</span>

                                </label>


                                <div class="input-with-icon">

                                    <span>₹</span>

                                    <input type="number" id="budget"
                                        name="budget"
                                        value={formData?.budget}
                                        onChange={handleChange}
                                        placeholder="45000" />

                                </div>


                                <small>
                                    Enter the approximate amount you are willing to spend.
                                </small>

                            </div>



                            {/* <!-- DEADLINE --> */}

                            <div class="form-group">

                                <label for="deadline">

                                    Deadline

                                    <span>*</span>

                                </label>


                                <div class="input-with-icon calendar-input">

                                    <input
                                        type="date"
                                        id="deadline"
                                        name="deadline"
                                        value={formData?.deadline}
                                        onChange={handleChange}


                                    />



                                    <i class="fa-regular fa-calendar"></i>

                                </div>

                            </div>



                            {/* <!-- HOURS --> */}

                            {/* <div class="form-group">

                                <label for="hours">

                                    Expected Hours

                                    <span class="optional">
                                        Optional
                                    </span>

                                </label>


                                <input type="number" id="hours" name="hours" placeholder="e.g. 80" />


                                <small>
                                    Useful when hiring on an hourly basis.
                                </small>

                            </div>
 */}

                        </div>


                    </section>



                    {/* <!-- =================================================
                 ATTACHMENTS
            ================================================== --> */}

                    <section class="form-card">


                        <div class="form-card-header">

                            <div class="section-icon purple">

                                <i class="fa-solid fa-paperclip"></i>

                            </div>


                            <div>

                                <h2>Project Files</h2>

                                <p>
                                    Add files that can help freelancers understand
                                    your requirements.
                                </p>

                            </div>

                        </div>



                        <div class="form-body">


                            <div class="upload-area">


                                <i class="fa-solid fa-cloud-arrow-up"></i>


                                <h3>
                                    Upload project files
                                </h3>


                                <p>
                                    Add designs, documents, references or other
                                    useful project files.
                                </p>


                                <label for="project-file" class="upload-btn">

                                    <i class="fa-solid fa-upload"></i>

                                    Choose Files

                                </label>


                                <input type="file" id="project-file"
                                    name="file"
                                    value={formData?.file}
                                    onChange={handleChange} multiple />


                                <small>
                                    Supported files: PDF, DOC, DOCX, JPG, PNG, ZIP
                                </small>


                            </div>


                        </div>


                    </section>


                    {errorMsg && <span style={{ color: "red" }}>{errorMsg}</span>}
                    {/* <!-- =================================================
                 FORM ACTIONS
            ================================================== --> */}

                    <div class="form-actions">


                        <a href="client-dashboard.html" class="cancel-btn">

                            Cancel

                        </a>


                        <button type="button" class="submit-btn" onClick={handleSubmit}>

                            <i class="fa-solid fa-paper-plane"></i>

                            Post Project

                        </button>


                    </div>


                </form>


            </main>


        </div>

    )
}