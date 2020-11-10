import React, {useState, useEffect} from 'react'; 
import { useSelector, useDispatch } from "react-redux";
import DashboardCalendar from '../DashboardComps/Calendar/DashboardCalendar';
import DashboardSidebar from '../DashboardComps/Sidebar/Sidebar';
import DashboardStudentTable from '../DashboardComps/Tables/DashboardStudentTable';
import DashboardCoursesTable from '../DashboardComps/Tables/DashboardCoursesTable';
import { getStuRoster, getCourses } from "../../actions";
import "../../App.css";


export default function Dashboard() {

    const dispatch = useDispatch();
    //importing global state
    const [authObj, stuRoster, courses] = useSelector((gState) => [
        gState.authObj, 
        gState.stuRoster,
        gState.courses

    ]);
   
    //Use effect for mounting student Roster
    useEffect(() => {
        dispatch(getStuRoster(authObj.accessToken));
    },[]);

    useEffect(() => {
        dispatch(getCourses(authObj.accessToken));
    },[authObj.accessToken]);

    return (
        <div className="dashboard-container">
             <DashboardSidebar />
             <div className="dashboard-content-container">
                <div className="calendar-container">
                    <DashboardCalendar />
                    <DashboardStudentTable stuRoster={ stuRoster }/>
                </div>
                <div className="courses-container">
                    <DashboardCoursesTable courses={ courses }/>
                </div>
            </div>
        </div>
    )
};

