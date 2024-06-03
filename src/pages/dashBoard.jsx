import React from 'react'

import Sidebar from '../components/sideBar'
import { Outlet } from 'react-router-dom';



export const Dashboard = (props) => {

     
  return (
    <div className=" flex">
      <div className="fixed h-screen">
        <Sidebar />
      </div>
      <div className=" py-2  lg:ml-44 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
  }
