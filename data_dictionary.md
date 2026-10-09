# Freelance Hub - Comprehensive Data Dictionary (SRS Documentation)

This Data Dictionary defines all data stores, entities, composite data structures, and data elements used across the **Freelance Hub** web application. It matches 100% of the active frontend pages, React context, and backend REST API schemas.

---

## 1. Summary of Data Stores (Repositories)

| Data Store ID | Data Store Name | Description | Associated Website Pages / Components |
|---|---|---|---|
| **D1** | `Users & Profiles Store` | Stores user credentials, contact information, role assignments (`Freelancer`/`Client`), fixed rates, and profile bios. | `/registration`, `/login`, `/app/freelancerprofile`, `/app/editprofile`, `/admin/users` |
| **D2** | `Projects & Job Catalog Store` | Stores all client-posted projects, required tech skills, categories, fixed budgets in INR (₹), and project statuses. | `/app/postprojects`, `/app/findwork`, `/app/projectdetails`, `/app/myprojects`, `/admin/projects` |
| **D3** | `Proposals Store` | Stores freelancer applications, cover pitches, proposed fixed prices (₹), and acceptance statuses. | `/app/projectdetails`, `/app/clientdashboard`, `/app/myprojects` |
| **D4** | `Messages & Chat Store` | Stores direct communication between clients and freelancers, deliverable links, and timestamps. | `/app/chat`, `/app/clientchat` |
| **D5** | `Payments & Invoices Store` | Stores Razorpay test payment orders, transaction signatures, client expenditures, and freelancer earnings balances. | `/app/payments`, `/app/clientfinancialanalytics`, `/admin/dashboard` |
| **D6** | `Admin Accounts & Management Store` | Stores administrator authentication credentials, access rights, and administrative session management. | `/admin/login`, `/admin`, `/admin/dashboard`, `/admin/users`, `/admin/projects` |

---

## 2. Entity & Data Store Dictionaries

### 2.1. D1: Users & Profiles Store (`users`)
Stores both Freelancers and Clients.

| Field Name | Data Type | Constraints | Description | Example / Allowed Values |
|---|---|---|---|---|
| `_id` / `id` | ObjectId / Integer | **Primary Key**, Auto-Gen | Unique identifier for each registered account. | `1` / `"65f1a8e2b9c7d41"` |
| `username` / `name` | String(100) | Required | Full legal or business display name of the user. | `"Ayush Yadav"` |
| `email` | String(150) | Required, Unique | Login email address and official communication channel. | `"ayushyadav@freelancehub.com"` |
| `password` | String(255) | Required, Hashed | Account password (encrypted on backend). | `"********"` |
| `role` | String(20) | Required | Account permission role. | `"Freelancer"`, `"Client"` |
| `title` / `domain` | String(100) | Optional | Professional headline or business title. | `"Full Stack Developer"` |
| `phone` | String(20) | Optional | Contact phone number with country code. | `"+91 98765 43210"` |
| `location` | String(100) | Optional | City, State, and Country of residence. | `"Gujarat, India"` |
| `skills` | Array / String | Optional | Comma-separated or array of verified professional skills. | `"React, Node.js, JavaScript, MERN Stack"` |
| `fixedRate` / `fixedBudget` | Number / String | Optional | Standard fixed project rate or budget (INR ₹). | `45000` / `"₹45,000"` |
| `bio` / `description` | Text | Optional | Profile summary, professional background, and experience. | `"Full Stack Developer specializing in modern web..."` |
| `status` | String(20) | Default: `"Active"` | Account moderation status set by Admin. | `"Active"`, `"Pending"`, `"Suspended"` |
| `projectsCount` | Integer | Default: `0` | Total number of assigned or published projects. | `6` |
| `profileImg` | String(255) | Default: `"default.png"` | Path or URL to avatar profile image. | `"myimg.png"` |
| `joinDate` | Date / String | Auto-Gen | Date when account was created. | `"Jan 15, 2026"` |

---

### 2.2. D2: Projects & Job Catalog Store (`projects`)
Stores client project specifications, budgets, and operational states.

| Field Name | Data Type | Constraints | Description | Example / Allowed Values |
|---|---|---|---|---|
| `_id` / `id` | ObjectId / Integer | **Primary Key**, Auto-Gen | Unique identifier for each posted project. | `1` / `"66a2b8f1c8e9"` |
| `title` / `name` | String(150) | Required | Descriptive title of the project. | `"E-commerce Website Development"` |
| `category` | String(50) | Required | Industry category / classification. | `"Website Development"`, `"UI/UX Design"`, `"AI & ML"`, `"API Development"` |
| `client` / `clientId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `users._id` | User ID of the client who posted the project. | `2` |
| `clientName` | String(100) | Denormalized | Company or individual name of the hiring client. | `"Vishwam Bhatt (TechStore India)"` |
| `clientEmail` | String(150) | Denormalized | Contact email of the project client. | `"vishwam.bhatt@techstore.in"` |
| `freelancerName` | String(100) | Optional | Name of the hired freelancer (assigned on proposal award). | `"Ayush Yadav"` |
| `description` | Text | Required | Complete project scope, objectives, and deliverables. | `"Build a modern responsive React storefront with dynamic cart..."` |
| `skills` | Array of Strings | Required | List of technical skills required for completion. | `["React", "Node.js", "Stripe", "MongoDB"]` |
| `budget` | String | Required | Fixed project budget displayed in INR (₹). | `"₹45,000"` |
| `rawBudget` | Number | Required | Numeric budget value in INR for calculations and summing. | `45000` |
| `deadline` | Date / String | Required | Target date or duration for final project delivery. | `"Apr 15, 2026"` / `"3 - 4 Weeks"` |
| `status` | String(25) | Default: `"Open"` | Current lifecycle status of the project. | `"Open"`, `"In Progress"`, `"Completed"`, `"Under Review"` |
| `proposalsCount` | Integer | Default: `0` | Number of submitted proposals received. | `5` |
| `file` | String(255) | Optional | Attachment specification or brief document name. | `"specification.pdf"` |
| `postedDate` | Date / String | Auto-Gen | Timestamp when project was published to marketplace. | `"Mar 05, 2026"` |

---

### 2.3. D3: Proposals Store (`proposals`)
Stores freelancer project proposals, proposed rates, and cover letters.

| Field Name | Data Type | Constraints | Description | Example / Allowed Values |
|---|---|---|---|---|
| `proposalId` | ObjectId / Integer | **Primary Key**, Auto-Gen | Unique identifier for each submitted proposal. | `101` |
| `projectId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `projects._id` | Reference to the project being applied for. | `1` |
| `freelancerId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `users._id` | Reference to the applying freelancer. | `1` |
| `freelancerName` | String(100) | Denormalized | Display name of the applicant freelancer. | `"Ayush Yadav"` |
| `proposedPrice` | Number | Required | Freelancer's fixed price quote in INR (₹). | `45000` |
| `deliveryTime` | String(50) | Required | Estimated turnaround time submitted by freelancer. | `"3 Weeks"` |
| `coverLetter` / `pitch` | Text | Required | Detailed pitch explaining suitability, tech stack, and portfolio references. | `"I have extensive experience building scalable MERN storefronts..."` |
| `status` | String(20) | Default: `"Pending"` | Decision status of the proposal by the client. | `"Pending"`, `"Accepted"`, `"Rejected"` |
| `submittedAt` | Date / String | Auto-Gen | Timestamp when the proposal was submitted. | `"2026-03-06T10:30:00Z"` |

---

### 2.4. D4: Messages & Chat Store (`messages`)
Stores communication logs and deliverable file exchanges.

| Field Name | Data Type | Constraints | Description | Example / Allowed Values |
|---|---|---|---|---|
| `messageId` | ObjectId / Integer | **Primary Key**, Auto-Gen | Unique identifier for each conversation entry. | `501` |
| `conversationId` | String(50) | Index | Grouping key for direct chat between two users. | `"user1_user2"` |
| `senderId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `users._id` | User ID of the participant sending the message. | `1` |
| `receiverId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `users._id` | User ID of the message recipient. | `2` |
| `projectId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `projects._id`, Opt | Associated project context (if applicable). | `1` |
| `messageText` | Text | Required | Content of the message. | `"I have uploaded the initial prototype for review."` |
| `fileAttachment` | String(255) | Optional | URL or filename of uploaded deliverable / screenshot. | `"deliverable_v1.zip"` |
| `timestamp` | Date / String | Auto-Gen | Exact time the message was dispatched. | `"11:45 AM, Mar 12, 2026"` |
| `isRead` | Boolean | Default: `false` | Read receipt indicator. | `true` / `false` |

---

### 2.5. D5: Payments & Invoices Store (`payments`)
Stores all Razorpay Test Mode transactions, client expenditures, and earnings.

| Field Name | Data Type | Constraints | Description | Example / Allowed Values |
|---|---|---|---|---|
| `paymentId` | ObjectId / Integer | **Primary Key**, Auto-Gen | Internal database payment reference ID. | `901` |
| `razorpayOrderId` | String(50) | Unique, Required | Mock order ID returned by Razorpay Orders API. | `"order_NZ94kL20dPlA"` |
| `razorpayPaymentId` | String(50) | Unique, Required | Transaction ID issued upon successful payment authorization. | `"pay_NZ98mQ71xKlB"` |
| `razorpaySignature`| String(100) | Required | HMAC SHA256 verification hash returned from checkout. | `"9a8b7c6d5e4f3a2b1c..."` |
| `projectId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `projects._id` | Associated project being compensated. | `1` |
| `clientId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `users._id` | Client who funded the payment. | `2` |
| `freelancerId` | ObjectId / Integer | **Foreign Key** $\rightarrow$ `users._id` | Freelancer receiving the project payout. | `1` |
| `amount` | Number | Required | Transaction total in Indian Rupees (INR ₹). | `45000` |
| `currency` | String(5) | Default: `"INR"` | Payment currency denomination. | `"INR"` |
| `paymentMethod` | String(20) | Required | Method used during mock checkout. | `"UPI"`, `"Card"`, `"NetBanking"` |
| `paymentStatus` | String(20) | Default: `"Success"` | Status of the payment gateway transaction. | `"Success"`, `"Pending"`, `"Failed"` |
| `invoiceNumber` | String(30) | Unique | Formatted billing invoice sequence code. | `"INV-FH-2026-0042"` |
| `createdAt` | Date / String | Auto-Gen | Timestamp when transaction was finalized. | `"Mar 15, 2026, 04:30 PM"` |

---

### 2.6. D6: Administrator & System Management (`admins`)
Consolidates all administrator credentials, authentication endpoints, session state, privileges, and platform management capabilities into a single unified table.

| Field Name | Data Type | Constraints | Description | Example / Allowed Values |
|---|---|---|---|---|
| `adminId` / `_id` | ObjectId / Integer | **Primary Key**, Auto-Gen | Unique identifier for the administrator account. | `1` / `"adm_001"` |
| `name` / `adminName` | String(100) | Required | Full display name of the administrator shown on dashboard & sidebar. | `"Ayush Yadav"` |
| `email` | String(150) | Required, Unique | Official administrator login email address. | `"admin@freelancehub.com"` |
| `password` | String(255) | Required, Hashed | Encrypted administrator password (`POST /freelancehub/admin/login`). | `"********"` |
| `role` | String(20) | Default: `"Admin"` | System role granting authorized access to `/admin/*` protected routes. | `"Admin"` |
| `accessLevel` | String(30) | Default: `"SuperAdmin"` | Privilege tier: full system authority over users, projects, and financials. | `"SuperAdmin"`, `"Moderator"` |
| `avatarInitials` | String(5) | Default: `"AD"` | Initials badge displayed in the Admin Sidebar bottom profile card. | `"AD"` |
| `status` | String(20) | Default: `"Active"` | Operational status of the administrative account. | `"Active"`, `"Inactive"` |
| `lastLogin` | Date / String | Auto-Gen | Timestamp of the most recent admin console login session. | `"Mar 29, 2026, 07:15 PM"` |
| `sessionToken` / `authKey` | String(255) | Session Scoped | Authentication token / session state verifying admin route authorization. | `"adm_session_token_xyz"` |
| `storageCacheKeys` | Array / String | System Defined | LocalStorage persistent keys for offline/fast admin store hydration. | `"fh_admin_users"`, `"fh_admin_projects"` |
| `managedUsersScope` | Object / JSON | System Defined | Complete CRUD permissions over **D1 (`users`)**: View, Search, Filter (Role / Status), Create new user, Edit fields (`name`, `email`, `role`, `title`, `phone`, `location`, `skills`, `bio`, `status`), and Delete user. | `{"canCreate": true, "canEdit": true, "canDelete": true, "canModerate": true}` |
| `managedProjectsScope` | Object / JSON | System Defined | Complete Moderation CRUD permissions over **D2 (`projects`)**: View, Search, Filter (Status / Category), Create project, Edit details (`title`, `category`, `clientName`, `clientEmail`, `freelancerName`, `budget`, `rawBudget`, `deadline`, `status`, `description`, `skills`), and Delete project. | `{"canCreate": true, "canEdit": true, "canDelete": true, "canAdjustBudget": true}` |
| `dashboardMetricsScope` | Object / JSON | System Defined | Automated platform metrics calculation displayed on Admin Dashboard: <br>• **Total Users** (Freelancers count + Clients count)<br>• **Active & Open Projects** (Contracts count)<br>• **Total Project Budget** (Sum of active contracts in INR ₹)<br>• **Pending Actions** (Unverified users & alerts count) | `{"totalUsers": 7, "activeProjects": 4, "totalBudget": "₹2,65,000", "pendingActions": 1}` |


