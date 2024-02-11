import {
  SET_LOGGED_USER,
  SET_NO_LOGGED_USER,
  LOGOUT_USER,
} from "../actions/action";

const authReducer = (state, action) => {
  if (action.type === SET_LOGGED_USER) {
    return {
      ...state,
      user: action.payload,
      userLoading: false,
    };
  }

  if (action.type === SET_NO_LOGGED_USER) {
    return {
      ...state,
      userLoading: false,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: {},
      userLoading: false,
    };
  }
};
export default authReducer;
