export default function FindFreelancers(){
    return(
        <div class="find-freelancers-page">

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

                <h1>Find Freelancers</h1>

                <p>
                    Discover skilled freelancers for your projects.
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



        {/* <!-- =====================================================
             FILTER SECTION
        ====================================================== --> */}

        <section class="filter-section">

            <div class="filter-search">

                <i class="fa-solid fa-magnifying-glass"></i>

                <input
                    type="text"
                    placeholder="Search by freelancer name, skill or expertise..."
                />

            </div>


            <select class="filter-select">

                <option>All Categories</option>

                <option>Web Development</option>

                <option>UI/UX Design</option>

                <option>Mobile Development</option>

                <option>Graphic Design</option>

                <option>Digital Marketing</option>

            </select>


            <select class="filter-select">

                <option>Any Experience</option>

                <option>Less than 2 years</option>

                <option>2 - 4 years</option>

                <option>4 - 6 years</option>

                <option>6+ years</option>

            </select>


            <select class="filter-select">

                <option>Sort By</option>

                <option>Highest Rated</option>

                <option>Most Experienced</option>

                <option>Lowest Fixed Budget</option>

            </select>

        </section>



        {/* <!-- =====================================================
             RESULTS HEADER
        ====================================================== --> */}

        <div class="results-header">

            <div>

                <h2>Available Freelancers</h2>

                <p>
                    24 freelancers available for your projects
                </p>

            </div>


            <span class="results-count">
                24 Freelancers
            </span>

        </div>



        {/* <!-- =====================================================
             FREELANCERS GRID
        ====================================================== --> */}

        <section class="freelancers-grid">


            {/* <!-- =================================================
                 FREELANCER 1
            ================================================== --> */}

            <div class="freelancer-card">

                <div class="freelancer-top">

                    <div class="freelancer-avatar avatar-one">
                        RS
                    </div>

                    <div class="freelancer-main">

                        <div class="name-row">

                            <h3>Rahul Sharma</h3>

                            <i class="fa-solid fa-circle-check verified"></i>

                        </div>

                        <p class="role">
                            Full Stack Developer
                        </p>

                        <div class="rating">

                            <i class="fa-solid fa-star"></i>

                            <strong>4.9</strong>

                            <span>(38 reviews)</span>

                        </div>

                    </div>

                </div>


                <p class="description">
                    Full Stack Developer specializing in modern web applications,
                    MERN stack development and scalable digital solutions.
                </p>


                <div class="skills">

                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>JavaScript</span>

                </div>


                <div class="freelancer-info">

                    <div>

                        <i class="fa-solid fa-location-dot"></i>

                        Gujarat, India

                    </div>

                    <div>

                        <i class="fa-solid fa-briefcase"></i>

                        5+ Years

                    </div>

                </div>


                <div class="card-bottom">

                    <div class="rate">

                        <strong>₹45,000</strong>

                        <span>Fixed Budget</span>

                    </div>

                    <span class="available">
                        Available
                    </span>

                </div>


                <div class="card-actions">

                    <a href="freelancer-profile3.html" class="view-btn">
                        View Profile
                    </a>

                    <a href="messages.html" class="hire-btn">
                        Hire Freelancer
                    </a>

                </div>

            </div>



            {/* <!-- =================================================
                 FREELANCER 2
            ================================================== --> */}

            <div class="freelancer-card">

                <div class="freelancer-top">

                    <div class="freelancer-avatar avatar-two">
                        PP
                    </div>

                    <div class="freelancer-main">

                        <div class="name-row">

                            <h3>Priya Patel</h3>

                            <i class="fa-solid fa-circle-check verified"></i>

                        </div>

                        <p class="role">
                            UI/UX Designer
                        </p>

                        <div class="rating">

                            <i class="fa-solid fa-star"></i>

                            <strong>4.8</strong>

                            <span>(31 reviews)</span>

                        </div>

                    </div>

                </div>


                <p class="description">
                    Creative UI/UX designer focused on clean interfaces,
                    user experience and modern digital product design.
                </p>


                <div class="skills">

                    <span>Figma</span>
                    <span>UI Design</span>
                    <span>UX Research</span>
                    <span>Prototyping</span>

                </div>


                <div class="freelancer-info">

                    <div>

                        <i class="fa-solid fa-location-dot"></i>

                        Ahmedabad, India

                    </div>

                    <div>

                        <i class="fa-solid fa-briefcase"></i>

                        4+ Years

                    </div>

                </div>


                <div class="card-bottom">

                    <div class="rate">

                        <strong>₹32,000</strong>

                        <span>Fixed Budget</span>

                    </div>

                    <span class="available">
                        Available
                    </span>

                </div>


                <div class="card-actions">

                    <a href="freelancer-profile.html" class="view-btn">
                        View Profile
                    </a>

                    <a href="messages.html" class="hire-btn">
                        Hire Freelancer
                    </a>

                </div>

            </div>



            {/* <!-- =================================================
                 FREELANCER 3
            ================================================== --> */}

            <div class="freelancer-card">

                <div class="freelancer-top">

                    <div class="freelancer-avatar avatar-three">
                        AM
                    </div>

                    <div class="freelancer-main">

                        <div class="name-row">

                            <h3>Arjun Mehta</h3>

                            <i class="fa-solid fa-circle-check verified"></i>

                        </div>

                        <p class="role">
                            Backend Developer
                        </p>

                        <div class="rating">

                            <i class="fa-solid fa-star"></i>

                            <strong>4.7</strong>

                            <span>(26 reviews)</span>

                        </div>

                    </div>

                </div>


                <p class="description">
                    Backend developer experienced in APIs, databases and
                    building reliable server-side applications.
                </p>


                <div class="skills">

                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>REST API</span>
                    <span>MongoDB</span>

                </div>


                <div class="freelancer-info">

                    <div>

                        <i class="fa-solid fa-location-dot"></i>

                        Mumbai, India

                    </div>

                    <div>

                        <i class="fa-solid fa-briefcase"></i>

                        4+ Years

                    </div>

                </div>


                <div class="card-bottom">

                    <div class="rate">

                        <strong>₹18,000</strong>

                        <span>Fixed Budget</span>

                    </div>

                    <span class="available">
                        Available
                    </span>

                </div>


                <div class="card-actions">

                    <a href="freelancer-profile.html" class="view-btn">
                        View Profile
                    </a>

                    <a href="messages.html" class="hire-btn">
                        Hire Freelancer
                    </a>

                </div>

            </div>



            {/* <!-- =================================================
                 FREELANCER 4
            ================================================== --> */}

            <div class="freelancer-card">

                <div class="freelancer-top">

                    <div class="freelancer-avatar avatar-four">
                        NS
                    </div>

                    <div class="freelancer-main">

                        <div class="name-row">

                            <h3>Neha Shah</h3>

                            <i class="fa-solid fa-circle-check verified"></i>

                        </div>

                        <p class="role">
                            Graphic Designer
                        </p>

                        <div class="rating">

                            <i class="fa-solid fa-star"></i>

                            <strong>4.9</strong>

                            <span>(42 reviews)</span>

                        </div>

                    </div>

                </div>


                <p class="description">
                    Graphic designer creating professional brand identities,
                    logos and visual content for modern businesses.
                </p>


                <div class="skills">

                    <span>Photoshop</span>
                    <span>Illustrator</span>
                    <span>Branding</span>
                    <span>Logo Design</span>

                </div>


                <div class="freelancer-info">

                    <div>

                        <i class="fa-solid fa-location-dot"></i>

                        Surat, India

                    </div>

                    <div>

                        <i class="fa-solid fa-briefcase"></i>

                        6+ Years

                    </div>

                </div>


                <div class="card-bottom">

                    <div class="rate">

                        <strong>₹22,000</strong>

                        <span>Fixed Budget</span>

                    </div>

                    <span class="available">
                        Available
                    </span>

                </div>


                <div class="card-actions">

                    <a href="freelancer-profile.html" class="view-btn">
                        View Profile
                    </a>

                    <a href="messages.html" class="hire-btn">
                        Hire Freelancer
                    </a>

                </div>

            </div>



            {/* <!-- =================================================
                 FREELANCER 5
            ================================================== --> */}

            <div class="freelancer-card">

                <div class="freelancer-top">

                    <div class="freelancer-avatar avatar-five">
                        VK
                    </div>

                    <div class="freelancer-main">

                        <div class="name-row">

                            <h3>Vivek Kumar</h3>

                            <i class="fa-solid fa-circle-check verified"></i>

                        </div>

                        <p class="role">
                            Mobile App Developer
                        </p>

                        <div class="rating">

                            <i class="fa-solid fa-star"></i>

                            <strong>4.8</strong>

                            <span>(29 reviews)</span>

                        </div>

                    </div>

                </div>


                <p class="description">
                    Mobile app developer building smooth and reliable
                    Android and cross-platform mobile applications.
                </p>


                <div class="skills">

                    <span>Flutter</span>
                    <span>React Native</span>
                    <span>Android</span>
                    <span>Firebase</span>

                </div>


                <div class="freelancer-info">

                    <div>

                        <i class="fa-solid fa-location-dot"></i>

                        Pune, India

                    </div>

                    <div>

                        <i class="fa-solid fa-briefcase"></i>

                        5+ Years

                    </div>

                </div>


                <div class="card-bottom">

                    <div class="rate">

                        <strong>₹35,000</strong>

                        <span>Fixed Budget</span>

                    </div>

                    <span class="available">
                        Available
                    </span>

                </div>


                <div class="card-actions">

                    <a href="freelancer-profile.html" class="view-btn">
                        View Profile
                    </a>

                    <a href="messages.html" class="hire-btn">
                        Hire Freelancer
                    </a>

                </div>

            </div>



            {/* <!-- =================================================
                 FREELANCER 6
            ================================================== --> */}

            <div class="freelancer-card">

                <div class="freelancer-top">

                    <div class="freelancer-avatar avatar-six">
                        RD
                    </div>

                    <div class="freelancer-main">

                        <div class="name-row">

                            <h3>Riya Desai</h3>

                            <i class="fa-solid fa-circle-check verified"></i>

                        </div>

                        <p class="role">
                            Digital Marketing Specialist
                        </p>

                        <div class="rating">

                            <i class="fa-solid fa-star"></i>

                            <strong>4.6</strong>

                            <span>(22 reviews)</span>

                        </div>

                    </div>

                </div>


                <p class="description">
                    Digital marketing specialist helping businesses improve
                    their online presence, traffic and customer engagement.
                </p>


                <div class="skills">

                    <span>SEO</span>
                    <span>Google Ads</span>
                    <span>Social Media</span>
                    <span>Analytics</span>

                </div>


                <div class="freelancer-info">

                    <div>

                        <i class="fa-solid fa-location-dot"></i>

                        Vadodara, India

                    </div>

                    <div>

                        <i class="fa-solid fa-briefcase"></i>

                        3+ Years

                    </div>

                </div>


                <div class="card-bottom">

                    <div class="rate">

                        <strong>₹25,000</strong>

                        <span>Fixed Budget</span>

                    </div>

                    <span class="available">
                        Available
                    </span>

                </div>


                <div class="card-actions">

                    <a href="freelancer-profile3.html" class="view-btn">
                        View Profile
                    </a>

                    <a href="messages.html" class="hire-btn">
                        Hire Freelancer
                    </a>

                </div>

            </div>


        </section>

    </main>

</div>
    )
}