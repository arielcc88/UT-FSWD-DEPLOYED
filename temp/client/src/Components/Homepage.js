import React, {useState, useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import LoginModal from './LoginModal';
import InstructorSignupModal from './InstructorSignupModal';
import { Jumbotron, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
// import { logoutAttempt } from "../actions";
import Dashboard from "./InstructorComps/Dashboard"
import LandingPage from './LandingPage';
import "../App.css";


function Homepage() {
    //loginWithRedirect from auth0 SDK context
    const { loginWithRedirect } = useAuth0();
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [signupModalShow, setSignupModalShow] = useState(false);

    //importing global state
    const [isAuthenticatedUser, isLoggedOutSuccess, authObj] = useSelector((gState) => [
        gState.isAuthenticatedUser,
        gState.isLoggedOutSuccess,
        gState.authObj,
    ]);
    //useHistory hook to redirect to desired routes
    const history = useHistory();

    //using useEffect to track isAuthenticatedUser changes
    //and hide login modal after successfull signin
    useEffect(() => {
        if (isAuthenticatedUser){
            setLoginModalShow(false);
        }
        if(!isAuthenticatedUser && isLoggedOutSuccess){
            redirectRouter("/");
        }
    }, [isAuthenticatedUser, isLoggedOutSuccess]);

    //redirecting function
    const redirectRouter = (routePath) => {
        history.push(routePath);
    }

    return (
        < >
            <Jumbotron className="homepage-background" tag="div">
                <div className="homepage-content">
                    <h1 tag="div" className="">POD | E-Learning</h1>
                    <p tag="div">
                        Revolutionizing distance learning for small format learning groups of all ages.
                    </p>
                    <p tag="div">
                        {!isAuthenticatedUser && (
                        <div>
                            {/* <Button className="homepage-buttons primary-button" variant="primary" onClick={() => setLoginModalShow(true)}>Login</Button> */}
                            <Button className="homepage-buttons primary-button" variant="primary" onClick={() => loginWithRedirect()}>Login</Button>
                            <Button className="homepage-buttons" variant="lighterDark" onClick={() => setSignupModalShow(true)}>Become an Instructor</Button>
                        </div>
                        )}
                        
                        <LoginModal show={loginModalShow} onHide={() => setLoginModalShow(false)} />
                        <InstructorSignupModal show={signupModalShow} onHide={() => setSignupModalShow(false)} />
                    </p>
                </div>

                {/* {isAuthenticatedUser && (<Button className="homepage-buttons primary-button" variant="primary" onClick={() => redirectRouter()}>My Dashboard</Button>)} */}
            </Jumbotron>
            
            {!isAuthenticatedUser && (<LandingPage></LandingPage>)}
            {isAuthenticatedUser && (<Dashboard></Dashboard>)}
        </>
    )
}

export default Homepage;