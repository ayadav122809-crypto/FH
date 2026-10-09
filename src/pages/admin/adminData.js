// Pure Frontend In-Memory & LocalStorage Data Store
// Aligned directly with existing Freelancer and Client profiles and projects

const INITIAL_USERS = [
    {
        id: 1,
        name: "Ayush Yadav",
        email: "ayushyadav@freelancehub.com",
        role: "Freelancer",
        title: "Full Stack Developer",
        status: "Active",
        joinDate: "Jan 15, 2026",
        projectsCount: 6,
        phone: "+91 98765 43210",
        location: "Gujarat, India",
        skills: "React, Node.js, JavaScript, MERN Stack",
        bio: "Full Stack Developer specializing in modern web applications, MERN stack development and scalable digital solutions."
    },
    {
        id: 2,
        name: "Vishwam Bhatt",
        email: "vishwam.bhatt@techstore.in",
        role: "Client",
        title: "Founder, TechStore India",
        status: "Active",
        joinDate: "Feb 02, 2026",
        projectsCount: 4,
        phone: "+91 91234 56789",
        location: "Gujarat, India",
        skills: "Project Management, E-Commerce, Retail Tech",
        bio: "Founder & Product Lead at TechStore India. Hiring top-tier dev talent for high-scale digital commerce."
    },
    {
        id: 3,
        name: "Creative Minds Inc.",
        email: "contact@creativeminds.io",
        role: "Client",
        title: "Design & Media Agency",
        status: "Active",
        joinDate: "Jan 20, 2026",
        projectsCount: 5,
        phone: "+91 98220 11223",
        location: "Mumbai, India",
        skills: "Branding, Marketing, Product Direction",
        bio: "Creative studio building brand identities and interactive portfolio experiences."
    },
    {
        id: 4,
        name: "Global Logistics",
        email: "operations@globallogistics.com",
        role: "Client",
        title: "Supply Chain & Freight",
        status: "Active",
        joinDate: "Feb 18, 2026",
        projectsCount: 3,
        phone: "+91 98331 44556",
        location: "Delhi, India",
        skills: "Enterprise Logistics, API Integrations, Fleet Tech",
        bio: "Logistics provider scaling internal order routing and external tracking APIs."
    },
    {
        id: 5,
        name: "Priya Sharma",
        email: "priya.uiux@creative.co",
        role: "Freelancer",
        title: "UI/UX & Product Designer",
        status: "Active",
        joinDate: "Feb 10, 2026",
        projectsCount: 8,
        phone: "+91 99887 76655",
        location: "Delhi, India",
        skills: "Figma, Adobe XD, UI/UX, Design Systems",
        bio: "Award-winning Product Designer crafting intuitive digital and mobile interfaces."
    },
    {
        id: 6,
        name: "Rahul Verma",
        email: "rahul.verma@finedgelabs.com",
        role: "Client",
        title: "VP Engineering, FinEdge Labs",
        status: "Pending",
        joinDate: "Mar 01, 2026",
        projectsCount: 1,
        phone: "+91 98112 23344",
        location: "Hyderabad, India",
        skills: "FinTech, Security, Banking APIs",
        bio: "Building next-generation financial services and mobile micro-investing experiences."
    },
    {
        id: 7,
        name: "Sneha Patel",
        email: "sneha.ai@neuralhub.org",
        role: "Freelancer",
        title: "AI & ML Specialist",
        status: "Active",
        joinDate: "Mar 12, 2026",
        projectsCount: 4,
        phone: "+91 97334 55667",
        location: "Pune, India",
        skills: "Python, PyTorch, LangChain, OpenAI APIs",
        bio: "AI Engineer building intelligent support agents, chatbots, and NLP workflows."
    }
];

const INITIAL_PROJECTS = [
    {
        id: 1,
        title: "E-commerce Website Development",
        category: "Website Development",
        clientName: "Vishwam Bhatt (TechStore India)",
        clientEmail: "vishwam.bhatt@techstore.in",
        freelancerName: "Ayush Yadav",
        budget: "₹45,000",
        rawBudget: 45000,
        status: "In Progress",
        postedDate: "Mar 05, 2026",
        deadline: "Apr 15, 2026",
        description: "Build a modern responsive React storefront with dynamic cart, checkout, and Stripe integration.",
        skills: "React, Node.js, Stripe, MongoDB"
    },
    {
        id: 2,
        title: "Portfolio Website Design",
        category: "Website Development",
        clientName: "Creative Minds Inc.",
        clientEmail: "contact@creativeminds.io",
        freelancerName: "Ayush Yadav",
        budget: "₹15,000",
        rawBudget: 15000,
        status: "In Progress",
        postedDate: "Mar 08, 2026",
        deadline: "Mar 25, 2026",
        description: "Create an interactive creative portfolio with sleek micro-animations and responsive gallery.",
        skills: "React, CSS Animations, Responsive Design"
    },
    {
        id: 3,
        title: "API Integration & Bug Fixing",
        category: "API Development",
        clientName: "Global Logistics",
        clientEmail: "operations@globallogistics.com",
        freelancerName: "Ayush Yadav",
        budget: "₹18,000",
        rawBudget: 18000,
        status: "In Progress",
        postedDate: "Mar 10, 2026",
        deadline: "Mar 30, 2026",
        description: "Resolve REST webhook timeouts and optimize shipment tracking database queries.",
        skills: "Node.js, Express, MongoDB, REST APIs"
    },
    {
        id: 4,
        title: "FinTech Mobile App UI/UX Redesign",
        category: "UI/UX Design",
        clientName: "Rahul Verma (FinEdge Labs)",
        clientEmail: "rahul.verma@finedgelabs.com",
        freelancerName: "Priya Sharma",
        budget: "₹32,000",
        rawBudget: 32000,
        status: "In Progress",
        postedDate: "Feb 28, 2026",
        deadline: "Apr 02, 2026",
        description: "Complete redesign of 25+ screens for next-generation consumer mobile banking application.",
        skills: "Figma, Design Systems, Mobile UI, Prototyping"
    },
    {
        id: 5,
        title: "AI Customer Support Chatbot",
        category: "AI & Machine Learning",
        clientName: "Vishwam Bhatt (TechStore India)",
        clientEmail: "support@techstore.in",
        freelancerName: "Sneha Patel",
        budget: "₹55,000",
        rawBudget: 55000,
        status: "Open",
        postedDate: "Mar 14, 2026",
        deadline: "May 01, 2026",
        description: "RAG-powered conversational assistant to handle order queries, refunds, and product recommendations.",
        skills: "Python, OpenAI API, LangChain, Vector DB"
    },
    {
        id: 6,
        title: "Brand Identity & Guidelines",
        category: "Graphic Design",
        clientName: "Creative Minds Inc.",
        clientEmail: "contact@creativeminds.io",
        freelancerName: "Priya Sharma",
        budget: "₹22,000",
        rawBudget: 22000,
        status: "Completed",
        postedDate: "Jan 10, 2026",
        deadline: "Feb 15, 2026",
        description: "Complete visual brand language including typography, color system, logos, and vector assets.",
        skills: "Branding, Illustrator, Photoshop, Typography"
    }
];

export const getAdminUsers = () => {
    try {
        const stored = localStorage.getItem("fh_admin_users");
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch (e) {
        console.error(e);
    }
    localStorage.setItem("fh_admin_users", JSON.stringify(INITIAL_USERS));
    return INITIAL_USERS;
};

export const saveAdminUsers = (users) => {
    try {
        localStorage.setItem("fh_admin_users", JSON.stringify(users));
    } catch (e) {
        console.error(e);
    }
};

export const deleteAdminUser = (id) => {
    const users = getAdminUsers();
    const updated = users.filter((u) => u.id !== Number(id));
    saveAdminUsers(updated);
    return updated;
};

export const updateAdminUser = (id, updatedUser) => {
    const users = getAdminUsers();
    const updated = users.map((u) =>
        u.id === Number(id) ? { ...u, ...updatedUser, id: Number(id) } : u
    );
    saveAdminUsers(updated);
    return updated;
};

export const getAdminProjects = () => {
    try {
        const stored = localStorage.getItem("fh_admin_projects");
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch (e) {
        console.error(e);
    }
    localStorage.setItem("fh_admin_projects", JSON.stringify(INITIAL_PROJECTS));
    return INITIAL_PROJECTS;
};

export const saveAdminProjects = (projects) => {
    try {
        localStorage.setItem("fh_admin_projects", JSON.stringify(projects));
    } catch (e) {
        console.error(e);
    }
};

export const deleteAdminProject = (id) => {
    const projects = getAdminProjects();
    const updated = projects.filter((p) => p.id !== Number(id));
    saveAdminProjects(updated);
    return updated;
};

export const updateAdminProject = (id, updatedProject) => {
    const projects = getAdminProjects();
    const updated = projects.map((p) =>
        p.id === Number(id) ? { ...p, ...updatedProject, id: Number(id) } : p
    );
    saveAdminProjects(updated);
    return updated;
};
