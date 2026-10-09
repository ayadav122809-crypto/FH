import { useNavigate, useParams } from "react-router-dom";

export default function ProjectCard({clientName, name, description, skills, budget, id}) {

    const navigate = useNavigate();

    // const {id} = useParams();
    

    return (
        <div class="project-card new-project">

            <div class="project-top">

                <span class="client-name">
                    {/* TechStore India */}
                    {clientName}
                </span>

                <span class="project-status urgent">
                    Urgent
                </span>

            </div>


            <h3>
                {/* E-commerce Website Development */}
                {name}
            </h3>


            <p class="project-description">
                {/* Build a responsive React-based storefront
                with shopping cart and dynamic Stripe integration. */}
                {description}
            </p>


            <div class="skills">
                    {/* {skills} */}
                    {skills && skills.map((skill)=>(
                        <span>{skill}</span>
                    ))}
                {/* <span>Node.js</span>
                <span>Stripe</span> */}

            </div>


            <div class="project-divider"></div>


            <div class="project-bottom">

                <div>

                    <span class="price-label">
                        FIXED PRICE
                    </span>

                    <strong>
                        {/* ₹45,000 */}
                        {budget}
                    </strong>

                </div>


                <div class="action-buttons">

                     <span onClick={() => navigate(`/app/projectdetails/${id}`)} class="new1 new2">  <button class="apply-btn">
                        View Details
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                     </span>

                    

                    <span class="new1">  <button class="apply-btn">
                        Apply
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                    </span>

                </div>

            </div>

        </div>
    )
} 