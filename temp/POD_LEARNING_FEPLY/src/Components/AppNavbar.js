import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {Navbar, NavDropdown, Nav, Button} from "react-bootstrap";
import { logoutAttempt } from "../actions";
import pod_logo from './pod_logo.png';
import "../App.css";


export default function AppNavbar() {
    const dispatch = useDispatch();

    const [isAuthenticatedUser, isLoggedOutSuccess, authObj] = useSelector((gState) => [
        gState.isAuthenticatedUser,
        gState.isLoggedOutSuccess,
        gState.authObj,
    ]);

    const history = useHistory();
    
    useEffect(() => {
        if(!isAuthenticatedUser && isLoggedOutSuccess){
            redirectRouter("/");
        }
    }, [isLoggedOutSuccess]);
    
    const redirectRouter = (routePath) => {
        history.push(routePath);
    }

    const performUserLogout = () => {
        if(isAuthenticatedUser){
        //dispatch logout action
            dispatch(logoutAttempt())
        }
    };  
   
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <img className="pod-logo" src={pod_logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav.Link href="#Mission">Our Why</Nav.Link>
            <Nav.Link href="#Team">Our Team</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>

            {isAuthenticatedUser && (<Navbar.Collapse className="justify-content-end">
                <Navbar.Text>Signed in as:</Navbar.Text>
                <NavDropdown title={authObj.fname} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Student Roster</NavDropdown.Item>
                    <NavDropdown.Item href="#">Lesson Builder</NavDropdown.Item>
                    <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.2">My Profile</NavDropdown.Item> */}
                </NavDropdown>
                <Button className="homepage-buttons" variant="lighterDark" onClick={() => performUserLogout()}>Logout</Button>
            </Navbar.Collapse>)}
        </Navbar>
    )
};
