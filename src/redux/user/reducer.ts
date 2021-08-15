import { userStoreType } from "../../types";
import { GET_USERS, GET_USERS_RESULT } from "./actions";


const initialStore: userStoreType = {
  users: [],
  isLoading: false,
  error: null,
};

const getUser = (state: any, action: any) => {
  return {
    ...state,
    isLoading: true,
  };
};


const getUserResult = (state: any, action: any) => {
  return {
    ...state,
    users: action.data || null,
    error: action.error,
    isLoading: false,
  };
};


function reducer(state = initialStore, action: any) {
  switch (action.type) {
    case GET_USERS:
      return getUser(state, action);
    case GET_USERS_RESULT:
      return getUserResult(state, action);
    default:
      return state;
  }
}

export default reducer;
