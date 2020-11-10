import React, {useState} from 'react';
import {Jumbotron, Button } from "react-bootstrap";
import StudentCard from "../Components/StudentComps/StuCourseCard";
import "../instructor.css";


export default function InsCourseRoster(props) {
    const [stuList, setStudent] = useState();
    const [coursesList, setCourses] = useState(false);


    return (
        < > 
            <Jumbotron className="InsLanding-background homepage-background">
                <div className="InsLanding-content homepage-content">
                    <h1 className="">POD | {props.courseName} Roster</h1>
                    <p>
                        Manage your {props.courseName} student roster
                    </p>
                    <p className="btngroup">
                        <Button className="InsBtn AddStu primary-button">ADD STUDENTS</Button>{' '}
                        <Button className="InsBtn Dashboard primary-button">BACK TO GLOBAL ROSTER</Button>{' '}
                    </p>
                </div>
            </Jumbotron>
            <StudentCard />
        </>
        
        


    )
}