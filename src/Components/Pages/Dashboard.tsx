import React, { useState } from "react";

import Sidebar from "../sidebar/Sidebar";
import Header from "../Header";

interface IOpen {
  sidebarOpen: boolean;
  setSidebarOpen: boolean;
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
      </div>
    </div>
  );
}
export default Dashboard;
