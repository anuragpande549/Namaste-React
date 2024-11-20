import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Body() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
