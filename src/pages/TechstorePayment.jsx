export default function TechstorePayment(){
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

        <header class="top-header">


            <div class="header-left">

                <h1>Payment Details</h1>

                <p>
                    View payment history and transaction details
                    for TechStore India.
                </p>

            </div>



            <div class="header-right">


                {/* <!-- SEARCH --> */}

                <div class="search-box">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <input type="text"
                           placeholder="Search payments..."/>

                </div>



                {/* <!-- NOTIFICATION --> */}

                <div class="notification">

                    <i class="fa-regular fa-bell"></i>

                    <span class="notification-dot"></span>

                </div>


            </div>


        </header>



        {/* <!-- =================================================
             BACK BUTTON
        ================================================== --> */}

        <div class="back-section">

            <a href="payments.html"
               class="back-btn">

                <i class="fa-solid fa-arrow-left"></i>

                Back to Payments

            </a>

        </div>



        {/* <!-- =================================================
             CLIENT / PROJECT HEADER
        ================================================== --> */}

        <section class="client-project-card">


            <div class="client-main-info">


                <div class="company-avatar">

                    TS

                </div>


                <div class="company-details">

                    <span class="client-label">
                        CLIENT
                    </span>

                    <h2>
                        TechStore India
                    </h2>

                    <p>
                        E-commerce Website Development
                    </p>

                </div>


            </div>



            <div class="project-status completed">

                <i class="fa-solid fa-circle-check"></i>

                <div>

                    <span>Payment Status</span>

                    <strong>Completed</strong>

                </div>

            </div>


        </section>



        {/* <!-- =================================================
             PAYMENT SUMMARY
        ================================================== --> */}

        <section class="payment-summary">


            {/* <!-- TOTAL PROJECT --> */}

            <div class="summary-card">


                <div class="summary-icon project-icon">

                    <i class="fa-solid fa-file-invoice-dollar"></i>

                </div>


                <div class="summary-content">

                    <span>Total Project Amount</span>

                    <h2>₹45,000</h2>

                    <small>
                        Full project value
                    </small>

                </div>


            </div>



            {/* <!-- AMOUNT PAID --> */}

            <div class="summary-card">


                <div class="summary-icon paid-icon">

                    <i class="fa-solid fa-circle-check"></i>

                </div>


                <div class="summary-content">

                    <span>Amount Paid</span>

                    <h2>₹45,000</h2>

                    <small>
                        Successfully received
                    </small>

                </div>


            </div>



            {/* <!-- REMAINING --> */}

            <div class="summary-card">


                <div class="summary-icon remaining-icon">

                    <i class="fa-solid fa-wallet"></i>

                </div>


                <div class="summary-content">

                    <span>Remaining Amount</span>

                    <h2>₹0</h2>

                    <small>
                        No pending amount
                    </small>

                </div>


            </div>



            {/* <!-- PAYMENT DATE --> */}

            <div class="summary-card">


                <div class="summary-icon date-icon">

                    <i class="fa-solid fa-calendar-check"></i>

                </div>


                <div class="summary-content">

                    <span>Payment Completed</span>

                    <h2>08 Sep 2026</h2>

                    <small>
                        Final payment received
                    </small>

                </div>


            </div>


        </section>



        {/* <!-- =================================================
             PAYMENT HISTORY SECTION
        ================================================== --> */}

        <section class="history-section">


            <div class="history-header">


                <div>

                    <h2>Payment History</h2>

                    <p>
                        Complete payment record for this project.
                    </p>

                </div>


                <div class="history-status">

                    <i class="fa-solid fa-check"></i>

                    Fully Paid

                </div>


            </div>



            {/* <!-- PAYMENT TABLE --> */}

            <div class="payment-table">


                {/* <!-- TABLE HEADER --> */}

                <div class="table-head">

                    <span>PAYMENT</span>

                    <span>DATE</span>

                    <span>AMOUNT</span>

                    <span>STATUS</span>

                    <span>DETAILS</span>

                </div>



                {/* <!-- PAYMENT ROW --> */}

                <div class="payment-row">


                    <div class="payment-name">


                        <div class="payment-icon">

                            <i class="fa-solid fa-indian-rupee-sign"></i>

                        </div>


                        <div>

                            <strong>
                                Project Payment
                            </strong>

                            <small>
                                E-commerce Website Development
                            </small>

                        </div>


                    </div>



                    <div class="payment-date">

                        08 Sep 2026

                    </div>



                    <div class="payment-amount">

                        ₹45,000

                    </div>



                    <div>

                        <span class="status completed">

                            <i class="fa-solid fa-check"></i>

                            Completed

                        </span>

                    </div>



                    <div class="payment-detail">

                        <span>

                            <i class="fa-solid fa-circle-check"></i>

                            Payment received

                        </span>

                    </div>


                </div>


            </div>


        </section>



        {/* <!-- =================================================
             PROJECT PAYMENT INFORMATION
        ================================================== --> */}

        <section class="details-grid">


            {/* <!-- PROJECT INFORMATION --> */}

            <div class="details-card">


                <div class="details-card-header">


                    <div>

                        <h2>Project Information</h2>

                        <p>
                            Details related to this payment.
                        </p>

                    </div>


                    <div class="header-icon">

                        <i class="fa-solid fa-folder-open"></i>

                    </div>


                </div>



                <div class="detail-list">


                    <div class="detail-item">

                        <span>Client</span>

                        <strong>TechStore India</strong>

                    </div>


                    <div class="detail-item">

                        <span>Project</span>

                        <strong>
                            E-commerce Website Development
                        </strong>

                    </div>


                    <div class="detail-item">

                        <span>Project Amount</span>

                        <strong>₹45,000</strong>

                    </div>


                    <div class="detail-item">

                        <span>Payment Status</span>

                        <strong class="green-text">
                            Completed
                        </strong>

                    </div>


                </div>


            </div>



            {/* <!-- PAYMENT INFORMATION --> */}

            <div class="details-card">


                <div class="details-card-header">


                    <div>

                        <h2>Payment Information</h2>

                        <p>
                            Current payment information.
                        </p>

                    </div>


                    <div class="header-icon">

                        <i class="fa-solid fa-credit-card"></i>

                    </div>


                </div>



                <div class="detail-list">


                    <div class="detail-item">

                        <span>Payment Type</span>

                        <strong>
                            Project Payment
                        </strong>

                    </div>


                    <div class="detail-item">

                        <span>Payment Date</span>

                        <strong>
                            08 Sep 2026
                        </strong>

                    </div>


                    <div class="detail-item">

                        <span>Amount Received</span>

                        <strong>
                            ₹45,000
                        </strong>

                    </div>


                    <div class="detail-item">

                        <span>Balance Due</span>

                        <strong class="green-text">
                            ₹0
                        </strong>

                    </div>


                </div>


            </div>


        </section>



        {/* <!-- =================================================
             PAYMENT NOTICE
        ================================================== --> */}

        <section class="payment-notice">


            <div class="notice-icon">

                <i class="fa-solid fa-shield-halved"></i>

            </div>


            <div class="notice-content">

                <h3>
                    Payment Completed Successfully
                </h3>

                <p>
                    The complete payment of ₹45,000 for the
                    E-commerce Website Development project has
                    been received from TechStore India. There is
                    no remaining balance for this project.
                </p>

            </div>


        </section>



    </main>


</div>

    )
}