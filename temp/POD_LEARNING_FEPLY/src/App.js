import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
//Importing pages
import Home from "./pages/Home";
import PortalLanding from "./pages/PortalLanding";
import InsStudentRoster from "./pages/InsStudentRoster";
import InsCourseRoster from "./pages/InsCourseRoster";
import InsCourses from "./pages/InsCoursePage";
import ResetPassword from "./pages/ResetPassword";
import AdminLandingPage from "./pages/AdminLandingPage"
import AdminInstructorView from "./pages/AdminInstructorView"
import AdminStudentView from "./pages/AdminStudentView"
import StuCoursePage from "./pages/StuCoursePage"
import StuLessonPage from "./pages/StuLessonPage"
//Protected Route component
import ProtectedRoute from "./Components/ProtectedRoute";
import Unauthorized from "./Components/Unauthorized";
//Importing CSS
import "./scss/Custom.scss"
import "./App.css";
import InsLessonPage from "./pages/InsLessonPage";
import AppNavbar from "./Components/AppNavbar";
import Footer from "./Components/Footer";
import Dashboard from "./Components/InstructorComps/Dashboard";
import LandingPage from "./Components/LandingPage";

function App() {
  //importing from global state
  const [isAuthenticatedUser, authObj] = useSelector((gState) => [
    gState.isAuthenticatedUser,
    gState.authObj,
  ]);

  //verify __session validity if user is authenticated
  const isSessionValid = () => {
    if (isAuthenticatedUser) return authObj;
    return false;
  }

  return (
    <div>
      <AppNavbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/student/courses" component={StuCoursePage} />
        <Route exact path="/student" auth={isSessionValid()} component={Dashboard} />
        <Route exact path="/student/courses/lessons" component={StuLessonPage} />
        <ProtectedRoute exact path="/instructor/courses"auth={isSessionValid()} component={InsCourses} />
        <ProtectedRoute exact path="/instructor/courses/lessons" auth={isSessionValid()} component={InsLessonPage} />
        <ProtectedRoute exact path="/instructor" auth={isSessionValid()} component={Dashboard} />
        <ProtectedRoute exact path="/instructor/student-roster" auth={isSessionValid()} component={InsStudentRoster} />
        <ProtectedRoute exact path="/instructor/courses/:id/roster" auth={isSessionValid()} component={InsCourseRoster} />
        <ProtectedRoute exact path="/admin" auth={isSessionValid()} component={AdminLandingPage} />
        <ProtectedRoute exact path="/admin/view/instructors" auth={isSessionValid()} component={AdminInstructorView} />
        <ProtectedRoute exact path="/admin/view/students" auth={isSessionValid()} component={AdminStudentView} />
        {/* <Route exact path="/instructor" component={PortalLanding} /> */}
        <Route exact path="/unauthorized" component={Unauthorized} />
        <Route exact path="/user/auth/set-password" component={ResetPassword} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
