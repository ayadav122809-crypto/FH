import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import FreelancerDashboard from './pages/FreelancerDashboard.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import UserContextProvider from './context/UserContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FreelancerDashboard/> */}
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>

  </StrictMode>,
)
