import React from "react";
import { Menu, ChevronDown } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-full px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onMenuClick}
              >
                <Menu size={24} />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-blue-500">
                  OPERATIONS ADMIN
                </span>
                <div className="flex flex-row">
                <span className="text-sm text-gray-600">Rahul Lad  </span>
                <ChevronDown size={16} className="text-gray-400 mt-1" />
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </header>

      {/* <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">OPERATIONS ADMIN</span>
          <div className="flex items-center">
            <span className="bg-blue-100 p-2 rounded-full">RL</span>
            <span className="ml-2 text-gray-700">Rahul Lad</span>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
