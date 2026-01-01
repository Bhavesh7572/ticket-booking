/*import React from 'react'

const Header = () => {
  return (
    <div>
      <p>Header Component</p>
    </div>
  )
}

export default Header*/


import { NavLink, useNavigate } from "react-router-dom";
import { Bell, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const navClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 border-b-2 border-orange-500 pb-1 font-semibold"
      : "text-gray-700 hover:text-orange-500 font-medium";
  return (
    <header className="flex justify-between items-start px-10 py-4 bg-white border border-gray-200 shadow-sm">

      {/* LEFT SECTION */}
      <div className="flex flex-col gap-3">

        {/* BRAND ROW */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center">
            <img src="/logo.svg" alt="logo" className="w-8" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              TicketHub
            </h2>
            <p className="text-sm text-gray-500">
              Hi, User
            </p>
          </div>
        </div>

        {/* NAVIGATION UNDER BRAND */}
        <nav className="flex gap-8 ">
          <NavLink to="/user/UserDashboard" end className={navClass}>
            Dashboard
          </NavLink>

          <NavLink to="/user/MyBooking" end className={navClass}>
            My Bookings
          </NavLink>

          <NavLink to="/user/UserEvent" end className={navClass}>
            Events
          </NavLink>

          <NavLink to="/user/profile" end className={navClass}>
            Profile
          </NavLink>
        </nav>

      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4 mt-2">
        <Bell className="text-gray-600 cursor-pointer" />

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

    </header>
  );
};

export default Header;
