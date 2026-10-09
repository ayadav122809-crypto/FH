import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminOutlet() {
    return (
        <div className="dashboard admin-dashboard-layout">
            <AdminSidebar />
            <Outlet />
        </div>
    );
}
