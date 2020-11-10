import React, {useState} from 'react';
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../../App.css";
import "../../../instructor.css";


export default function DashboardCoursesTable( props ) {
    const { courses } = props;

    const history = useHistory();
    //redirecting function
    const redirectRouter = (routePath) => {
        history.push(routePath);
    }
  
    const renderRows = () => {
            return  
                courses.map((course) => 
                    <tr key={course.id}>
                        <td>{course.course_name}</td>
                        <td>75%</td>
                        <td>8.3</td>
                        <td>15 learners</td>
                        {/* <td>
                            <Button className="InsBtn AddStu primary-button" onClick={() => {setUpdateStudentModal(true)}}>Update</Button>
                            <Button variant="danger" id="delButton">Delete</Button>
                        </td> */}
                    </tr>
                )
           
    };
    

    return (
        <div className='courses-table'>
            <div className="dashboard-table-header">
                <h3>Top Performing Courses</h3>
                <Button className="primary-button dashboard-button" onClick={() => {redirectRouter('/instructor/courses')}}>View All</Button> 
            </div>
            <Table className="table-expand">
                <thead>
                    <tr className="table-expand-row">
                        <th >Course Name</th>
                        <th >Avg. Attendance %</th>
                        <th >Avg. Engagement Score</th>
                        <th ># Enrolled</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody id="emptyTable">
                {renderRows()}
                </tbody>
            </Table>
            {/* <UpdateStudentModal show={updateStudentModal} onHide={() => setUpdateStudentModal(false)} /> */}
        </div>
    )
            
};