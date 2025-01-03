import React, { useState } from "react";
import Body from "../components/layout/Body";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <div className="w-full">
          <Header onMenuClick={toggleSidebar} />
        </div>
        <main className="flex-1 p-6 bg-gray-50 w-full">
          <Body />
        </main>
      </div>
    </div>
  );
};

export default Home;
