//defining LOGIN actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//defining LOGOUT actions
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

//defining Add Course Actions
export const ADD_COURSE_REQUEST = 'ADD_COURSE_REQUEST';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';
export const ADD_COURSE_FAILURE = 'ADD_COURSE_FAILURE';

//defining get Courses Actions
export const GET_COURSES_REQUEST = 'GET_COURSES_REQUEST';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';

// defining Add Students Actions
export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';

//Defining Action to pass course id from courseCard to global state
export const SET_COURSE_ID_SUCCESS = 'SET_COURSE_ID_SUCCESS';
export const SET_COURSE_ID_FAILURE = 'SET_COURSE_ID_FAILURE';
export const SET_COURSE_ID_REQUEST = 'SET_COURSE_ID_REQUEST';

// defining Add Lesson Actions
export const ADD_LESSON_REQUEST = 'ADD_LESSON_REQUEST';
export const ADD_LESSON_SUCCESS = 'ADD_LESSON_SUCCESS';
export const ADD_LESSON_FAILURE = 'ADD_LESSON_FAILURE';

//defining get lessons Actions
export const GET_LESSONS_REQUEST = 'GET_LESSONS_REQUEST';
export const GET_LESSONS_SUCCESS = 'GET_LESSONS_SUCCESS';
export const GET_LESSONS_FAILURE = 'GET_LESSONS_FAILURE';

//defining get  instructors Actions for admin
export const GET_ALL_INSTRUCTORS_REQUEST = 'GET_ALL_INSTRUCTORS_REQUEST';
export const GET_ALL_INSTRUCTORS_SUCCESS = 'GET_ALL_INSTRUCTORS_SUCCESS';
export const GET_ALL_INSTRUCTORS_FAILURE = 'GET_ALL_INSTRUCTORS_FAILURE';

//defining get students Actions for admin
export const GET_ALL_STUDENTS_REQUEST = 'GET_ALL_STUDENTS_REQUEST';
export const GET_ALL_STUDENTS_SUCCESS = 'GET_ALL_STUDENTS_SUCCESS';
export const GET_ALL_STUDENTS_FAILURE = 'GET_ALL_STUDENTS_FAILURE';

//defining roster actions
export const GET_ROSTER_REQUEST = 'GET_ROSTER_REQUEST';
export const GET_ROSTER_SUCCESS = 'GET_ROSTER_SUCCESS';
export const GET_ROSTER_FAILURE = 'GET_ROSTER_FAILURE';

//defining reset password constants
export const PASSRESTOK_VALIDATION_REQUEST = 'PASSRESTOK_VALIDATION_REQUEST';
export const PASSRESTOK_VALIDATION_SUCCESS = 'PASSRESTOK_VALIDATION_SUCCESS';
export const PASSRESTOK_VALIDATION_FAILURE = 'PASSRESTOK_VALIDATION_FAILURE';

//getting URL for video player
export const GET_URL_REQUEST = 'GET_URL_REQUEST';
export const GET_URL_SUCCESS = 'GET_URL_SUCCESS';
export const GET_URL_FAILURE = 'GET_URL_FAILURE';

//defining Update Student constants
export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';

// password reset actions
export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAILURE = 'PASSWORD_RESET_FAILURE';

//defining delete instructor Actions for admin
export const DELETE_INSTRUCTOR_SUCCESS = 'DELETE_INSTRUCTOR_SUCCESS';
export const DELETE_INSTRUCTOR_FAILURE = 'DELETE_INSTRUCTOR_FAILURE';

//defining delete student Actions for admin
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';

//admin user activation
export const USER_ACTIVATION_SUCCESS = 'USER_ACTIVATION_SUCCESS';
export const USER_ACTIVATION_FAILURE = 'USER_ACTIVATION_FAILURE';

//admin user deactivation
export const USER_DEACTIVATION_SUCCESS = 'USER_DEACTIVATION_SUCCESS';
export const USER_DEACTIVATION_FAILURE = 'USER_DEACTIVATION_FAILURE';