import { BrowserRouter, Routes, Route } from "react-router-dom"
import FreelancerDashboard from "../pages/FreelancerDashboard"
import FreelancerProfile from "../pages/FreelancerProfile"
import MyProjects from "../pages/MyProjects"
import HomeOutlet from "../outlet/HomeOutlet"
import HomePage from "../pages/Homepage"
import FindWork from "../pages/FindWork"
import Chat from "../pages/Chat"
import Payments from"../pages/Payments"
import Login from "../pages/Login"
import Registration from "../pages/Registration"
import ProjectDetails from"../pages/ProjectDetails"
import AdminOutlet from "../outlet/AdminOutlet"
import AdminLogin from "../pages/admin/AdminLogin"
import AdminDashboard from "../pages/admin/AdminDashboard"
import ManageUsers from "../pages/admin/ManageUsers"
import EditUser from "../pages/admin/EditUser"
import ManageProjects from "../pages/admin/ManageProjects"
import EditProjects from "../pages/admin/EditProjects"
import EditProfile from "../pages/EditProfile"
import ClientDashboard from "../pages/ClientDashboard"
import ClientFreelancerprofile from "../pages/ClientFreelancerprofile"
import FindFreelancers from "../pages/FindFreelancers"
import ClientChat from "../pages/ClientChat"
import ClientFinancialanalytics from "../pages/ClientFinancialanalytics"
import PostProjects from "../pages/PostProjects"
import OngoingProjects from "../pages/OngoingProjects"
import ClientProjectDetails from "../pages/ClientProjectDetails"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/> 
                <Route path='/login' element={<Login />}/> 
                <Route path='/registration' element={<Registration/>}/>
                
                
                
         
                {/* ADMIN ROUTES */}
                <Route path='/admin/login' element={<AdminLogin />} />
                <Route path='/admin' element={<AdminOutlet />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path='dashboard' element={<AdminDashboard />} />
                    <Route path='users' element={<ManageUsers />} />
                    <Route path='users/edit/:id' element={<EditUser />} />
                    <Route path='projects' element={<ManageProjects />} />
                    <Route path='projects/edit/:id' element={<EditProjects/>} />
                </Route>

                <Route path="/app" element={<HomeOutlet/>}>
                    {/* <Route path="" element={<FreelancerDashboard/>} /> */}
                     <Route path='projectdetails' element={<ProjectDetails/>}/>
                     <Route path='projectdetails/:id' element={<ProjectDetails/>}/>
                    <Route path='findwork' element={<FindWork/>} ></Route>
                    <Route path='myprojects' element={<MyProjects />}></Route>
                    <Route path='chat' element={<Chat/>}></Route>
                    <Route path='payments' element={<Payments/>}></Route>
                    <Route path='freelancerprofile' element={<FreelancerProfile/>}></Route>
                    <Route path='editprofile' element={<EditProfile/>}></Route>
                    <Route path='clientdashboard' element={<ClientDashboard/>}></Route>
                    <Route path='' element={<FreelancerDashboard/>}></Route>
                     <Route path='clientchat' element={<ClientChat/>}></Route>
                     <Route path='findfreelancers' element={<FindFreelancers/>}></Route>
                     <Route path='postprojects' element={<PostProjects/>}></Route>
                      <Route path='ongoingprojects' element={<OngoingProjects/>}></Route>
                      <Route path='clientprojectdetails' element={<ClientProjectDetails/>}></Route>
                       <Route path='clientprojectdetails/:id' element={<ClientProjectDetails/>}></Route>

                     <Route path='clientfinancialanalytics' element={<ClientFinancialanalytics/>}></Route>

                   
                </Route>
            </Routes>
        </BrowserRouter>
    )
}