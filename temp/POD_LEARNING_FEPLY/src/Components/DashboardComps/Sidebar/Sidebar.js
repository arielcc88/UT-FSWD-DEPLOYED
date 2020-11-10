import React from "react";
import UserPanel from './userPanel'; 
 
function DashboardSidebar (props) {
    
      return (
        <div className='sidebar-container'>
          <div className='page-sidebar'>
            <UserPanel />
            <ul>
              <li>Dashboard</li>
              <li>Manage Learners</li>
              <li>Manage Courses</li>
              <li>Analytics</li>
            </ul>
          </div>
        </div>
      );
};

 
export default DashboardSidebar;


