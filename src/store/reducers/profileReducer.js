import { TYPES } from "../constants/Constants";

const initialState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  userRole: null,
  user: null,
  tenantId:null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TYPES.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.superAdmin,
        userRole: action.payload.superAdmin.role, // assuming API returns role here
        error: null,
      };
    case TYPES.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        user: null,
        userRole: null,
        error: null,
      }

    case TYPES.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        user: null,
        userRole: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
