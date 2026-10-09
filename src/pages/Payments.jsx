import React from "react";
import { Link } from "react-router-dom";

export default function Payments() {
    return (
        <main className="main-content">
            {/* =========================================
                 HEADER
            ========================================== */}
            <header className="top-header">
                <div className="header-left">
                    <h1>Payments</h1>
                    <p>Welcome Ayush, manage your earnings and payment history.</p>
                </div>

                <div className="header-right">
                    {/* SEARCH */}
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search payments..." />
                    </div>

                    {/* NOTIFICATION */}
                    <div className="notification">
                        <i className="fa-regular fa-bell"></i>
                        <span className="notification-dot"></span>
                    </div>
                </div>
            </header>

            {/* =========================================
                 PAYMENT STATISTICS
            ========================================== */}
            <section className="payment-stats">
                {/* TOTAL EARNINGS */}
                <div className="payment-stat-card">
                    <div className="stat-icon earnings-icon">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                    </div>
                    <div className="stat-content">
                        <span>Total Earnings</span>
                        <h2>₹1,25,000</h2>
                        <small>
                            <i className="fa-solid fa-arrow-trend-up"></i>
                            12.5% from last month
                        </small>
                    </div>
                </div>

                {/* AVAILABLE BALANCE */}
                <div className="payment-stat-card">
                    <div className="stat-icon balance-icon">
                        <i className="fa-solid fa-wallet"></i>
                    </div>
                    <div className="stat-content">
                        <span>Available Balance</span>
                        <h2>₹42,500</h2>
                        <small>Ready for withdrawal</small>
                    </div>
                </div>

                {/* PENDING PAYMENTS */}
                <div className="payment-stat-card">
                    <div className="stat-icon pending-icon">
                        <i className="fa-regular fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <span>Pending Payments</span>
                        <h2>₹18,000</h2>
                        <small>2 payments processing</small>
                    </div>
                </div>

                {/* THIS MONTH */}
                <div className="payment-stat-card">
                    <div className="stat-icon month-icon">
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className="stat-content">
                        <span>This Month</span>
                        <h2>₹32,000</h2>
                        <small>3 completed payments</small>
                    </div>
                </div>
            </section>

            {/* =========================================
                 MAIN PAYMENT AREA
            ========================================== */}
            <section className="payment-section">
                {/* PAYMENT HISTORY */}
                <div className="payment-history">
                    <div className="section-header">
                        <div>
                            <h2>Payment History</h2>
                            <p>Track your recent payments and earnings.</p>
                        </div>
                        <button className="filter-btn">
                            <i className="fa-solid fa-filter"></i>
                            Filter
                        </button>
                    </div>

                    <div className="payment-table">
                        {/* TABLE HEADING */}
                        <div className="table-head">
                            <span>CLIENT / COMPANY</span>
                            <span>PROJECT</span>
                            <span>DATE</span>
                            <span>AMOUNT</span>
                            <span>STATUS</span>
                            <span></span>
                        </div>

                        {/* TECHSTORE INDIA */}
                        <div className="payment-row">
                            <div className="client-info">
                                <div className="client-avatar">TS</div>
                                <div>
                                    <strong>TechStore India</strong>
                                    <small>Client</small>
                                </div>
                            </div>
                            <div className="project-name">
                                E-commerce Website Development
                            </div>
                            <div className="payment-date">
                                08 Sep 2026
                            </div>
                            <div className="payment-amount">
                                ₹45,000
                            </div>
                            <div>
                                <span className="status completed">
                                    <i className="fa-solid fa-check"></i>
                                    Completed
                                </span>
                            </div>
                            <Link to="/app/payments" className="view-btn">
                                View
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>

                        {/* AESTHETIC STUDIO */}
                        <div className="payment-row">
                            <div className="client-info">
                                <div className="client-avatar">AS</div>
                                <div>
                                    <strong>Aesthetic Studio</strong>
                                    <small>Client</small>
                                </div>
                            </div>
                            <div className="project-name">
                                Mobile App UI Redesign
                            </div>
                            <div className="payment-date">
                                04 Sep 2026
                            </div>
                            <div className="payment-amount">
                                ₹32,000
                            </div>
                            <div>
                                <span className="status completed">
                                    <i className="fa-solid fa-check"></i>
                                    Completed
                                </span>
                            </div>
                            <Link to="/app/payments" className="view-btn">
                                View
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>

                        {/* CREATIVE MINDS */}
                        <div className="payment-row">
                            <div className="client-info">
                                <div className="client-avatar">CM</div>
                                <div>
                                    <strong>Creative Minds Inc.</strong>
                                    <small>Client</small>
                                </div>
                            </div>
                            <div className="project-name">
                                Portfolio Website Design
                            </div>
                            <div className="payment-date">
                                01 Sep 2026
                            </div>
                            <div className="payment-amount">
                                ₹15,000
                            </div>
                            <div>
                                <span className="status pending">
                                    <i className="fa-regular fa-clock"></i>
                                    Pending
                                </span>
                            </div>
                            <Link to="/app/payments" className="view-btn">
                                View
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>

                        {/* GLOBAL LOGISTICS */}
                        <div className="payment-row">
                            <div className="client-info">
                                <div className="client-avatar">GL</div>
                                <div>
                                    <strong>Global Logistics</strong>
                                    <small>Client</small>
                                </div>
                            </div>
                            <div className="project-name">
                                API Integration & Bug Fixing
                            </div>
                            <div className="payment-date">
                                28 Aug 2026
                            </div>
                            <div className="payment-amount">
                                ₹18,000
                            </div>
                            <div>
                                <span className="status processing">
                                    <i className="fa-solid fa-spinner"></i>
                                    Processing
                                </span>
                            </div>
                            <Link to="/app/payments" className="view-btn">
                                View
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* EARNINGS OVERVIEW */}
                <aside className="payment-side-card">
                    <div className="side-card-header">
                        <div>
                            <h2>Earnings Overview</h2>
                            <p>Your payment summary</p>
                        </div>
                        <i className="fa-solid fa-chart-line"></i>
                    </div>

                    <div className="earning-total">
                        <span>Total Received</span>
                        <strong>₹1,25,000</strong>
                    </div>

                    <div className="earning-item">
                        <div className="earning-label">
                            <span className="earning-dot completed-dot"></span>
                            Completed
                        </div>
                        <strong>₹1,07,000</strong>
                    </div>

                    <div className="earning-item">
                        <div className="earning-label">
                            <span className="earning-dot pending-dot"></span>
                            Pending
                        </div>
                        <strong>₹15,000</strong>
                    </div>

                    <div className="earning-item">
                        <div className="earning-label">
                            <span className="earning-dot processing-dot"></span>
                            Processing
                        </div>
                        <strong>₹3,000</strong>
                    </div>
                </aside>
            </section>

            {/* =========================================
                 PAYMENT INFORMATION
            ========================================== */}
            <section className="payment-info">
                <div className="info-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div className="info-content">
                    <h3>Payment Information</h3>
                    <p>
                        Your completed project payments are securely recorded
                        in your Freelance Hub account. Pending payments will be
                        added to your available balance once the transaction
                        is completed.
                    </p>
                </div>
            </section>
        </main>
    );
}