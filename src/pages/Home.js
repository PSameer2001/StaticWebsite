import React, { useEffect, useState } from "react";
import Body from "../components/layout/Body";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex min-h-screen">
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-44' : ''}`}>
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-1 p-6 bg-gray-50 mt-6">
          <Body />
        </main>
      </div>
    </div>
  );
};

export default Home;
