import { authStoreType } from "../../types";
import { GET_JWT, GET_JWT_RESULT, LOG_OUT, REGISTER, REGISTER_RESULT } from "./actions";


const initialStore: authStoreType = {
  jwt: localStorage.getItem("bearer") || null,
  signUpLoading: false,
  logInLoading: false,
  error: null,
  isLoggedIn: (localStorage.getItem("bearer") && true) || false
};

const getJWT = (state: any, action: any) => {
  return {
    ...state,
    logInLoading: true,
  };
};


const getJWTResult = (state: any, action: any) => {
  let flag = true;
  if (action.error) {
    flag = false;
  }
  return {
    ...state,
    jwt: action.payload || null,
    error: action.error,
    logInLoading: false,
    isLoggedIn: flag
  };
};


const registerUser = (state: any, action: any) => {
  return {
    ...state,
    logInLoading: true,
  };
};


const registerUserResult = (state: any, action: any) => {
  let flag = true;
  if (action.error) {
    flag = false;
  }
  return {
    ...state,
    jwt: action.payload || null,
    error: action.error,
    logInLoading: false,
    isLoggedIn: flag
  };
};
const logout = (state: any, action: any) => {
  localStorage.removeItem("bearer")
  console.log("this is getting called");
  return {
    ...state,
    jwt: null,
    isLoggedIn: false
  }
}

function reducer(state = initialStore, action: any) {
  switch (action.type) {
    case GET_JWT:
      return getJWT(state, action);
    case GET_JWT_RESULT:
      return getJWTResult(state, action);
    case REGISTER:
      return registerUser(state, action);
    case REGISTER_RESULT:
      return registerUserResult(state, action);
    case LOG_OUT:
      return logout(state, action)
    default:
      return state;
  }
}

export default reducer;
