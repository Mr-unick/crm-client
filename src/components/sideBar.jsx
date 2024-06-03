import React, { useState } from "react";
import { Menu, X, Home, User, Briefcase, Inbox, Settings, Mail, UploadCloud, Users, BellDot } from "lucide-react";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { icon: <Home size={20} />, label: "Dashboard", link: "/dash" },
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
    <div className="flex h-screen">
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 hover:text-gray-900 transition duration-200 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative bg-gray-800 text-white transition-transform duration-300 ease-in-out w-[11rem] h-screen flex flex-col justify-between`}
      >
        <div>
          <div className="px-6 py-4"></div>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
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
          </nav>
        </div>
        <div className="px-6 py-4">
          <button className="bg-gray-700 text-white py-1 px-4 rounded-md hover:bg-gray-600 transition duration-200 w-full">
            Logout 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
