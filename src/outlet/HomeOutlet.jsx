import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function HomeOutlet() {

    return (
        <div className="dashboard">
            <Sidebar />
            <Outlet />
        </div>
    )
}