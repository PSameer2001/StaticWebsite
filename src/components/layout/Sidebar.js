import React from "react";
import {
  LayoutGrid,
  Users,
  BarChart3,
  Package,
  Database,
  Calendar,
  FileText,
  Gift,
  UserCheck
} from "lucide-react";

const MenuItem = ({ icon: Icon, text, active }) => (
  <div
    className={`flex items-center space-x-3 px-4 py-2 text-sm ${
      active
        ? "bg-gray-700 text-white"
        : "text-gray-400 hover:bg-gray-700 hover:text-white"
    }`}
  >
    <Icon size={18} />
    <span>{text}</span>
  </div>
);

const Sidebar = ({ isOpen }) => {
  
  const menuItems = [
    { icon: LayoutGrid, text: "MLP Dashboard", active: true },
    { icon: LayoutGrid, text: "RLP Dashboard", active: false },
    { icon: Users, text: "View Retailer", active: false },
    { icon: BarChart3, text: "User Insights", active: false },
    { icon: Database, text: "SKU-wise Data", active: false },
    { icon: Package, text: "Slab-based Consumption", active: false },
    { icon: Calendar, text: "View Redemption", active: false },
    { icon: FileText, text: "View Expiry", active: false },
    { icon: Gift, text: "View Transaction", active: false },
    { icon: Gift, text: "Rewards Catalogue", active: false },
    { icon: UserCheck, text: "User Activity", active: false },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-gray-800 min-h-screen transition-all duration-300 overflow-hidden top-0 left-0`}
    >
      <div className="p-4">
        <img
          src="https://via.placeholder.com/150x50"
          alt="Logo"
          className="h-12"
        />
        <label className="text-white">Engine Club</label>
      </div>
      <div className="mt-4 text-gray-400 text-xs px-4">MENU</div>
      <nav className="mt-2">
      {menuItems.map((item, index) => (
          <MenuItem key={index} icon={item.icon} text={item.text} active={item.active} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
