import React, { useContext } from "react";
import Navbar from "../Pages/Shered/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import UseAdmin from "../Hooks/UseAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard">MyAppointments</Link>
            </li>
           {
            isAdmin && 
            <>
            
            <li className="mt-4">
              <Link to="/dashboard/allusers">Al Users</Link>
            </li>
            <li className="mt-4">
              <Link to="/dashboard/addDoctor">Add Doctor</Link>
            </li>
            <li className="mt-4">
              <Link to="/dashboard/managedoctors">Manage Doctors</Link>
            </li>
            </>
           }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
