import React, {useState} from 'react';
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import UpdateStudentModal from '../../../Components/InstructorComps/UpdateStudentModal';
import "../../../App.css";
import "../../../instructor.css";


export default function DashboardStudentTable( props ) {
    const { stuRoster } = props;
    // const [updateStudentModal, setUpdateStudentModal] = useState({
    //   updateStudentModal: UpdateStudentModal,
    //   setUpdateStudentModal: false

    // });
    const history = useHistory();
    //redirecting function
    const redirectRouter = (routePath) => {
        history.push(routePath);
    }
    
    const renderRows = () => {
        return stuRoster.map((student, id) =>{
            return(
                <>
                    {student.Users.map(user =>
                    <tr key={id}>
                        <td>{student.course_name}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        {/* <td>{user.email}</td> */}
                        <td>80</td>
                        {/* <td>
                            <Button className="InsBtn AddStu primary-button" onClick={() => {setUpdateStudentModal(true)}}>Update</Button>
                            <Button variant="danger" id="delButton">Delete</Button>
                    </td> */}
                    </tr>
                    )}
                </>
            )
        })
    };

    return (
        <div className='calendar-row-item'>
            <div className="dashboard-table-header">
                <h3>Top Students By Engagement</h3>
                <Button className="primary-button dashboard-button" onClick={() => {redirectRouter('/instructor/student-roster')}}>View All</Button> 
            </div>
            <Table className="table-expand">
                <thead>
                    <tr className="table-expand-row">
                        <th >Course Name</th>
                        <th >First Name</th>
                        <th >Last Name</th>
                        <th >Engagement Score</th>
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