export default function ClientFinancialanalytics(){
    return (
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

                <h1>Financial Analytics</h1>

                <p>
                    Track your project spending and payment activity.
                </p>

            </div>



            <div class="header-right">


                {/* <!-- SEARCH --> */}

                <div class="search-box">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <input type="text"
                           placeholder="Search transactions or projects..."/>

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
             EXACT SAME STRUCTURE AS CLIENT DASHBOARD
        ================================================== --> */}

        <section class="stats-grid">


            {/* <!-- POSTED PROJECTS --> */}

            <div class="stat-card">

                <div class="stat-icon blue">

                    <i class="fa-solid fa-folder-open"></i>

                </div>


                <div class="stat-info">

                    <span>Posted Projects</span>

                    <strong>8</strong>

                </div>

            </div>



            {/* <!-- ACTIVE PROJECTS --> */}

            <div class="stat-card">

                <div class="stat-icon green">

                    <i class="fa-solid fa-spinner"></i>

                </div>


                <div class="stat-info">

                    <span>Active Projects</span>

                    <strong>3</strong>

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

                </div>

            </div>



            {/* <!-- TOTAL SPENT --> */}

            <div class="stat-card">

                <div class="stat-icon orange">

                    <i class="fa-solid fa-indian-rupee-sign"></i>

                </div>


                <div class="stat-info">

                    <span>Total Spent</span>

                    <strong>₹1,25,000</strong>

                </div>

            </div>


        </section>



        {/* <!-- =================================================
             ANALYTICS ROW
        ================================================== --> */}

        <section class="analytics-row">


            {/* <!-- SPENDING GRAPH --> */}

            <div class="analytics-card spending-card">


                <div class="analytics-header">

                    <div>

                        <h2>Spending Overview</h2>

                        <p>
                            Your project spending over the last 6 months
                        </p>

                    </div>


                    <div class="amount-summary">

                        <span>Total Spent</span>

                        <strong>₹1,25,000</strong>

                    </div>

                </div>



                {/* <!-- CHART --> */}

                <div class="chart-container">


                    <div class="chart-y-axis">

                        <span>₹30K</span>
                        <span>₹20K</span>
                        <span>₹10K</span>
                        <span>₹0</span>

                    </div>



                    <div class="chart-main">


                        <div class="horizontal-line line-one"></div>

                        <div class="horizontal-line line-two"></div>

                        <div class="horizontal-line line-three"></div>

                        <div class="horizontal-line line-four"></div>



                        <svg class="spending-chart"
                             viewBox="0 0 700 210"
                             preserveAspectRatio="none">


                            {/* <!-- AREA --> */}

                            <path
                                d="M0 165
                                   L140 125
                                   L280 145
                                   L420 75
                                   L560 105
                                   L700 40
                                   L700 210
                                   L0 210 Z"
                                fill="#eaf3ff">
                            </path>



                            {/* <!-- LINE --> */}

                            <polyline
                                points="0,165 140,125 280,145 420,75 560,105 700,40"
                                fill="none"
                                stroke="#087fe5"
                                stroke-width="3">
                            </polyline>



                            {/* <!-- POINTS --> */}

                            <circle cx="0"
                                    cy="165"
                                    r="5"
                                    fill="#ffffff"
                                    stroke="#087fe5"
                                    stroke-width="3">
                            </circle>


                            <circle cx="140"
                                    cy="125"
                                    r="5"
                                    fill="#ffffff"
                                    stroke="#087fe5"
                                    stroke-width="3">
                            </circle>


                            <circle cx="280"
                                    cy="145"
                                    r="5"
                                    fill="#ffffff"
                                    stroke="#087fe5"
                                    stroke-width="3">
                            </circle>


                            <circle cx="420"
                                    cy="75"
                                    r="5"
                                    fill="#ffffff"
                                    stroke="#087fe5"
                                    stroke-width="3">
                            </circle>


                            <circle cx="560"
                                    cy="105"
                                    r="5"
                                    fill="#ffffff"
                                    stroke="#087fe5"
                                    stroke-width="3">
                            </circle>


                            <circle cx="700"
                                    cy="40"
                                    r="5"
                                    fill="#ffffff"
                                    stroke="#087fe5"
                                    stroke-width="3">
                            </circle>


                        </svg>



                        <div class="chart-months">

                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                            <span>Jul</span>
                            <span>Aug</span>
                            <span>Sep</span>

                        </div>


                    </div>


                </div>


            </div>



            {/* <!-- PAYMENT SUMMARY --> */}

            <div class="analytics-card payment-card">


                <div class="analytics-header">

                    <div>

                        <h2>Payment Summary</h2>

                        <p>
                            Current payment status
                        </p>

                    </div>


                    <div class="small-card-icon">

                        <i class="fa-solid fa-wallet"></i>

                    </div>

                </div>



                <div class="payment-total">

                    <span>Total Payments</span>

                    <strong>₹1,25,000</strong>

                </div>



                {/* <!-- PAID --> */}

                <div class="payment-row">

                    <div class="payment-label">

                        <span class="payment-dot paid"></span>

                        <span>Paid</span>

                        <strong>₹98,500</strong>

                    </div>


                    <div class="payment-progress">

                        <div class="paid-progress"></div>

                    </div>

                </div>



                {/* <!-- PENDING --> */}

                <div class="payment-row">

                    <div class="payment-label">

                        <span class="payment-dot pending"></span>

                        <span>Pending</span>

                        <strong>₹18,500</strong>

                    </div>


                    <div class="payment-progress">

                        <div class="pending-progress"></div>

                    </div>

                </div>



                {/* <!-- PROCESSING --> */}

                <div class="payment-row">

                    <div class="payment-label">

                        <span class="payment-dot processing"></span>

                        <span>Processing</span>

                        <strong>₹8,000</strong>

                    </div>


                    <div class="payment-progress">

                        <div class="processing-progress"></div>

                    </div>

                </div>



                <div class="next-payment">

                    <div>

                        <span>Next Payment</span>

                        <strong>₹8,500</strong>

                    </div>


                    <div class="next-payment-date">

                        <i class="fa-regular fa-calendar"></i>

                        20 Sep 2026

                    </div>

                </div>


            </div>


        </section>



        {/* <!-- =================================================
             LOWER ANALYTICS
        ================================================== --> */}

        <section class="lower-row">


            {/* <!-- PROJECT SPENDING --> */}

            <div class="analytics-card project-spending-card">


                <div class="analytics-header">

                    <div>

                        <h2>Project Spending</h2>

                        <p>
                            Spending by active project
                        </p>

                    </div>

                </div>



                <div class="project-list">


                    {/* <!-- PROJECT 1 --> */}

                    <div class="project-item">


                        <div class="project-details">

                            <div class="project-icon blue-project">

                                <i class="fa-solid fa-cart-shopping"></i>

                            </div>


                            <div>

                                <strong>E-commerce Website</strong>

                                <span>Rahul Sharma</span>

                            </div>

                        </div>


                        <div class="project-amount">

                            <strong>₹36,000</strong>

                            <span>of ₹45,000</span>

                        </div>


                    </div>



                    <div class="project-progress">

                        <div class="project-progress-fill blue-fill"></div>

                    </div>



                    {/* <!-- PROJECT 2 --> */}

                    <div class="project-item">


                        <div class="project-details">

                            <div class="project-icon purple-project">

                                <i class="fa-solid fa-pen-ruler"></i>

                            </div>


                            <div>

                                <strong>Mobile App UI</strong>

                                <span>Riya Desai</span>

                            </div>

                        </div>


                        <div class="project-amount">

                            <strong>₹22,000</strong>

                            <span>of ₹30,000</span>

                        </div>


                    </div>



                    <div class="project-progress">

                        <div class="project-progress-fill purple-fill"></div>

                    </div>



                    {/* <!-- PROJECT 3 --> */}

                    <div class="project-item">


                        <div class="project-details">

                            <div class="project-icon green-project">

                                <i class="fa-solid fa-code"></i>

                            </div>


                            <div>

                                <strong>API Integration</strong>

                                <span>Amit Patel</span>

                            </div>

                        </div>


                        <div class="project-amount">

                            <strong>₹18,000</strong>

                            <span>of ₹35,000</span>

                        </div>

                    </div>



                    <div class="project-progress">

                        <div class="project-progress-fill green-fill"></div>

                    </div>


                </div>


            </div>



            {/* <!-- RECENT TRANSACTIONS --> */}

            <div class="analytics-card transactions-card">


                <div class="analytics-header">

                    <div>

                        <h2>Recent Transactions</h2>

                        <p>
                            Latest payment activity
                        </p>

                    </div>

                </div>



                <div class="transaction-list">


                    {/* <!-- TRANSACTION --> */}

                    <div class="transaction-item">


                        <div class="transaction-icon">

                            <i class="fa-solid fa-arrow-up"></i>

                        </div>


                        <div class="transaction-info">

                            <strong>E-commerce Website</strong>

                            <span>Rahul Sharma</span>

                        </div>


                        <div class="transaction-price">

                            <strong>-₹15,000</strong>

                            <span>14 Sep</span>

                        </div>


                    </div>



                    {/* <!-- TRANSACTION --> */}

                    <div class="transaction-item">


                        <div class="transaction-icon">

                            <i class="fa-solid fa-arrow-up"></i>

                        </div>


                        <div class="transaction-info">

                            <strong>Mobile App UI</strong>

                            <span>Riya Desai</span>

                        </div>


                        <div class="transaction-price">

                            <strong>-₹12,000</strong>

                            <span>10 Sep</span>

                        </div>


                    </div>



                    {/* <!-- TRANSACTION --> */}

                    <div class="transaction-item">


                        <div class="transaction-icon pending-icon">

                            <i class="fa-solid fa-clock"></i>

                        </div>


                        <div class="transaction-info">

                            <strong>API Integration</strong>

                            <span>Payment pending</span>

                        </div>


                        <div class="transaction-price">

                            <strong>₹8,500</strong>

                            <span>Pending</span>

                        </div>


                    </div>



                    {/* <!-- TRANSACTION --> */}

                    <div class="transaction-item">


                        <div class="transaction-icon">

                            <i class="fa-solid fa-arrow-up"></i>

                        </div>


                        <div class="transaction-info">

                            <strong>Website Maintenance</strong>

                            <span>Rahul Sharma</span>

                        </div>


                        <div class="transaction-price">

                            <strong>-₹6,500</strong>

                            <span>02 Sep</span>

                        </div>


                    </div>


                </div>


            </div>


        </section>


    </main>


</div>
    )
}