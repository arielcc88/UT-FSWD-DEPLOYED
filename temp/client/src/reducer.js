import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
  LOGOUT_REQUEST, LOGOUT_SUCCESS,LOGOUT_FAILURE,
  ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, ADD_STUDENT_FAILURE,
  ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS, ADD_COURSE_FAILURE,
  GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE,
  ADD_LESSON_REQUEST, ADD_LESSON_SUCCESS, ADD_LESSON_FAILURE,
  GET_LESSONS_REQUEST, GET_LESSONS_SUCCESS, GET_LESSONS_FAILURE,
  SET_COURSE_ID_REQUEST , SET_COURSE_ID_SUCCESS , SET_COURSE_ID_FAILURE,
  GET_ROSTER_REQUEST, GET_ROSTER_SUCCESS, GET_ROSTER_FAILURE,
  GET_ALL_INSTRUCTORS_REQUEST, GET_ALL_INSTRUCTORS_SUCCESS, GET_ALL_INSTRUCTORS_FAILURE,
  PASSRESTOK_VALIDATION_REQUEST, PASSRESTOK_VALIDATION_SUCCESS, PASSRESTOK_VALIDATION_FAILURE,
  GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_ALL_STUDENTS_FAILURE, 
  GET_URL_REQUEST, GET_URL_SUCCESS, GET_URL_FAILURE,
  UPDATE_STUDENT_REQUEST, UPDATE_STUDENT_SUCCESS, UPDATE_STUDENT_FAILURE,
  PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILURE,
  DELETE_INSTRUCTOR_SUCCESS, DELETE_INSTRUCTOR_FAILURE,
  DELETE_STUDENT_SUCCESS, DELETE_STUDENT_FAILURE,
  USER_ACTIVATION_SUCCESS, USER_ACTIVATION_FAILURE,
  USER_DEACTIVATION_SUCCESS,USER_DEACTIVATION_FAILURE,
} from "./constants";
import { validateSession, getSessionAuthObj } from "./utils/sessions";

export const initialState = {
  isFetchingAuth: false,
  isAuthenticatedUser: validateSession(),
  isLoggingOut: false,
  isLoggedOutSuccess: false,
  isValidatingPassResTok: false,
  isValidPassResTok: false,
  isResetingPassword: false,
  isPasswordResetSuccess: false,
  authObj: getSessionAuthObj(),
  isAddingNewCourse: false,
  isNewCourseAdded: false,
  courseObj: {},
  courses: [],
  courseId: "",
  allInstructors: [],
  allStudents: [],
  isAddingNewLesson: false,
  isNewLessonAdded: false,
  lessonObj: {},
  lessons: [],
  lessonId: "",
  isAddingNewUser: false,
  isNewUserAdded: false,
  stuObj: {},
  stuRoster: [],
  isUserUpdated: false,
  resPassUid: {},
  url: "",
  appMsg:"",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { 
        ...state, 
        isFetchingAuth: action.isFetchingAuth, 
        isAuthenticatedUser: action.isAuthenticatedUser 
      };
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        isFetchingAuth: action.isFetchingAuth, 
        isAuthenticatedUser: action.isAuthenticatedUser, 
        authObj: action.payload,
        error: ""
      };
    case LOGIN_FAILURE:
      return { 
        ...state, 
        isFetchingAuth: action.isFetchingAuth, 
        isAuthenticatedUser: action.isAuthenticatedUser, 
        authObj: {},
        error: action.payload
      };

    case ADD_COURSE_REQUEST:
        return {...state, isNewCourseAdded: false} 
    case ADD_COURSE_SUCCESS:
        return { 
          ...state, 
          isNewCourseAdded: true,
          courseObj: action.payload,
          error: ""
        };
    case ADD_COURSE_FAILURE:
      return { 
        ...state, 
        isNewCourseAdded: false,
        courseObj: {},
        error: action.payload
      };
    case GET_COURSES_REQUEST:
        return {...state, courses: [], error: null}
    case GET_COURSES_SUCCESS:
        return {...state, courses: action.payload, error: null}
    case GET_COURSES_FAILURE:
        return {...state, error: action.payload}


    case ADD_LESSON_REQUEST:
        return {...state, isNewLessonAdded: false} 
    case ADD_LESSON_SUCCESS:
        return { 
          ...state, 
          isNewLessonAdded: true,
          lessonObj: action.payload,
          error: ""
        };
    case ADD_LESSON_FAILURE:
        return { 
          ...state, 
          isNewLessonAdded: false,
          lessonObj: {},
          error: action.payload
        };

    case GET_LESSONS_REQUEST:
          return {...state, lessons: [], error: null}
    case GET_LESSONS_SUCCESS:
          return {...state, lessons: action.payload, error: null}
    case GET_LESSONS_FAILURE:
          return {...state, error: action.payload}
    

    case SET_COURSE_ID_REQUEST:
          return {...state, courseId: "", error: null}
    case SET_COURSE_ID_SUCCESS:
          return {...state, courseId: action.payload, error: null}
    case SET_COURSE_ID_FAILURE:
          return {...state, error: action.payload}

    case GET_ALL_INSTRUCTORS_REQUEST:
          return {...state, allInstructors: [], error: null}
    case GET_ALL_INSTRUCTORS_SUCCESS:
          return {...state, allInstructors: action.payload, error: null}
    case GET_ALL_INSTRUCTORS_FAILURE:
          return {...state, error: action.payload}

    case GET_ALL_STUDENTS_REQUEST:
          return {...state, allStudents: [], error: null}
    case GET_ALL_STUDENTS_SUCCESS:
          return {...state, allStudents: action.payload, error: null}
    case GET_ALL_STUDENTS_FAILURE:
          return {...state, error: action.payload}

    case GET_ROSTER_REQUEST:
            return {...state, stuRoster: [], error: null}
    case GET_ROSTER_SUCCESS:
            return {...state, stuRoster: action.payload, error: null}
    case GET_ROSTER_FAILURE:
            return {...state, error: action.payload}

    case LOGOUT_REQUEST:
      return { 
        ...state, 
        isLoggingOut: true
      };
    case LOGOUT_SUCCESS:
      return { 
        ...state, 
        isLoggingOut: false,
        isLoggedOutSuccess: true,
        isAuthenticatedUser: false,
        authObj: {},
        courses: [],
        error: "",
      };
    case LOGOUT_FAILURE:
      //force state reset
      return {
        ...state, 
        isLoggingOut: false,
        isLoggedOutSuccess: false,
        isAuthenticatedUser: false,
        authObj: {},
        courses: [],
        error: action.payload,
      };

    case ADD_STUDENT_REQUEST:
      return {
        ...state,
        isNewUserAdded: false 
      }
    case ADD_STUDENT_SUCCESS:
      return { 
        ...state, 
        isNewUserAdded: true,
        stuObj: action.payload,
        error: ""
      };
    case ADD_STUDENT_FAILURE:
      return { 
        ...state, 
        isNewUserAdded: false,
        stuObj: {},
        error: action.payload
      };

    //password reset
    case PASSRESTOK_VALIDATION_REQUEST:
      return { 
        ...state, 
        isValidatingPassResTok: action.isValidatingPassResTok, 
        isValidPassResTok: action.isValidPassResTok 
      }

    //password reset
    case PASSRESTOK_VALIDATION_SUCCESS:
      return { 
        ...state, 
        isValidatingPassResTok: action.isValidatingPassResTok, 
        isValidPassResTok: action.isValidPassResTok, 
        resPassUid: action.payload, 
        error: "" 
      }

    //password reset
    case PASSRESTOK_VALIDATION_FAILURE:
      return { 
        ...state, 
        isValidatingPassResTok: action.isValidatingPassResTok, 
        isValidPassResTok: action.isValidPassResTok, 
        error: action.payload, 
        resPassUid: "" 
      }

      //password reset
    case PASSWORD_RESET_REQUEST:
      return { 
        ...state, 
        isResetingPassword: action.isResetingPassword,
        isPasswordResetSuccess: action.isPasswordResetSuccess,
        appMsg: "",
        error: ""
      }

    //password reset
    case PASSWORD_RESET_SUCCESS:
      return { 
        ...state, 
        isResetingPassword: action.isResetingPassword,
        isPasswordResetSuccess: action.isPasswordResetSuccess,
        appMsg: action.payload,
        error: "" 
      }

    //password reset
    case PASSWORD_RESET_FAILURE:
      return { 
        ...state, 
        isResetingPassword: action.isResetingPassword,
        isPasswordResetSuccess: action.isPasswordResetSuccess,
        error: action.payload, 
        appMsg: "",
        resPassUid: "" 
      }

    case GET_URL_REQUEST:
       return {...state, url: '', error:null}
    case GET_URL_SUCCESS:
       return {...state, url: action.payload, error:null}
    case GET_URL_FAILURE:
       return {...state, error: action.payload} 
    
    case UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        isUserUpdated: false
      }; 
    case UPDATE_STUDENT_SUCCESS:
      return { 
        ...state, 
        isUserUpdated: true,
        stuObj: action.payload,
        error: ""
      };
    case UPDATE_STUDENT_FAILURE:
      return { 
        ...state, 
        isUserUpdated: false,
        stuObj: {},
        error: action.payload
      };

    case DELETE_INSTRUCTOR_SUCCESS:
      return state
    case DELETE_INSTRUCTOR_FAILURE:
      return { ...state, error: action.payload }

    case DELETE_STUDENT_SUCCESS:
        return state
    case DELETE_STUDENT_FAILURE:
        return { ...state, error: action.payload }

    case USER_ACTIVATION_SUCCESS:
      return state
    case USER_ACTIVATION_FAILURE:
      return {...state, error: action.payload}

    case USER_DEACTIVATION_SUCCESS:
      return state
    case USER_DEACTIVATION_FAILURE:
      return {...state, error: action.payload}
    
    default:
      return state;
  };
  
};