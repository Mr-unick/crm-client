import React, { useState } from "react";
import { Menu, X, Home, User, Briefcase, Inbox, Settings, Mail, UploadCloud, Users, BellDot, BellDotIcon } from "lucide-react";
import { LoginContext } from "@/App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Sidebar = () => {
const [isOpen, setIsOpen] = useState(false);
 const navigate=useNavigate()

let loggedinuser = sessionStorage.getItem("user");
let user =JSON.parse(loggedinuser);
let level =user?.level;

  const toggleSidebar = () => {

    setIsOpen(!isOpen);
    
  };

  const LogOut=()=>{
    sessionStorage.removeItem('user');
    sessionStorage.removeItem("isadmin");
    navigate('/')
    toast.success("Logged Out")
    
  }

  const navItems = [
    { icon: <Home size={20} />, label: "Dashboard", link: "/dash" },
    { icon: <BellDotIcon size={20} />, label: "Remainder", link: "/remainders" },
    {
      icon: <BellDot size={20} />,
      label: "New Leads",
      link: "/dash/newleads",
    },
    {
      icon: <Users size={20} />,
      label: "Collabrators",
      link: "/dash/collabrators",
    },
    {
      icon: <UploadCloud size={20} />,
      label: "Upload Leads ",
      link: "/dash/uploadleads",
    },
    { icon: <Mail size={20} />, label: "Email List", link: "/dash/emails" },
    { icon: <Settings size={20} />, label: "Settings", link: "/dash" },
  ];

  return (
    <div className="flex h-screen ">
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 hover:text-gray-900 transition duration-200 focus:outline-none z-50"
          onClick={toggleSidebar}
        >
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0 w-[50%] z-50" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative bg-gray-800 text-white transition-transform duration-300 ease-in-out w-[11rem] h-screen flex flex-col justify-between`}
      >
        <div>
          <div className="px-6 py-4 relative">
            <div className="md:hidden">
              <button
                className="p-1 text-gray-700 hover:text-gray-900 transition duration-200 focus:outline-none z-50 absolute top-0 right-0"
                onClick={toggleSidebar}
              >
                {isOpen ? <X size={24} color="white" /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          <nav>
            {level==="admin" ? (
              <ul className="space-y-2 z-50">
                {navItems.map((item, index) => (
                  <li key={index} className="z-50">
                    <a
                      href={item.link}
                      className="flex items-center px-6 py-3 hover:bg-gray-700 rounded-md transition duration-200"
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2 z-50">
                <li className="z-50">
                  <a
                    href={"/dash"}
                    className="flex items-center px-6 py-3 hover:bg-gray-700 rounded-md transition duration-200"
                  >
                    <span className="mr-3">
                      <Home size={20} />
                    </span>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="z-50">
                  <a
                    href={"/remainders"}
                    className="flex items-center px-6 py-3 hover:bg-gray-700 rounded-md transition duration-200"
                  >
                    <span className="mr-3">
                      <BellDotIcon size={20} />
                    </span>
                    <span>Remainders</span>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
        <div className="px-4 py-4">
          <div className="my-5">
            <p className="text-gray-200 font-bold">{user?.name}</p>
            <p className="text-gray-200 ">
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </p>
            <p className="text-gray-300 text-sm">{user?.email}</p>
          </div>
          <button
            onClick={LogOut}
            className="bg-gray-700 text-white py-1 px-4 rounded-md hover:bg-gray-600 transition duration-200 w-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
