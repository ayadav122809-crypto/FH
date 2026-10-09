import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { Logo } from "../assets"
import "./Sidebar.css"
import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const { user } = useContext(userContext);

    /*
    if (user.role=="client"){
    [client's navlinks]
    }else{
        [ freelancer's links]
        }
    
    
    */

    const NavLinks =
        user?.role == "client" ? [

            {
                navigate: '/app/clientdashboard',
                name: 'Dashboard',
                icon: <i class="fa-solid fa-chart-column"></i>
            },
            {
                navigate: '/app/findfreelancers',
                name: 'Find Freelancers',
                icon: <i class="fa-solid fa-users"></i>
            },
            {
                navigate: '/app/clientchat',
                name: 'Messages',
                icon: <i class="fa-regular fa-comment"></i>
            },
            {
                navigate: '/app/payments',
                name: 'Payments',
                icon: <i className="fa-regular fa-credit-card"></i>
            },
            {
                navigate: '/app/clientfinancialanalytics',
                name: 'Financial Analytics',
                icon: <i class="fa-solid fa-chart-line"></i>
            }

        ] : [
            {
                navigate: '/app',
                name: "Dashboard",
                icon: <i className="fa-solid fa-chart-column"></i>
            },
            {
                navigate: '/app/findwork',
                name: 'Find Work',
                icon: <i className="fa-solid fa-briefcase"></i>
            },
            {
                navigate: '/app/myprojects',
                name: 'My Projects',
                icon: <i className="fa-regular fa-folder"></i>
            },
            {
                navigate: '/app/chat',
                name: 'Messages',
                icon: <i className="fa-regular fa-comment"></i>
            },
            {
                navigate: '/app/payments',
                name: 'Payments',
                icon: <i className="fa-regular fa-credit-card"></i>
            },
        ]

        ;

    // Keep "Find Work" active when inspecting project details, matching the screenshot
    const isLinkActive = (path) => {
        if (path === '/app') {
            return location.pathname === '/app' || location.pathname === '/app/';
        }
        if (path === '/app/findwork') {
            return (
                location.pathname === '/app/findwork' ||
                location.pathname.startsWith('/app/projectdetails')
            );
        }
        return location.pathname.startsWith(path);
    };


    return !user ? <div>loading...</div> : (

        <aside className="sidebar freelancer-sidebar">
            <div className="freelancer-sidebar-inner">
                <div className="freelancer-sidebar-top">
                    {/* LOGO */}
                    <div className="freelancer-logo-section">
                        <div
                            className="freelancer-logo"
                            onClick={() => navigate('/app')}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="freelancer-logo-icon">
                                <img src={Logo} alt="Freelance Hub Logo" />
                            </div>
                            <div className="freelancer-logo-text">
                                <span className="logo-title-freelance">FREELANCE</span>
                                <span className="logo-title-hub">HUB</span>
                            </div>
                        </div>
                    </div>


                    {/* NAVIGATION */}
                    <nav className="freelancer-sidebar-menu">
                        {NavLinks.map((link) => {
                            const active = isLinkActive(link.navigate);
                            return (
                                <NavLink
                                    key={link.navigate}
                                    end='/app'
                                    to={link.navigate}
                                    className={`freelancer-menu-item menu-item ${active ? 'active' : ''}`}
                                >
                                    <span className="menu-icon">{link.icon}</span>
                                    <span className="menu-label">{link.name}</span>
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>

                {/* BOTTOM USER ACCOUNT */}
                <div className="freelancer-sidebar-bottom sidebar-bottom">
                    <div className="freelancer-account-card account-card">
                        <div
                            className="freelancer-account-avatar account-avatar"
                            onClick={() => navigate('/app/freelancerprofile')}
                            title="View Profile"
                        >
                            {(() => {
                                if (user?.username) {
                                    const parts = user.username.split(" ");
                                    if (parts.length > 1) {
                                        return (parts[0][0] + parts[1][0]).toUpperCase();
                                    } else {
                                        return parts[0][0].toUpperCase();
                                    }
                                } else {
                                    return "?";
                                }
                            })()}                  
                                      {/* {(user?.username?.split(" ")[0]?.[0] ) +
                                (user?.username?.split(" ")[1]?.[0] )} */}
                        </div>

                        <div
                            className="freelancer-account-info account-info"
                            onClick={() => navigate('/app/freelancerprofile')}
                            title="View Profile"
                        >
                            <strong className="freelancer-account-name">{user?.username}</strong>
                            <span className="freelancer-account-role">{user?.role}</span>
                        </div>

                        <button
                            type="button"
                            className="freelancer-account-logout account-arrow"
                            onClick={() => navigate('/login')}
                            title="Logout"
                            aria-label="Logout"
                        >
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}